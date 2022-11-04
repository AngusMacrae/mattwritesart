import { ICONS } from "@/common/constants";

import styles from "./styles.module.scss";

export default function MenuToggleButton({ onClick, menuOpen }) {
  return (
    <button onClick={onClick} className={styles.menuToggleButton}>
      <img src={menuOpen ? ICONS.CLOSE : ICONS.MENU} alt="" />
    </button>
  );
}
