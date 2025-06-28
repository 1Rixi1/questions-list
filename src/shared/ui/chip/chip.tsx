import type { ButtonHTMLAttributes } from "react";

import styles from "./chip.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const Chip = ({ children, selected, ...rest }: Props) => {
  return (
    <button {...rest} className={selected ? styles.selected : ""} type="button">
      {children}
    </button>
  );
};

export default Chip;
