import type { ChangeEvent } from "react";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import styles from "./styles.module.css";
import { useQueryParams } from "@/shared/lib";
import { Input, SearchIcon } from "@/shared/ui";

export const FilterBySearch = () => {
  const { setTitle } = useQueryParams();

  const [localTitle, setLocalTitle] = useState("");

  const debouncedSetTitle = useDebouncedCallback((localTitle) => {
    const currentTitle = localTitle.trim();

    setTitle(currentTitle);
  }, 500);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalTitle(e.currentTarget.value);

    debouncedSetTitle(e.currentTarget.value);
  };

  return (
    <fieldset className={styles.wrapper}>
      <legend className="visually-hidden">Поиск</legend>
      <SearchIcon className={styles.loupe} />
      <Input
        type="text"
        name="search"
        placeholder="Введите запрос ..."
        value={localTitle}
        onChange={handleChangeTitle}
      />
    </fieldset>
  );
};
