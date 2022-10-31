import { PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

interface IProps {
  type?: "button" | "submit" | "reset";
  level?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({
  children,
  type,
  level = "primary",
  onClick = () => undefined,
}: PropsWithChildren<IProps>) {
  return (
    <button
      type={type}
      className={clsx(styles.button, styles[level])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
