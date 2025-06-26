import Chip from "@/shared/ui/chip/chip.tsx";
import { useQueryParams } from "@/shared/lib/use-query-params.ts";
import { useMemo } from "react";

const complexityOptions = [
  { title: "1-3", value: "1,3" },
  { title: "4-6", value: "4,6" },
  { title: "7-8", value: "7,8" },
  { title: "9-10", value: "9,10" },
] as const;

type ComplexityOption = (typeof complexityOptions)[number]["value"];

export const Complexity = () => {
  const { complexity: currentComplexity, setComplexity } = useQueryParams();

  const arrComplexity: ComplexityOption[] = useMemo(() => {
    if (!currentComplexity) return [];

    return complexityOptions
      .map(({ value }) => value)
      .filter((value) => currentComplexity.includes(value));
  }, [currentComplexity]);

  const handleClickToggle = (value: ComplexityOption) => {
    const newArr = arrComplexity.includes(value)
      ? arrComplexity.filter((complexity) => complexity !== value)
      : [...arrComplexity, value];

    setComplexity(newArr.join(","));
  };

  return (
    <div>
      <h3>Уровень сложности</h3>
      {complexityOptions.map(({ title, value }) => (
        <Chip
          key={value}
          selected={arrComplexity.includes(value)}
          onClick={() => handleClickToggle(value)}
        >
          {title}
        </Chip>
      ))}
    </div>
  );
};
