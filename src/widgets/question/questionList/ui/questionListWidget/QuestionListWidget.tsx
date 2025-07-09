import { useQueryParams } from "@/shared/lib";
import { DataStatus, Pagination, Spinner } from "@/shared/ui";

import styles from "./styles.module.css";
import {
  QuestionRow,
  useGetQuestionsQuery,
} from "@/entities/question/questionList";

export const QuestionListWidget = () => {
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

  if (!questionsList) {
    return <Spinner />;
  }

  return (
    <DataStatus
      isError={isError}
      isErrorTitle="Ошибка при запросе списка вопросов. Попробуйте позже."
      isLoading={isLoading}
      variant="list"
    >
      <section className={styles.questions} aria-labelledby="questions-heading">
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
        <Pagination
          onChange={setPage}
          limit={questionsList.limit}
          total={questionsList.total}
        />
      </section>
    </DataStatus>
  );
};
