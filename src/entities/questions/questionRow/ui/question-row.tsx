import { useState } from "react";

import { Link } from "react-router-dom";

type Props = {
  title: string;
  id: number;
  shortAnswer?: string;
  imageSrc?: string;
  rate?: number;
  complexity?: number;
};

import styles from "./styles.module.css";

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
        <h2 className={`${styles.title} ${show && styles.show}`} onClick={handleToggleClick}>
          {title}
        </h2>
      </header>

      {show && (
        <>
          <section className={styles.section} aria-live="polite">
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
                <img
                  className={styles.img}
                  src={imageSrc}
                  alt="image question"
                />
              </figure>
            )}

            {shortAnswer && (
              <p
                className={styles.shortAnswer}
                dangerouslySetInnerHTML={{ __html: shortAnswer }}
              />
            )}
          </section>
          <nav className={styles.nav}>
            <Link className={styles.more} to={`${id}`}>
              Подробнее
            </Link>
          </nav>
        </>
      )}
    </article>
  );
};
