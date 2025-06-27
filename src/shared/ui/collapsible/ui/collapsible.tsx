import * as React from "react";

import cn from "classnames";

import styles from "./collapsible.module.css";
import { useState } from "react";

type Props = {
  collapsedHeight?: number;
  children: React.ReactNode;
};

export const Collapsible = ({ collapsedHeight, children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.content, { [styles.collapsed]: !open })}
        style={!open ? { maxHeight: collapsedHeight } : undefined}
      >
        {children}
      </div>

      <button className={styles.toggle} onClick={() => setOpen(!open)}>
        {open ? "Свернуть" : "Развернуть"}
      </button>
    </div>
  );
};
