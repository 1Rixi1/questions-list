import type { RouteObject } from "react-router-dom";
import { QuestionsList } from "@/pages/questionsList/ui/questions-list.tsx";
import { QuestionDetails } from "@/pages/questionDetails/ui/question-details.tsx";

export const config: RouteObject[] = [
  { path: "/", element: <QuestionsList /> },
  { path: ":id", element: <QuestionDetails /> },
];
