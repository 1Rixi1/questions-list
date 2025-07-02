import { useQueryParams } from "@/shared/lib";
import { ChipSelect } from "@/shared/ui";

const rateOptions = [
  { title: "1", id: 1 },
  { title: "2", id: 2 },
  { title: "3", id: 3 },
  { title: "4", id: 4 },
  { title: "5", id: 5 },
];
export const Rate = () => {
  const { rate, setRate } = useQueryParams();

  return (
    <ChipSelect
      title="Рейтинг"
      options={rateOptions}
      onChange={setRate}
      value={rate}
    />
  );
};
