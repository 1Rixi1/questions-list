import { useGetQuestionsQuery } from "@/entities/questions/questionsList/api/questions-list-api.ts";
import { QuestionRow } from "@/entities/questions";
import { FilterPanel } from "@/widgets/filterPanel/ui/filter-panel.tsx";
import { useQueryParams } from "@/shared/lib/use-query-params.ts";
import { Pagination } from "@/features/pagination/ui/pagination.tsx";

export const QuestionsList = () => {
  const { specialization, skills, complexity, rate, setPage, page } =
    useQueryParams();
  const {
    data: questionsList,
    isLoading,
    isError,
  } = useGetQuestionsQuery({ specialization, skills, complexity, rate, page });

  if (isLoading) {
    return <div>Загрузка ...</div>;
  }

  if (isError) {
    return <div>Ошибка</div>;
  }

  if (!questionsList) {
    return null;
  }

  const totalPages =
    questionsList.total && questionsList.limit
      ? Math.ceil(questionsList.total / questionsList.limit)
      : 1;

  const currentPage = page ? Number(page) : 1;

  return (
    <div>
      {questionsList.data.map(
        ({ title, shortAnswer, imageSrc, rate, complexity, id }) => (
          <QuestionRow
            key={id}
            title={title}
            shortAnswer={shortAnswer}
            imageSrc={imageSrc}
            rate={rate}
            complexity={complexity}
          />
        )
      )}
      <FilterPanel />
      <Pagination
        totalPage={totalPages}
        currentPage={currentPage}
        onChange={setPage}
      />
    </div>
  );
};
