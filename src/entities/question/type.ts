import { SpecializationsData } from "@/entities/specialization/type";
import { SkillsData } from "@/entities/skill/type";

type UserInfo = {
  id: string;
  username: string;
};

export type QuestionData = {
  id: number;
  title: string;
  description: string;
  code?: string;
  imageSrc?: string;
  keywords?: string[];
  longAnswer?: string;
  shortAnswer?: string;
  status?: string;
  rate?: number;
  complexity?: number;
  createdById: string;
  updatedById?: string;
  questionSpecializations: SpecializationsData[];
  questionSkills: SkillsData[];
  createdAt: string;
  updatedAt: string;
  createdBy: UserInfo;
  updatedBy?: UserInfo;
};

export type QuestionResponse = {
  page?: number;
  limit?: number;
  data: QuestionData[];
  total: number;
};
