import type { ButtonHTMLAttributes } from "react";

import styles from "./chip.module.css";
import cn from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export const Chip = ({ children, selected, className, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={cn(className, styles.chip, { [styles.selected]: selected })}
      type="button"
    >
      {children}
    </button>
  );
};
