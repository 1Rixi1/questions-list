import { QuestionRow, useGetQuestionsQuery } from "@/entities/questions";

import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { useQueryParams } from "@/shared/lib";
import { CloseIcon, FilterIcon } from "@/shared/ui";
import { Pagination } from "@/features/pagination";
import { FilterPanel } from "@/widgets/filterPanel";

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

  const [asideOpen, setAsideOpen] = useState(false);

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
  }, [
    questionsList,
    title,
    isFetching,
    specialization,
    setSpecialization,
    skills,
    setSkills,
  ]);

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
      <div className={styles.layout}>
        <section
          className={styles.questions}
          aria-labelledby="questions-heading"
        >
          <h1 className={styles.title} id="questions-heading">
            Список вопросов
          </h1>

          <FilterIcon
            className={styles.filterIcon}
            onClick={() => setAsideOpen(true)}
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
          className={`${styles.aside} ${asideOpen && styles.asideOpen}`}
          aria-labelledby="filter-heading"
        >
          <h2 id="filter-heading" className="visually-hidden">
            Фильтрация
          </h2>

          {asideOpen && (
            <CloseIcon
              className={`${asideOpen && styles.closeBtn}`}
              onClick={() => setAsideOpen(false)}
            />
          )}

          <FilterPanel />
        </aside>
      </div>
    </main>
  );
};
