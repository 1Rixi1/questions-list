import type { RouteObject } from "react-router-dom";
import { QuestionsList } from "@/pages/questionsList";
import { QuestionDetails } from "@/pages/questionDetails";

export const config: RouteObject[] = [
  { path: "/", element: <QuestionsList /> },
  { path: ":id", element: <QuestionDetails /> },
];
