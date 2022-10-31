import { PropsWithChildren } from "react";
import Link from "next/link";
import clsx from "clsx";

import styles from "../Button/styles.module.scss";

interface IProps {
  level?: "primary" | "secondary";
  href: string;
  as?: string;
}

export default function LinkButton({
  children,
  level = "primary",
  as,
  href,
}: PropsWithChildren<IProps>) {
  return (
    <Link href={href} as={as} className={clsx(styles.button, styles[level])}>
      {children}
    </Link>
  );
}
