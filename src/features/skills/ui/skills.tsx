import { useState } from "react";
import { useQueryParams } from "@/shared/lib";
import { useGetSkillsQuery } from "@/entities/skills";
import { ChipSelect, DataStatus } from "@/shared/ui";

export const Skills = () => {
  const [show, setShow] = useState(false);

  const { skills: currentSkill, setSkills } = useQueryParams();

  const { data: skills, isLoading, isError } = useGetSkillsQuery({});

  if (!skills) {
    return null;
  }

  const options = skills.data.map((skill) => ({
    id: skill.id,
    title: skill.title,
  }));

  return (
    <DataStatus isError={isError} isLoading={isLoading}>
      <ChipSelect
        title="Навыки"
        onChange={setSkills}
        value={currentSkill}
        cut={5}
        show={show}
        setShow={setShow}
        options={options}
      />
    </DataStatus>
  );
};
