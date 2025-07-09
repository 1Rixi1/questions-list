import { useState } from "react";
import {useOptions, useQueryParams} from "@/shared/lib";
import {ChipList, DataStatus, NotFound} from "@/shared/ui";
import { useGetSpecializationsQuery } from "@/entities/specialization/api";
import { MAX_VISIBLE_SPECIALIZATIONS } from "@/features/specialization";

export const Specialization = () => {
  const [show, setShow] = useState(false);

  const {
    data: specializations,
    isLoading,
    isError,
  } = useGetSpecializationsQuery({});

  const { specialization, setSpecialization } = useQueryParams();

  const options = useOptions(specializations?.data);

  return (
    <DataStatus isError={isError} isLoading={isLoading}>
      {specializations && specializations.data.length > 0 ? (
        <ChipList
          title="Специализация"
          onChange={setSpecialization}
          value={specialization}
          options={options || []}
          show={show}
          setShow={setShow}
          cut={MAX_VISIBLE_SPECIALIZATIONS}
        />
      ) : (
        <NotFound title="Специализации не найдены. Измените критерии поиска" />
      )}
    </DataStatus>
  );
};
