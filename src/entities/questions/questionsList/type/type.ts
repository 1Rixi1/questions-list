import type { SkillsData } from "@/entities/skills/type/type.ts";
import type { SpecializationsData } from "@/entities/specializations/type/type.ts";

export type QuestionsListData = {
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

type UserInfo = {
  id: string;
  username: string;
};

export type QuestionsListResponse = {
  page?: number;
  limit?: number;
  data: QuestionsListData[];
  total: number;
};

export type QuestionsListParams = {
  page?: string;
  limit?: number;
  title?: string;
  titleOrDescription?: string;
  skills?: string;
  skillFilterMode?: string;
  complexity?: string;
  collection?: number;
  rate?: string;
  keywords?: string[];
  specialization?: string;
  orderBy?: string;
  order?: string;
  random?: boolean;
};
