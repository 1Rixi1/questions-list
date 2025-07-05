import { usePaginationRange, useQueryParams } from "@/shared/lib";

import styles from "./styles.module.css";
import { Chip } from "@/shared/ui";
import { useGetQuestionsQuery } from "@/entities/questionsList";
import cn from "classnames";

type Props = {
  onChange: (value: string) => void;
};

export const Pagination = ({ onChange }: Props) => {
  const { specialization, skills, page, title, complexity, rate } =
    useQueryParams();

  const { data: questionsList } = useGetQuestionsQuery({
    specialization,
    skills,
    page,
    complexity,
    rate,
    title,
  });

  const { pages, currentPage, totalPages } = usePaginationRange(
    questionsList?.total,
    questionsList?.limit
  );

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
        <Chip className={styles.arrowRight} onClick={nextPage} />
      </li>
    </nav>
  );
};
