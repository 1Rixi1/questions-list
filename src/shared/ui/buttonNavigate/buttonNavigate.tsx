import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import cn from "classnames";

type Props = {
  title?: string;
  navigate: string;
  className?: string;
  children?: React.ReactNode;
};

export const ButtonNavigate = ({
  title,
  navigate,
  className,
  children,
}: Props) => {
  return (
    <Link className={cn(className, styles.btnNavigate)} to={navigate}>
      {title}
      {children}
    </Link>
  );
};
