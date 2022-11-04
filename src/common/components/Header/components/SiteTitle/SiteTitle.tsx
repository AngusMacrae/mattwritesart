import Link from "next/link";

import { LOGOS } from "@/common/constants";

import styles from "./styles.module.scss";

export default function SiteTitle() {
  return (
    <Link href="/" className={styles.siteTitleWrapperLink} title="Home">
      <img src={LOGOS.MWA_FACE} alt="" />
      <span className={styles.siteTitle}>
        matt<span className={styles.deemphasised}>writes</span>art
        <small className={styles.deemphasised}>.co.uk</small>
      </span>
    </Link>
  );
}
