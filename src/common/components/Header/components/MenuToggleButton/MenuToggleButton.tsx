import styles from "./styles.module.scss";

export default function MenuToggleButton({ onClick, menuOpen }) {
  return (
    <button onClick={onClick} className={styles.menuToggleButton}>
      <img src={menuOpen ? "/icons/close.svg" : "/icons/menu.svg"} alt="" />
    </button>
  );
}
