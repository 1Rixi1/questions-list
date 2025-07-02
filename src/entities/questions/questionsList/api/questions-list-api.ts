import type {
  QuestionsListParams,
  QuestionsListResponse,
} from "@/entities/questions/questionsList/type/type.ts";
import { baseApi } from "@/shared/api";

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
        title,
      }) => {
        const params: Record<string, unknown> = {
          page,
        };

        params.skillFilterMode = "ANY";

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
        if (title !== undefined) {
          params.title = title;
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
