import { baseApi } from "@/shared/api";
import {
  SpecializationsParams,
  SpecializationsResponse,
} from "@/entities/specialization/type";

export const specializationApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getSpecializations: query<SpecializationsResponse, SpecializationsParams>({
      query: ({ page = 1, limit = 10, authorId = "" }) => {
        const params: Record<string, unknown> = {
          page,
        };

        if (limit !== undefined) {
          params.limit = limit;
        }

        if (authorId !== "") {
          params.authorId = authorId;
        }

        return {
          url: "/specializations",
          params,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetSpecializationsQuery } = specializationApi;
