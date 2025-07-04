import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";

import styles from "./styles.module.css";
import {
  LongAnswer,
  QuestionHeader,
  ShortAnswer,
  useGetQuestionQuery,
} from "@/entities/questionDetails";
import DataStatus from "@/shared/ui/dataStatus/ui/data-status.tsx";
import { QuestionMetaInfo } from "@/widgets/questionDetails";
import { BackButton } from "@/shared/ui";

export const QuestionDetails = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionQuery(id ?? skipToken);

  if (!question) {
    return null;
  }

  return (
    <DataStatus isError={isError} isLoading={isLoading}>
      <main className={styles.wrapper}>
        <article className={styles.question} aria-labelledby="question-main">
          <section className={styles.sectionMain}>
            <BackButton className={styles.nav} />

            <QuestionHeader
              className={styles.sectionItem}
              title={question.title}
              description={question.description}
              imageSrc={question.imageSrc}
            />

            {question.shortAnswer && (
              <ShortAnswer
                className={styles.sectionItem}
                shortAnswer={question.shortAnswer}
              />
            )}

            {question.longAnswer && (
              <LongAnswer
                className={styles.sectionItem}
                longAnswer={question.longAnswer}
              />
            )}
          </section>

          <QuestionMetaInfo question={question} />
        </article>
      </main>
    </DataStatus>
  );
};
