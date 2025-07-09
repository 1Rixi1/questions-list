import styles from "./styles.module.css";
import { CloseIcon, FilterIcon } from "@/shared/ui";
import { useState } from "react";
import { Specialization } from "@/features/specialization";
import { Skill } from "@/features/skill";
import {
  FilterByComplexity,
  FilterByRate,
  FilterBySearch,
} from "@/features/question/questionList";

export const FilterPanel = () => {
  const [asideOpen, setAsideOpen] = useState(false);

  return (
    <>
      {!asideOpen && (
        <button
          className={styles.filterIconBtn}
          type="button"
          aria-label={asideOpen ? "Скрыть фильтры" : "Показать фильтры"}
        >
          <FilterIcon
            className={styles.filterIcon}
            onClick={() => setAsideOpen(true)}
          />
        </button>
      )}
      <aside
        className={`${styles.aside} ${asideOpen && styles.asideOpen}`}
        aria-labelledby="filter-heading"
      >
        <h2 id="filter-heading" className="visually-hidden">
          Фильтрация
        </h2>
        {asideOpen && (
          <CloseIcon
            className={`${asideOpen && styles.closeBtn}`}
            onClick={() => setAsideOpen(false)}
          />
        )}
        <form className={styles.form}>
          <FilterBySearch />
          <Specialization />
          <Skill />
          <FilterByComplexity />
          <FilterByRate />
        </form>
      </aside>
    </>
  );
};
