import { useMemo } from "react";

export const usePaginationRange = (
  totalPages: number,
  currentPage: number,
  siblingCount: number = 1
) => {
  return useMemo(() => {
    const range = (from: number, to: number) => {
      return Array.from({ length: to - from + 1 }, (_, i) => i + from);
    };

    const totalNumbers = 5 + 2 * siblingCount;

    if (totalNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSibling = Math.max(currentPage - siblingCount, 1);

    const rightSibling = Math.min(currentPage + 1, totalPages);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    const count = 3 + 2 * siblingCount;

    if (showLeftDots && !showRightDots) {
      return [1, "...", ...range(totalPages - (count - 1), totalPages)];
    }

    if (!showLeftDots && showRightDots) {
      return [...range(1, count), "...", totalPages];
    }

    return [1, "...", ...range(leftSibling, rightSibling), "...", totalPages];
  }, [totalPages, currentPage, siblingCount]);
};
