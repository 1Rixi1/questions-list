import Chip from "@/shared/ui/chip/chip.tsx";
import { usePaginationRange } from "@/shared/lib/use-pagination-range.ts";

type Props = {
  currentPage: number;
  totalPage: number;
  onChange: (value: string) => void;
};

export const Pagination = ({ currentPage, totalPage, onChange }: Props) => {
  const pages = usePaginationRange(totalPage, currentPage);

  const handleClickPagination = (page: number) => {
    onChange(String(page));
  };

  const prevPage = () => {
    const newPage = String(Math.max(currentPage - 1, 1));

    onChange(newPage);
  };
  const nextPage = () => {
    const newPage = String(Math.min(currentPage + 1, totalPage));

    onChange(newPage);
  };

  return (
    <div>
      <Chip onClick={prevPage}>←</Chip>

      {pages.map((page) =>
        page === "..." ? (
          <span>...</span>
        ) : (
          <Chip
            key={page}
            selected={page === currentPage}
            onClick={() => handleClickPagination(page as number)}
          >
            {page}
          </Chip>
        )
      )}

      <Chip onClick={nextPage}>→</Chip>
    </div>
  );
};
