import DOMPurify from "dompurify";

type Props = {
  title: string;
  className?: string;
};

export const ShortAnswer = ({ title, className }: Props) => {
  return (
    <section className={className} aria-labelledby="question-shortanswer">
      <h3>Краткий ответ</h3>
      <p
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
      />
    </section>
  );
};
