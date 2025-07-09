import styles from "./styles.module.css";
import {
  FilterPanel,
  QuestionListWidget,
} from "@/widgets/question/questionList/ui";

const QuestionList = () => {
  return (
    <main className={styles.wrapper}>
      <QuestionListWidget />
      <FilterPanel />
    </main>
  );
};

export default QuestionList;
