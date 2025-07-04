import type { ChangeEvent } from "react";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import styles from "./styles.module.css";
import { useQueryParams } from "@/shared/lib";
import { SearchIcon } from "@/shared/ui";

export const Search = () => {
  const { setTitle } = useQueryParams();

  const [localTitle, setLocalTitle] = useState("");

  const debounced = useDebouncedCallback((localTitle) => {
    const currentTitle = localTitle.trim();

    setTitle(currentTitle);
  }, 500);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalTitle(e.currentTarget.value);

    debounced(e.currentTarget.value);
  };

  return (
    <fieldset className={styles.wrapper}>
      <legend className="visually-hidden">Поиск</legend>
      <SearchIcon className={styles.loupe} />
      <input
        className={styles.input}
        type="text"
        name="search"
        placeholder="Введите запрос ..."
        value={localTitle}
        onChange={handleChangeTitle}
      />
    </fieldset>
  );
};
