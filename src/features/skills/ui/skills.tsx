import { useQueryParams } from "@/shared/lib/use-query-params.ts";
import { ChipSelect } from "@/shared/ui/chipSelect/chip-select.tsx";
import { useState } from "react";
import { useGetSkillsQuery } from "@/entities/skills/api/skills-api.ts";

type Props = {};

export const Skills = ({}: Props) => {
  const [show, setShow] = useState(false);

  const { skills: currentSkill, setSkills } = useQueryParams();

  const { data: skills, isLoading, isError } = useGetSkillsQuery({});

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return null;
  }

  if (!skills) {
    return null;
  }

  const options = skills.data.map((skill) => ({
    id: skill.id,
    title: skill.title,
  }));

  return (
    <ChipSelect
      title="Навыки"
      onChange={setSkills}
      value={currentSkill}
      cut={5}
      show={show}
      setShow={setShow}
      options={options}
    />
  );
};
