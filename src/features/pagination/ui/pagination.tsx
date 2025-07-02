import { usePaginationRange } from "@/shared/lib";

import styles from "./styles.module.css";
import cn from "classnames";
import { Chip } from "@/shared/ui";

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
    <nav className={styles.nav} aria-label="Пагинация">
      <li className={styles.arrowItem}>
        <Chip className={styles.arrowLeft} onClick={prevPage} />
      </li>

      <ul className={styles.list}>
        {pages.map((page) =>
          page === "..." ? (
            <li className={styles.punctuation}>...</li>
          ) : (
            <li className={styles.pageItem}>
              <Chip
                key={page}
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
