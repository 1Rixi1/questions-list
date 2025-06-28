import { useQueryParams } from "@/shared/lib/use-query-params.ts";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type Props = {};

export const Search = ({}: Props) => {
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

  return <input type="text" value={localTitle} onChange={handleChangeTitle} />;
};
