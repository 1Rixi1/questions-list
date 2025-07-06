import type { RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Skeleton } from "@/shared/ui";

const QuestionsListLazy = lazy(() =>
  import("@/pages/questionsList").then((module) => ({
    default: module.QuestionsList,
  }))
);
const QuestionDetailsLazy = lazy(() =>
  import("@/pages/questionDetails").then((module) => ({
    default: module.QuestionDetails,
  }))
);

export const config: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Skeleton variant="list" />}>
        <QuestionsListLazy />
      </Suspense>
    ),
  },
  {
    path: ":id",
    element: (
      <Suspense fallback={<Skeleton variant="details" />}>
        <QuestionDetailsLazy />
      </Suspense>
    ),
  },
];
