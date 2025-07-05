import React from "react";
import { Skeleton } from "@/shared/ui";

type Props = {
  isLoading: boolean;
  isError: boolean;
  variant: "list" | "details";
  children: React.ReactNode;
};

export const DataStatus = ({
  isLoading,
  isError,
  variant,
  children,
}: Props) => {
  if (isLoading) {
    return variant === "list" ? (
      <Skeleton variant={variant} />
    ) : (
      <Skeleton variant={"details"} />
    );
  }

  if (isError) {
    return <div>Ошибка</div>;
  }

  return <div>{children}</div>;
};
