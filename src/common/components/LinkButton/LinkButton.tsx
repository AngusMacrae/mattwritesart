import { PropsWithChildren } from "react";
import Link from "next/link";
import clsx from "clsx";

import styles from "../Button/styles.module.scss";

interface IProps {
  href: string;
  as?: string;
  level?: "primary" | "secondary";
}

export default function LinkButton({
  children,
  href,
  as,
  level = "primary",
}: PropsWithChildren<IProps>) {
  return (
    <Link href={href} as={as} className={clsx(styles.button, styles[level])}>
      {children}
    </Link>
  );
}
