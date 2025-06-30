import { useQueryParams } from "@/shared/lib/use-query-params.ts";
import { ChipSelect } from "@/shared/ui/chipSelect/chip-select.tsx";

const complexityOptions = [
  { title: "1-3", id: "1-3" },
  { title: "4-6", id: "4-6" },
  { title: "7-8", id: "7-8" },
  { title: "9-10", id: "9-10" },
];

export const Complexity = () => {
  const { complexity, setComplexity } = useQueryParams();

  return (
    <ChipSelect
      title="Уровернь сложности"
      options={complexityOptions}
      onChange={setComplexity}
      value={complexity}
    />
  );
};
