import { useMemo } from "react";

type Option = {
  id: string | number;
  title: string;
};

export const useOptions = <T extends { id: number | string; title: string }>(
  items?: T[]
): Option[] => {
  return useMemo(
    () =>
      items
        ? items.map((el) => ({
            id: el.id,
            title: el.title,
          }))
        : [],
    [items]
  );
};
