import styles from "./styles.module.css";
import { Chip } from "@/shared/ui";

export type OptionsType = {
  id: number | string;
  title: string;
};

type Props = {
  title: string;
  value?: string;
  cut?: number;
  show?: boolean;
  setShow?: (value: boolean) => void;
  options: OptionsType[];
  onChange: (value: string) => void;
};

export const ChipList = ({
  title,
  value,
  cut,
  show,
  setShow,
  options,
  onChange,
}: Props) => {
  const visibleOptions = show ? options : options.slice(0, cut);

  const handleClickToggle = () => {
    if (setShow) {
      setShow(!show);
    }
  };

  const selectedValues = value ? value.split(",") : [];

  const handleClickChip = (id: string) => {
    const updatedSelectedIds = selectedValues.includes(id)
      ? selectedValues.filter((value) => value !== id)
      : [...selectedValues, id];

    onChange(updatedSelectedIds.join(","));
  };

  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.title}>{title}</legend>
      <ul className={styles.list}>
        {visibleOptions.map(({ id, title }) => {
          const strId = String(id);
          const isSelected = selectedValues.includes(strId);
          return (
            <li key={id} className={styles.listitem}>
              <Chip
                className={styles.chip}
                selected={isSelected}
                onClick={() => handleClickChip(strId)}
                role="checkbox"
                aria-checked={isSelected}
                aria-label={title}
              >
                {title}
              </Chip>
            </li>
          );
        })}
      </ul>
      {cut && (
        <button
          className={styles.btn}
          onClick={handleClickToggle}
          type="button"
        >
          {show ? "Скрыть" : "Показать все"}
        </button>
      )}
    </fieldset>
  );
};
