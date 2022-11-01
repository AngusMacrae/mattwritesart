import styles from "./styles.module.scss";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        <small>
          &#169; mattwritesart {currentYear} | website by{" "}
          <a
            href="https://angusmacrae.dev"
            target="_blank"
            rel="noopener noreferrer"
            title="Angus Macrae"
            className={styles.link}
          >
            Angus Macrae
          </a>
        </small>
      </p>
    </footer>
  );
}
