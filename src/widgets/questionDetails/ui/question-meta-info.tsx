import { useState } from "react";
import { Chip, CloseIcon, MetaIcon } from "@/shared/ui";

import styles from "./styles.module.css";
import type {QuestionsListData} from "@/entities/questionsList/type/type.ts";

type Props = {
  question: QuestionsListData;
};

export const QuestionMetaInfo = ({ question }: Props) => {
  const [showAside, setShowAside] = useState(false);

  return (
    <section className={styles.sectionAside}>
      <aside
        className={`${styles.aside} ${showAside && styles.showAside}`}
        aria-labelledby="meta-queston"
      >
        <h2 className="visually-hidden">Информация о вопросе</h2>

        <section
          className={styles.sectionItem}
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

        <section className={styles.sectionItem} aria-labelledby="meta-skills">
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
            className={styles.sectionItem}
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

        {showAside && (
          <CloseIcon
            className={`${showAside && styles.closeBtn}`}
            onClick={() => setShowAside(false)}
          />
        )}
        <footer className={styles.footer}>
          <h3 className={styles.authorTitle}>Автор: </h3>
          <p className={styles.authorName}>{question.createdBy.username}</p>
        </footer>
      </aside>

      {!showAside && (
        <button
          aria-label={
            showAside
              ? "Показать информацию о вопросе"
              : "Скрыть информацию о вопросе"
          }
          type="button"
          className={styles.metaIcon}
          onClick={() => setShowAside(true)}
        >
          <MetaIcon />
        </button>
      )}
    </section>
  );
};

