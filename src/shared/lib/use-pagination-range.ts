import { useMemo } from "react";
import { useQueryParams } from "@/shared/lib/use-query-params.ts";
import {useGetQuestionsQuery} from "@/entities/questionsList";

export const usePaginationRange = (siblingCount: number = 1) => {
  const { data: questionsList } = useGetQuestionsQuery({});

  const { page } = useQueryParams();

  const currentPage = page ? Number(page) : 1;

  const totalNumbers = 5 + 2 * siblingCount;

  const totalPages =
    questionsList && questionsList.total && questionsList.limit
      ? Math.ceil(questionsList.total / questionsList.limit)
      : 1;

  return useMemo(() => {
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

    const count = 3 + 2 * siblingCount;

    if (showLeftDots && !showRightDots) {
      return {
        pages: [1, "...", ...range(totalPages - (count - 1), totalPages)],
        currentPage,
        totalPages,
      };
    }

    if (!showLeftDots && showRightDots) {
      return {
        pages: [...range(1, count), "...", totalPages],
        currentPage,
        totalPages,
      };
    }

    return {
      pages: [1, "...", ...range(leftSibling, rightSibling), "...", totalPages],
      currentPage,
      totalPages,
    };
  }, [siblingCount, currentPage, totalPages]);
};
