import { baseApi } from "@/shared/api";
import { QuestionData } from "@/entities/question/type";

export const questionDetailsApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getQuestion: query<QuestionData, string>({
      query: (id) => {
        return {
          url: `questions/public-questions/${id}`,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetQuestionQuery } = questionDetailsApi;
