import Link from "next/link";

import styles from "./styles.module.scss";

function NavLink({ path, caption, currentPath, callback }) {
  const isActive = currentPath === path;

  return (
    <div className={styles.navLink}>
      {isActive ? (
        <p onClick={callback}>
          {caption}
        </p>
      ) : (
        <Link href={path}>
          {caption}
        </Link>
      )}
    </div>
  );
}

export default NavLink;
