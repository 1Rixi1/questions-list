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
