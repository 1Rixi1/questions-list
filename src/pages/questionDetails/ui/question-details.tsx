import { useNavigate, useParams } from "react-router-dom";
import { useGetQuestionQuery } from "@/entities/question/api/question-api.ts";
import { skipToken } from "@reduxjs/toolkit/query";
import Chip from "@/shared/ui/chip/chip.tsx";
import { Collapsible } from "@/shared/ui/collapsible/ui/collapsible.tsx";

export const QuestionDetails = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionQuery(id ?? skipToken);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>isError</div>;
  }

  if (!question) {
    return null;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Назад</button>

      <div>
        {question.imageSrc && (
          <img src={question.imageSrc} alt="imageDetails" />
        )}
        <div>
          <h3>{question.title}</h3>
          <p>{question.description}</p>
        </div>
      </div>

      {question.shortAnswer && (
        <div>
          <h4>Краткий ответ</h4>
          <p dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />
        </div>
      )}
      {question.longAnswer && (
        <div>
          <h4>Развёрнутый ответ</h4>
          <Collapsible collapsedHeight={220}>
            <p dangerouslySetInnerHTML={{ __html: question.longAnswer }} />
          </Collapsible>
        </div>
      )}

      <aside>
        <div>
          <h5>Уровень</h5>

          <span>Сложность {question.complexity}</span>
          <span>Рейтинг {question.rate}</span>
        </div>

        <div>
          <h5>Навыки</h5>

          {question.questionSkills.map(({ title }) => {
            return <Chip selected={true}>{title}</Chip>;
          })}
        </div>

        {question.keywords && (
          <div>
            <h5>Ключевые слова:</h5>

            {question.keywords.map((keyword) => {
              return <span>{keyword}</span>;
            })}
          </div>
        )}
      </aside>
    </div>
  );
};
