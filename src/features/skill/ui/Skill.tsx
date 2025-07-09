import { useState } from "react";
import {useOptions, useQueryParams} from "@/shared/lib";
import {ChipList, DataStatus, NotFound} from "@/shared/ui";
import { useGetSkillsQuery } from "@/entities/skill/api";
import { MAX_VISIBLE_SKILLS } from "@/features/skill";

export const Skill = () => {
  const [show, setShow] = useState(false);

  const { skills: currentSkill, setSkills } = useQueryParams();

  const { data: skills, isLoading, isError } = useGetSkillsQuery({});

  const options = useOptions(skills?.data);

  return (
    <DataStatus isError={isError} isLoading={isLoading}>
      {skills && skills.data.length > 0 ? (
        <ChipList
          title="Навыки"
          onChange={setSkills}
          value={currentSkill}
          cut={MAX_VISIBLE_SKILLS}
          show={show}
          setShow={setShow}
          options={options || []}
        />
      ) : (
        <NotFound title="Навыки не найдены. Измените критерии поиска" />
      )}
    </DataStatus>
  );
};
