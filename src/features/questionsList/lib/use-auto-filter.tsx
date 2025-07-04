import { useEffect, useRef } from "react";
import { useQueryParams } from "@/shared/lib";
import { useGetQuestionsQuery } from "@/entities/questionsList";

export const useAutoFilter = () => {
  const { specialization, setSpecialization, skills, setSkills, title } =
    useQueryParams();
  const { data: questionsList, isFetching } = useGetQuestionsQuery({
    specialization,
    skills,
    title,
  });

  const autoFilled = useRef({ spec: false, skills: false });

  useEffect(() => {
    autoFilled.current = { spec: false, skills: false };
  }, [title]);

  useEffect(() => {
    if (isFetching || !questionsList) {
      return;
    }

    const isSearch = Boolean(title?.trim());

    const specIds = new Set<string>();

    const skillsIds = new Set<string>();

    questionsList.data.forEach((question) => {
      question.questionSpecializations.forEach((spec) =>
        specIds.add(String(spec.id))
      );

      question.questionSkills.forEach((skill) =>
        skillsIds.add(String(skill.id))
      );
    });

    const specIdsStr = [...specIds].join(",");
    const skillsIdsStr = [...skillsIds].join(",");

    if (isSearch && !specialization && specIdsStr && !autoFilled.current.spec) {
      setSpecialization(specIdsStr);
      autoFilled.current.spec = true;
    }

    if (isSearch && !skills && skillsIdsStr && !autoFilled.current.skills) {
      setSkills(skillsIdsStr);
      autoFilled.current.skills = true;
    }
  }, [
    questionsList,
    title,
    isFetching,
    specialization,
    setSpecialization,
    skills,
    setSkills,
  ]);
};
