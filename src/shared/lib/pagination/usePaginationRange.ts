import { useMemo } from "react";
import { useQueryParams } from "@/shared/lib/queryParams/useQueryParams";

// CORE_PAGINATION_SLOTS = firstPage + currentPage + lastPage + DOTS

export const CORE_PAGINATION_SLOTS = 5;

// SINGLE_DOT_WINDOW_SLOTS = firstPage + currentPage + lastPage (без второго DOTS)

export const SINGLE_DOT_WINDOW_SLOTS = CORE_PAGINATION_SLOTS - 2;

//  Соседние числа слева и справа

export const SIBLING_SIDES_COUNT = 2;

export const usePaginationRange = (
  total?: number,
  limit?: number,
  siblingCount: number = 1
) => {
  const { page } = useQueryParams();

  return useMemo(() => {
    const currentPage = page ? Number(page) : 1;

    const totalNumbers =
      CORE_PAGINATION_SLOTS + SIBLING_SIDES_COUNT * siblingCount;
    const paginationWindow =
      SINGLE_DOT_WINDOW_SLOTS + SIBLING_SIDES_COUNT * siblingCount;

    const totalPages = total && limit ? Math.ceil(total / limit) : 1;

    const range = (from: number, to: number) => {
      return Array.from({ length: to - from + 1 }, (_, i) => i + from);
    };

    if (totalNumbers >= totalPages) {
      return {
        pages: range(1, totalPages),
        currentPage,
        totalPages,
      };
    }

    const leftSibling = Math.max(currentPage - siblingCount, 1);

    const rightSibling = Math.min(currentPage + 1, totalPages);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    if (showLeftDots && !showRightDots) {
      return {
        pages: [
          1,
          "...",
          ...range(totalPages - (paginationWindow - 1), totalPages),
        ],
        currentPage,
        totalPages,
      };
    }

    if (!showLeftDots && showRightDots) {
      return {
        pages: [...range(1, paginationWindow), "...", totalPages],
        currentPage,
        totalPages,
      };
    }

    return {
      pages: [1, "...", ...range(leftSibling, rightSibling), "...", totalPages],
      currentPage,
      totalPages,
    };
  }, [total, limit, siblingCount, page]);
};
