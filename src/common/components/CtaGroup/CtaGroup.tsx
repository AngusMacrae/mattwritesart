import styles from "./styles.module.scss";

export default function CtaGroup({ children }) {
  return <div className={styles.ctaGroup}>{children}</div>;
}
