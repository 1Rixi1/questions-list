import * as React from "react";

import cn from "classnames";

import styles from "./styles.module.css";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const Collapsible = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.content, { [styles.collapsed]: !open })}>
        {children}
      </div>

      <button
        className={cn(styles.toggle, { [styles.open]: open })}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        type="button"
      >
        {open ? "Свернуть" : "Развернуть"}
      </button>
    </div>
  );
};
