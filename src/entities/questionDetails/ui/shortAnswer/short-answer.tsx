type Props = {
  shortAnswer: string;
  className?: string;
};

export const ShortAnswer = ({ shortAnswer, className }: Props) => {
  return (
    <section className={className} aria-labelledby="question-shortanswer">
      <h3>Краткий ответ</h3>
      <p dangerouslySetInnerHTML={{ __html: shortAnswer }} />
    </section>
  );
};
