import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";

import styles from "./styles.module.css";

import { BackButton, DataStatus, Spinner } from "@/shared/ui";
import {
  LongAnswer,
  MetaInfo,
  QuestionHeader,
  ShortAnswer,
  useGetQuestionQuery,
} from "@/entities/question/questionDetails";

const QuestionDetails = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionQuery(id ?? skipToken);

  if (!question) {
    return <Spinner />;
  }

  return (
    <DataStatus
      isError={isError}
      isErrorTitle="Ошибка при запросе вопроса. Измените поиск."
      isLoading={isLoading}
      variant="details"
    >
      <main className={styles.wrapper}>
        <article className={styles.question} aria-labelledby="question-main">
          <section className={styles.sectionMain}>
            <BackButton />
            <QuestionHeader
              className={styles.sectionItem}
              title={question.title}
              description={question.description}
              imageSrc={question.imageSrc}
            />
            {question.shortAnswer && (
              <ShortAnswer
                className={styles.sectionItem}
                title={question.shortAnswer}
              />
            )}
            {question.longAnswer && (
              <LongAnswer
                className={styles.sectionItem}
                title={question.longAnswer}
              />
            )}
          </section>
          <MetaInfo question={question} />
        </article>
      </main>
    </DataStatus>
  );
};

export default QuestionDetails;
