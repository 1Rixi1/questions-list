import { useNavigate } from "react-router-dom";
import type { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.css";
import cn from "classnames";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = ({ className, ...props }: Props) => {
  const navigate = useNavigate();

  return (
    <button
      className={cn(className, styles.backButton)}
      onClick={() => navigate(-1)}
      type="button"
      {...props}
      aria-label="Навигация - назад ко всем вопросам"
    >
      Назад
    </button>
  );
};
