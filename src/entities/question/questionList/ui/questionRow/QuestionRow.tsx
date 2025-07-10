import { useState } from "react";

import DOMPurify from "dompurify";

import cn from "classnames";
import styles from "./styles.module.css";
import { ButtonNavigate } from "@/shared/ui";

type Props = {
  title: string;
  id: number;
  shortAnswer?: string;
  imageSrc?: string;
  rate?: number;
  complexity?: number;
};

export const QuestionRow = ({
  title,
  id,
  shortAnswer,
  imageSrc,
  rate,
  complexity,
}: Props) => {
  const [show, setShow] = useState(false);

  const handleToggleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <article className={styles.row}>
      <header className={styles.header}>
        <h2
          className={cn(styles.title, { [styles.show]: show })}
          onClick={handleToggleClick}
          role="button"
          aria-expanded={show}
        >
          {title}
        </h2>
      </header>

      {show && (
        <section className={styles.question} aria-live="polite">
          <dl className={styles.meta}>
            <div className={styles.metaItem}>
              <dt className={styles.term}>Рейтинг:</dt>
              <dd className={styles.desc}>{rate}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt className={styles.term}>Сложность:</dt>
              <dd className={styles.desc}>{complexity}</dd>
            </div>
          </dl>

          {imageSrc && (
            <figure className={styles.figure}>
              <img className={styles.img} src={imageSrc} alt="image question" />
            </figure>
          )}

          {shortAnswer && (
            <p
              className={styles.shortAnswer}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(shortAnswer),
              }}
            ></p>
          )}
          <nav className={styles.nav}>
            <ButtonNavigate
              className={styles.more}
              title="Подробнее"
              navigate={`${id}`}
            />
          </nav>
        </section>
      )}
    </article>
  );
};
