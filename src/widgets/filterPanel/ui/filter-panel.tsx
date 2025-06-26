import { Specializations } from "@/features/specializations/ui/specializations.tsx";
import { Skills } from "@/features/skills";
import { Complexity } from "@/features/complexity/ui/complexity.tsx";
import { Rate } from "@/features/rate/ui/rate.tsx";

export const FilterPanel = () => {
  return (
    <div>
      <Specializations />
      <Skills />
      <Complexity />
      <Rate />
    </div>
  );
};
