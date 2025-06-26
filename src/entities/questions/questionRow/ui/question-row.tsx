import { useState } from "react";

import styles from "./styles.module.css";

type Props = {
  title: string;
  shortAnswer?: string;
  imageSrc?: string;
  rate?: number;
  complexity?: number;
};

export const QuestionRow = ({
  title,
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
    <div>
      <h1 onClick={handleToggleClick} className={styles.title}>
        {title}
      </h1>

      {show && (
        <>
          <div>
            <span>Рейтинг {rate}</span>
            <span>Сложность {complexity}</span>
          </div>

          {imageSrc && <img src={imageSrc} alt="image question" />}

          <p>{shortAnswer}</p>
          <p>Подробнее</p>
        </>
      )}
    </div>
  );
};
