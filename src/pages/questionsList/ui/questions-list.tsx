import styles from "./styles.module.css";
import { useQueryParams } from "@/shared/lib";
import { Pagination } from "@/features/pagination";
import { FilterPanel } from "@/widgets/filterPanel";
import { useGetQuestionsQuery } from "@/entities/questionsList";
import { QuestionRow } from "@/entities/questionRow";
import { DataStatus } from "@/shared/ui";
import { useAutoFilter } from "@/features/questionsList";

export const QuestionsList = () => {
  const { specialization, skills, complexity, rate, setPage, title, page } =
    useQueryParams();

  useAutoFilter();

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

  if (!questionsList) {
    return null;
  }

  return (
    <DataStatus isError={isError} isLoading={isLoading} variant="list">
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
