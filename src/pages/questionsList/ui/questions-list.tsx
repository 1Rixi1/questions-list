import styles from "./styles.module.css";
import { useQueryParams } from "@/shared/lib";
import { Pagination } from "@/features/pagination";
import { FilterPanel } from "@/widgets/filterPanel";
import { useAutoFilter } from "@/features/questionsList/lib/use-auto-filter.tsx";
import DataStatus from "@/shared/ui/dataStatus/ui/data-status.tsx";
import { useGetQuestionsQuery } from "@/entities/questionsList";
import { QuestionRow } from "@/entities/questionRow";

export const QuestionsList = () => {
  const { specialization, skills, complexity, rate, setPage, title, page } =
    useQueryParams();

  const {
    data: questionsList,
    isLoading,
    isError,
  } = useGetQuestionsQuery({
    specialization,
    skills,
    complexity,
    rate,
    title,
    page,
  });

  useAutoFilter();

  if (!questionsList) {
    return null;
  }

  return (
    <DataStatus isError={isError} isLoading={isLoading}>
      <main className={styles.wrapper}>
        <section
          className={styles.questions}
          aria-labelledby="questions-heading"
        >
          <h1 className={styles.title} id="questions-heading">
            Список вопросов
          </h1>

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

          <Pagination onChange={setPage} />
        </section>

        <FilterPanel />
      </main>
    </DataStatus>
  );
};
