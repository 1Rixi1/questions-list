
import styles from "./styles.module.css";
import {Chip} from "@/shared/ui";

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

export const ChipSelect = ({
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

  const arrValues = value ? value.split(",") : [];

  const handleClickChip = (id: number | string) => {
    const strId = String(id);

    const newArr = arrValues.includes(strId)
      ? arrValues.filter((value) => value !== strId)
      : [...arrValues, strId];

    onChange(newArr.join(","));
  };

  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.title}>{title}</legend>

      <ul className={styles.list}>
        {visibleOptions.map(({ id, title }) => (
          <li key={id} className={styles.listitem}>
            <Chip
              className={styles.chip}
              selected={arrValues.includes(String(id))}
              onClick={() => handleClickChip(id)}
              role="checkbox"
              aria-checked={arrValues.includes(String(id))}
              aria-label={title}
            >
              {title}
            </Chip>
          </li>
        ))}
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
