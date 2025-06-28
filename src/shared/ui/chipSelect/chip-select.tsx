import Chip from "@/shared/ui/chip/chip.tsx";

export type OptionsType = {
  id: number;
  title: string;
};

type Props = {
  title: string;
  value?: string;
  cut: number;
  show: boolean;
  setShow: (value: boolean) => void;
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
    setShow(!show);
  };

  const arrValues = value ? value.split(",") : [];

  const handleClickChip = (id: number) => {
    const strId = String(id);

    const newArr = arrValues.includes(strId)
      ? arrValues.filter((value) => value !== strId)
      : [...arrValues, strId];

    onChange(newArr.join(","));
  };

  return (
    <fieldset>
      <legend>{title}</legend>

      {visibleOptions.map(({ id, title }) => (
        <Chip
          key={id}
          selected={arrValues.includes(String(id))}
          onClick={() => handleClickChip(id)}
          role="checkbox"
          aria-checked={arrValues.includes(String(id))}
          aria-label={title}
        >
          {title}
        </Chip>
      ))}

      <button onClick={handleClickToggle} type="button">
        {show ? "Скрыть" : "Показать все"}
      </button>
    </fieldset>
  );
};
