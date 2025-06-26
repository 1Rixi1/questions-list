import { useQueryParams } from "@/shared/lib/use-query-params.ts";
import { ChipSelect } from "@/shared/ui/chipSelect/chip-select.tsx";
import { useGetSpecializationsQuery } from "@/entities/specializations/api/specializations-api.ts";
import { useState } from "react";

export const Specializations = () => {
  const [show, setShow] = useState(false);

  const {
    data: specializations,
    isLoading,
    isError,
  } = useGetSpecializationsQuery({});

  const { specialization, setSpecialization } = useQueryParams();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error ...</div>;
  }

  if (!specializations) {
    return null;
  }

  const options = specializations.data.map((specialization) => ({
    id: specialization.id,
    title: specialization.title,
  }));

  return (
    <ChipSelect
      title="Специализация"
      onChange={setSpecialization}
      value={specialization}
      options={options}
      show={show}
      setShow={setShow}
      cut={5}
    />
  );
};
