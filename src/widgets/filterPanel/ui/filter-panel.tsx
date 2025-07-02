import { Skills } from "@/features/skills";
import styles from "./styles.module.css";
import { Specializations } from "@/features/specializations";
import { Search } from "@/features/search";
import { Complexity } from "@/features/complexity";
import { Rate } from "@/features/rate";

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
