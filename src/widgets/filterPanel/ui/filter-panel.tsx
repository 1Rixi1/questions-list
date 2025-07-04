import { Skills } from "@/features/skills";
import styles from "./styles.module.css";
import { Specializations } from "@/features/specializations";
import { Search } from "@/features/search";
import { Complexity } from "@/features/complexity";
import { Rate } from "@/features/rate";
import { CloseIcon, FilterIcon } from "@/shared/ui";
import { useState } from "react";

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
          <Search />
          <Specializations />
          <Skills />
          <Complexity />
          <Rate />
        </form>
      </aside>
    </>
  );
};
