import type { ButtonHTMLAttributes } from "react";

import styles from "./chip.module.css";
import cn from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const Chip = ({ children, selected, className, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={cn(styles.chip, { [styles.selected]: selected }, className)}
      type="button"
    >
      {children}
    </button>
  );
};

export default Chip;
