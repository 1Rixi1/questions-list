import cn from "classnames";
import styles from "./styles.module.css";

type Props = {
  title: string;
  description: string;
  imageSrc?: string;
  className?: string;
};

export const QuestionHeader = ({
  imageSrc,
  title,
  description,
  className,
}: Props) => {
  return (
    <header
      className={cn(className, styles.sectionHeader)}
      aria-labelledby="question-description"
    >
      {imageSrc && (
        <figure>
          <img src={imageSrc} alt="imageDetails" />
        </figure>
      )}
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
};
