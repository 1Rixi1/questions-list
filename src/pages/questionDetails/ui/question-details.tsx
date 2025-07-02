import { useNavigate, useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";

import styles from "./styles.module.css";
import { useState } from "react";
import {useGetQuestionQuery} from "@/entities/question";
import {Chip, CloseIcon, Collapsible, MetaIcon} from "@/shared/ui";

export const QuestionDetails = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionQuery(id ?? skipToken);

  const [showAside, setShowAside] = useState(false);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>isError</div>;
  }

  if (!question) {
    return null;
  }

  return (
    <main className={styles.wrapper}>
      <article className={styles.question} aria-labelledby="question-main">

        <section className={styles.sectionMain}>
          <nav
            className={styles.nav}
            aria-label="Навигация - назад ко всем вопросам"
          >
            <button onClick={() => navigate(-1)} type="button">
              Назад
            </button>
          </nav>

          <header>
            <section
              className={`${styles.sectionItem} ${styles.sectionHeader}`}
              aria-labelledby="question-description"
            >
              {question.imageSrc && (
                <figure>
                  <img src={question.imageSrc} alt="imageDetails" />
                </figure>
              )}
              <div>
                <h1>{question.title}</h1>
                <p>{question.description}</p>
              </div>
            </section>

            <MetaIcon
              className={styles.metaIcon}
              onClick={() => setShowAside(true)}
            />
          </header>

          {question.shortAnswer && (
            <section
              className={`${styles.sectionItem}`}
              aria-labelledby="question-shortanswer"
            >
              <h3>Краткий ответ</h3>
              <p dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />
            </section>
          )}
          {question.longAnswer && (
            <section
              className={`${styles.sectionItem}`}
              aria-labelledby="question-longanswer"
            >
              <h3>Развёрнутый ответ</h3>
              <Collapsible>
                <p dangerouslySetInnerHTML={{ __html: question.longAnswer }} />
              </Collapsible>
            </section>
          )}
        </section>

        <aside
          className={`${styles.aside} ${showAside && styles.showAside}`}
          aria-labelledby="meta-queston"
        >
          <h2 className="visually-hidden">Информация о вопросе</h2>

          <section
            className={styles.sectionAside}
            aria-labelledby="meta-description-list"
          >
            <h3 className={styles.titleAside}>Уровень</h3>

            <dl className={styles.meta}>
              <div className={styles.metaItem}>
                <dt>Сложность:</dt>
                <dd>{question.complexity}</dd>
              </div>

              <div className={styles.metaItem}>
                <dt>Рейтинг:</dt>
                <dd>{question.rate}</dd>
              </div>
            </dl>
          </section>

          <section
            className={styles.sectionAside}
            aria-labelledby="meta-skills"
          >
            <h3 className={styles.titleAside}>Навыки</h3>

            {question.questionSkills.map(({ title }) => {
              return (
                <Chip key={title} selected={true}>
                  {title}
                </Chip>
              );
            })}
          </section>

          {question.keywords && (
            <section
              className={styles.sectionAside}
              aria-labelledby="meta-keywords"
            >
              <h3 className={styles.titleAside}>Ключевые слова:</h3>

              {question.keywords.map((keyword) => {
                return (
                  <span key={keyword} className={styles.keyword}>
                    {" "}
                    #{keyword}
                  </span>
                );
              })}
            </section>
          )}

          <footer className={styles.footer}>
            <h3 className={styles.authorTitle}>Автор: </h3>
            <p className={styles.authorName}>{question.createdBy.username}</p>
          </footer>

          {showAside && (
            <CloseIcon
              className={`${showAside && styles.closeBtn}`}
              onClick={() => setShowAside(false)}
            />
          )}
        </aside>
      </article>
    </main>
  );
};
