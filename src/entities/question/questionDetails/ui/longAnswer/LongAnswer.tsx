import { Collapsible } from "@/shared/ui";

import DOMPurify from "dompurify";

type Props = {
  title: string;
  className?: string;
};
export const LongAnswer = ({ title, className }: Props) => {
  return (
    <section className={className} aria-labelledby="question-longanswer">
      <h3>Развёрнутый ответ</h3>
      <Collapsible>
        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }} />
      </Collapsible>
    </section>
  );
};
