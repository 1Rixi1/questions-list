import React, { JSX } from "react";
import { Skeleton, Spinner } from "@/shared/ui";
import { NotFound } from "@/shared/ui/notFound/NotFound";

type Props = {
  isLoading: boolean;
  isError: boolean;
  isErrorTitle?: string;
  variant?: "list" | "details";
  children: React.ReactNode;
};

export const DataStatus = ({
  isLoading,
  isError,
  isErrorTitle,
  variant,
  children,
}: Props) => {
  if (isLoading) {
    const skeletons: Record<"list" | "details", JSX.Element> = {
      list: <Skeleton variant="list" />,
      details: <Skeleton variant="details" />,
    };

    return variant && skeletons[variant] ? (
      <Skeleton variant={variant} />
    ) : (
      <Spinner />
    );
  }
  if (isError) {
    return (
      <NotFound
        title={
          isErrorTitle ? isErrorTitle : `Ошибка при запросе. Попробуйте позже`
        }
      />
    );
  }

  return children;
};
