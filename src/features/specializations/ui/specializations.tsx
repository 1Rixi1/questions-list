import { useState } from "react";
import { useGetSpecializationsQuery } from "@/entities/specializations";
import { useQueryParams } from "@/shared/lib";
import { ChipSelect, DataStatus } from "@/shared/ui";

export const Specializations = () => {
  const [show, setShow] = useState(false);

  const {
    data: specializations,
    isLoading,
    isError,
  } = useGetSpecializationsQuery({});

  const { specialization, setSpecialization } = useQueryParams();

  if (!specializations) {
    return null;
  }

  const options = specializations.data.map((specialization) => ({
    id: specialization.id,
    title: specialization.title,
  }));

  return (
    <DataStatus isError={isError} isLoading={isLoading}>
      <ChipSelect
        title="Специализация"
        onChange={setSpecialization}
        value={specialization}
        options={options}
        show={show}
        setShow={setShow}
        cut={5}
      />
    </DataStatus>
  );
};
