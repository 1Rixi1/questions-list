import type { RouteObject } from "react-router-dom";
import { Suspense } from "react";
import { Skeleton } from "@/shared/ui";
import { QuestionsList } from "@/pages/question/questionList";
import { QuestionDetails } from "@/pages/question/questionDetails";

export const Config: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Skeleton variant="list" />}>
        <QuestionsList />
      </Suspense>
    ),
  },
  {
    path: ":id",
    element: (
      <Suspense fallback={<Skeleton variant="details" />}>
        <QuestionDetails />
      </Suspense>
    ),
  },
];
