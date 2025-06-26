import { baseApi } from "@/shared/api/base-api.ts";
import type {
  QuestionsListParams,
  QuestionsListResponse,
} from "@/entities/questions/questionsList/type/type.ts";

export const questionsListApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getQuestions: query<QuestionsListResponse, QuestionsListParams>({
      query: ({
        page = 1,
        limit = 10,
        specialization,
        skills,
        rate,
        complexity,
      }) => {
        const params: Record<string, unknown> = {
          page,
        };

        if (limit !== undefined) {
          params.limit = limit;
        }

        if (specialization !== undefined) {
          params.specialization = specialization;
        }
        if (skills !== undefined) {
          params.skills = skills;
        }
        if (rate !== undefined) {
          params.rate = rate;
        }
        if (complexity !== undefined) {
          params.complexity = complexity;
        }

        return {
          url: "/questions/public-questions",
          params,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetQuestionsQuery } = questionsListApi;
