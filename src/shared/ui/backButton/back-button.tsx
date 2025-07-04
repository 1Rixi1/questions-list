import { useNavigate } from "react-router-dom";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const BackButton = ({ className }: Props) => {
  const navigate = useNavigate();

  return (
    <nav className={className} aria-label="Навигация - назад ко всем вопросам">
      <button onClick={() => navigate(-1)} type="button">
        Назад
      </button>
    </nav>
  );
};
