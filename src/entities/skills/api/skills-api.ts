import { baseApi } from "@/shared/api/base-api.ts";
import type {
  SkillsParams,
  SkillsResponse,
} from "@/entities/skills/type/type.ts";

export const skillsApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getSkills: query<SkillsResponse, SkillsParams>({
      query: ({ page = 1, limit = 10, specializations, authorId = "" }) => {
        const params: Record<string, unknown> = {
          page,
        };

        if (limit !== undefined) {
          params.limit = limit;
        }

        if (specializations?.length !== 0 && specializations !== undefined) {
          params.specializations = specializations.join(",");
        }

        if (authorId !== undefined && authorId !== "") {
          params.authorId = authorId;
        }

        return {
          url: "/skills",
          params,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetSkillsQuery } = skillsApi;
