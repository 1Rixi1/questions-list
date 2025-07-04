import { Collapsible } from "@/shared/ui";

type Props = {
  longAnswer: string;
  className?: string;
};
export const LongAnswer = ({ longAnswer, className }: Props) => {
  return (
    <section className={className} aria-labelledby="question-longanswer">
      <h3>Развёрнутый ответ</h3>
      <Collapsible>
        <p dangerouslySetInnerHTML={{ __html: longAnswer }} />
      </Collapsible>
    </section>
  );
};
