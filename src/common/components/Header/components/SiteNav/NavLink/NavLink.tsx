import Link from "next/link";

import styles from "./styles.module.scss";

function NavLink({ path, caption, isActive, isActiveOnClick }) {
  return (
    <div className={styles.navLink}>
      {isActive ? (
        <p onClick={isActiveOnClick}>{caption}</p>
      ) : (
        <Link href={path}>{caption}</Link>
      )}
    </div>
  );
}

export default NavLink;
