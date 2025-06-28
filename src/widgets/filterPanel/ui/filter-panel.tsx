import { Specializations } from "@/features/specializations/ui/specializations.tsx";
import { Skills } from "@/features/skills";
import { Complexity } from "@/features/complexity/ui/complexity.tsx";
import { Rate } from "@/features/rate/ui/rate.tsx";
import styles from "./styles.module.css";
import { Search } from "@/features/search/ui/search.tsx";

export const FilterPanel = () => {
  return (
    <form className={styles.form}>
      <fieldset>
        <legend className="visually-hidden">Специализация</legend>
        <Specializations />
      </fieldset>

      <fieldset>
        <legend className="visually-hidden">Навыки</legend>
        <Skills />
      </fieldset>

      <fieldset>
        <legend className="visually-hidden">Уровень сложности</legend>
        <Complexity />
      </fieldset>

      <fieldset>
        <legend className="visually-hidden">Рейтинг</legend>
        <Rate />
      </fieldset>
      <fieldset>
        <legend className="visually-hidden">Поиск вопроса</legend>
        <Search />
      </fieldset>
    </form>
  );
};
