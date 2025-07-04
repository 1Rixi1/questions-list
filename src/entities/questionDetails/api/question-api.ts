import { baseApi } from "@/shared/api";
import type { QuestionsListData } from "@/entities/questionsList/type/type.ts";

export const questionApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getQuestion: query<QuestionsListData, string>({
      query: (id) => {
        return {
          url: `questions/public-questions/${id}`,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetQuestionQuery } = questionApi;
