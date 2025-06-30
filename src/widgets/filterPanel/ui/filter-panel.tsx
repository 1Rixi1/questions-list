import { Specializations } from "@/features/specializations/ui/specializations.tsx";
import { Skills } from "@/features/skills";
import { Complexity } from "@/features/complexity/ui/complexity.tsx";
import { Rate } from "@/features/rate/ui/rate.tsx";
import styles from "./styles.module.css";
import { Search } from "@/features/search/ui/search.tsx";

export const FilterPanel = () => {
  return (
    <form className={styles.form}>
      <Search />
      <Specializations />
      <Skills />
      <Complexity />
      <Rate />
    </form>
  );
};
