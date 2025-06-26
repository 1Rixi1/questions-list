import { useQueryParams } from "@/shared/lib/use-query-params.ts";
import Chip from "@/shared/ui/chip/chip.tsx";

const rateOptions = ["1", "2", "3", "4", "5"] as const;

type RateOption = (typeof rateOptions)[number];

export const Rate = () => {
  const { rate: currentRate, setRate } = useQueryParams();

  const arrRate = currentRate ? currentRate.split(",") : [];

  const handleClickToggle = (value: RateOption) => {
    const newArr = arrRate.includes(value)
      ? arrRate.filter((rate) => rate !== value)
      : [...arrRate, value];

    setRate(newArr.join(","));
  };

  return (
    <div>
      <h3>Рейтинг</h3>
      {rateOptions.map((rate) => (
        <Chip
          key={rate}
          selected={arrRate.includes(rate)}
          onClick={() => handleClickToggle(rate)}
        >
          {rate}
        </Chip>
      ))}
    </div>
  );
};
