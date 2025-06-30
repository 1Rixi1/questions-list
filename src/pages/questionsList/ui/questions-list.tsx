import { useGetQuestionsQuery } from "@/entities/questions/questionsList/api/questions-list-api.ts";
import { QuestionRow } from "@/entities/questions";
import { FilterPanel } from "@/widgets/filterPanel/ui/filter-panel.tsx";
import { useQueryParams } from "@/shared/lib/use-query-params.ts";
import { Pagination } from "@/features/pagination/ui/pagination.tsx";

import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { FilterIcon } from "@/shared/ui/icons/filter/filter-icon.tsx";
import { CloseIcon } from "@/shared/ui/icons/close/close-icon.tsx";

export const QuestionsList = () => {
  const {
    specialization,
    setSpecialization,
    skills,
    setSkills,
    complexity,
    rate,
    setPage,
    title,
    page,
  } = useQueryParams();
  const {
    data: questionsList,
    isLoading,
    isError,
    isFetching,
  } = useGetQuestionsQuery({
    specialization,
    skills,
    complexity,
    rate,
    title,
    page,
  });

  const [filterOpen, setFilterOpen] = useState(false);

  const autoFilled = useRef({ spec: false, skills: false });

  useEffect(() => {
    autoFilled.current = { spec: false, skills: false };
  }, [title]);

  useEffect(() => {
    if (isFetching || !questionsList) {
      return;
    }

    const isSearch = Boolean(title?.trim());

    const specIds = new Set<string>();

    const skillsIds = new Set<string>();

    questionsList.data.forEach((question) => {
      question.questionSpecializations.forEach((spec) =>
        specIds.add(String(spec.id))
      );

      question.questionSkills.forEach((skill) =>
        skillsIds.add(String(skill.id))
      );
    });

    const specIdsStr = [...specIds].join(",");
    const skillsIdsStr = [...skillsIds].join(",");

    if (isSearch && !specialization && specIdsStr && !autoFilled.current.spec) {
      setSpecialization(specIdsStr);
      autoFilled.current.spec = true;
    }

    if (isSearch && !skills && skillsIdsStr && !autoFilled.current.skills) {
      setSkills(skillsIdsStr);
      autoFilled.current.skills = true;
    }
  }, [questionsList, title, isFetching]);

  if (isLoading) {
    return <div>Загрузка ...</div>;
  }

  if (isError) {
    return <div>Ошибка</div>;
  }

  if (!questionsList) {
    return null;
  }

  const totalPages =
    questionsList.total && questionsList.limit
      ? Math.ceil(questionsList.total / questionsList.limit)
      : 1;

  const currentPage = page ? Number(page) : 1;

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.section} aria-labelledby="questions-heading">
          <h1 className={styles.title} id="questions-heading">
            Список вопросов
          </h1>

          <FilterIcon
            className={styles.filterIcon}
            onClick={() => setFilterOpen(true)}
          />

          <ul className={styles.list}>
            {questionsList.data.map(
              ({ title, shortAnswer, imageSrc, rate, complexity, id }) => (
                <li key={id}>
                  <QuestionRow
                    id={id}
                    title={title}
                    shortAnswer={shortAnswer}
                    imageSrc={imageSrc}
                    rate={rate}
                    complexity={complexity}
                  />
                </li>
              )
            )}
          </ul>
          <nav
            className={styles.pagination}
            aria-label="Навигация по страницам списка вопросов"
          >
            <Pagination
              totalPage={totalPages}
              currentPage={currentPage}
              onChange={setPage}
            />
          </nav>
        </section>

        <aside
          className={`${styles.filter} ${filterOpen && styles.open}`}
          aria-labelledby="filter-heading"
        >
          <h2 id="filter-heading" className="visually-hidden">
            Фильтрация
          </h2>

          {filterOpen &&
            <CloseIcon
              className={`${filterOpen && styles.closeBtn}`}
              onClick={() => setFilterOpen(false)}
            />
          }

          <FilterPanel />
        </aside>
      </div>
    </main>
  );
};
