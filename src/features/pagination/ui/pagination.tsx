import { usePaginationRange } from "@/shared/lib";

import styles from "./styles.module.css";
import cn from "classnames";
import { Chip } from "@/shared/ui";

type Props = {
  onChange: (value: string) => void;
};

export const Pagination = ({ onChange }: Props) => {
  const { pages, currentPage, totalPages } = usePaginationRange();

  const handleClickPagination = (page: number) => {
    onChange(String(page));
  };

  const prevPage = () => {
    const newPage = String(Math.max(currentPage - 1, 1));

    onChange(newPage);
  };
  const nextPage = () => {
    const newPage = String(Math.min(currentPage + 1, totalPages));

    onChange(newPage);
  };

  return (
    <nav className={styles.nav} aria-label="Пагинация">
      <li className={styles.arrowItem}>
        <Chip className={styles.arrowLeft} onClick={prevPage} />
      </li>

      <ul className={styles.list}>
        {pages.map((page) =>
          page === "..." ? (
            <li className={styles.punctuation}>...</li>
          ) : (
            <li key={page} className={styles.pageItem}>
              <Chip
                className={cn(styles.page, {
                  [styles.pageSelected]: page === currentPage,
                })}
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
        <Chip className={styles.arrowRight} onClick={nextPage} />
      </li>
    </nav>
  );
};
