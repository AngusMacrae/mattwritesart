import Link from "next/link";

import styles from "./styles.module.css";

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
          <a>{caption}</a>
        </Link>
      )}
    </div>
  );
}

export default NavLink;
