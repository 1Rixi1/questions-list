import type { RouteObject } from "react-router-dom";
import { QuestionCard } from "@/entities/questions/questionCard/ui/question-card.tsx";
import { QuestionsList } from "@/pages/questionsList/ui/questions-list.tsx";

export const config: RouteObject[] = [
  { path: "/", element: <QuestionsList /> },
  { path: ":id", element: <QuestionCard /> },
];
