import type { SpecializationsData } from "@/entities/specializations/type/type.ts";

export type SkillsData = {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  createdAt: string;
  updatedAt: string;
  specializations: SpecializationsData;
};

export type SkillsResponse = {
  page?: number;
  limit?: number;
  data: SkillsData[];
  total: number;
};

export type SkillsParams = {
  page?: number;
  limit?: number;
  specializations?: number[];
  authorId?: string;
};
