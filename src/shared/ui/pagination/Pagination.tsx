import { usePaginationRange } from "@/shared/lib";

import styles from "./styles.module.css";
import { Chip } from "@/shared/ui";
import cn from "classnames";

type Props = {
  onChange: (value: string) => void;
  total: number;
  limit?: number;
};

export const Pagination = ({ onChange, total, limit }: Props) => {
  const { pages, currentPage, totalPages } = usePaginationRange(total, limit);

  const handleClickPagination = (page: number) => {
    onChange(String(page));
  };

  const changePage = (direction: "next" | "prev") => {
    if (direction === "next") {
      const newPage = String(Math.min(currentPage + 1, totalPages));

      onChange(newPage);
    }

    if (direction === "prev") {
      const newPage = String(Math.max(currentPage - 1, 1));

      onChange(newPage);
    }
  };

  return (
    <nav className={styles.nav} aria-label="Пагинация">
      <li className={styles.arrowItem}>
        <Chip className={styles.arrowLeft} onClick={() => changePage("prev")} />
      </li>

      <ul className={styles.list}>
        {pages.map((page) =>
          page === "..." ? (
            <li className={styles.punctuation}>...</li>
          ) : (
            <li key={page}>
              <Chip
                className={cn(
                  { [styles.pageSelected]: currentPage === page },
                  styles.pageItem
                )}
                selected={page === currentPage}
                onClick={() => handleClickPagination(page as number)}
              >
                {page}
              </Chip>
            </li>
          )
        )}
      </ul>

      <li className={styles.arrowItem}>
        <Chip
          className={styles.arrowRight}
          onClick={() => changePage("next")}
        />
      </li>
    </nav>
  );
};
