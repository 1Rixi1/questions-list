import { useQueryParams } from "@/shared/lib";
import { ChipList } from "@/shared/ui";

const rateOptions = [
  { title: "1", id: 1 },
  { title: "2", id: 2 },
  { title: "3", id: 3 },
  { title: "4", id: 4 },
  { title: "5", id: 5 },
];
export const FilterByRate = () => {
  const { rate, setRate } = useQueryParams();

  return (
    <ChipList
      title="Рейтинг"
      options={rateOptions}
      onChange={setRate}
      value={rate}
    />
  );
};
