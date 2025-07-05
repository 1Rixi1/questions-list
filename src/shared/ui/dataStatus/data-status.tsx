import React from "react";

type Props = {
  isLoading: boolean;
  isError: boolean;
  children: React.ReactNode;
};

export const DataStatus = ({ isLoading, isError, children }: Props) => {
  if (isLoading) {
    return <div>Загрузка ...</div>;
  }

  if (isError) {
    return <div>Ошибка</div>;
  }

  return <div>{children}</div>;
};

