import { useSearchParams } from "react-router-dom";

type Params = {
  page: string;
  specialization: string;
  skills: string;
  rate: string;
  complexity: string;
  title: string;
};

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getKey = (key: keyof Params) => {
    return searchParams.get(key) ?? undefined;
  };

  const update = (key: keyof Params, currentValue?: string) => {
    const url = new URLSearchParams(searchParams);

    if (!currentValue) {
      url.delete(key);
    } else {
      url.set(key, currentValue);
    }

    if (key !== "page") {
      url.set("page", "1");
    }

    setSearchParams(url, { replace: true });
  };

  const page = getKey("page");
  const specialization = getKey("specialization");
  const skills = getKey("skills");
  const rate = getKey("rate");
  const complexity = getKey("complexity");
  const title = getKey("title");

  const setPage = (currentValue: string) => update("page", currentValue);
  const setSpecialization = (currentValue: string) =>
    update("specialization", currentValue);
  const setSkills = (currentValue: string) => update("skills", currentValue);
  const setRate = (currentValue: string) => update("rate", currentValue);
  const setComplexity = (currentValue: string) =>
    update("complexity", currentValue);
  const setTitle = (currentValue: string) => update("title", currentValue);

  return {
    page,
    specialization,
    skills,
    rate,
    complexity,
    title,
    setPage,
    setSpecialization,
    setSkills,
    setRate,
    setComplexity,
    setTitle,
  };
};
