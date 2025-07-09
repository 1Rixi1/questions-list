import { ChipList } from "@/shared/ui";
import { useQueryParams } from "@/shared/lib";

const complexityOptions = [
  { title: "1-3", id: "1-3" },
  { title: "4-6", id: "4-6" },
  { title: "7-8", id: "7-8" },
  { title: "9-10", id: "9-10" },
];

export const FilterByComplexity = () => {
  const { complexity, setComplexity } = useQueryParams();

  return (
    <ChipList
      title="Уровернь сложности"
      options={complexityOptions}
      onChange={setComplexity}
      value={complexity}
    />
  );
};
