import React from "react";
import { Skeleton, Spinner } from "@/shared/ui";

type Props = {
  isLoading: boolean;
  isError: boolean;
  variant?: "list" | "details";
  children: React.ReactNode;
};

export const DataStatus = ({
  isLoading,
  isError,
  variant,
  children,
}: Props) => {
  if (isLoading) {
    switch (variant) {
      case "list": {
        return <Skeleton variant={variant} />;
      }
      case "details": {
        return <Skeleton variant="details" />;
      }
      default: {
        return <Spinner />;
      }
    }
  }

  if (isError) {
    return <div>Ошибка</div>;
  }

  return <div>{children}</div>;
};
