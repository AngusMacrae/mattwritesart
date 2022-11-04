import { useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

import useToggle from "@/common/hooks/useToggle";
import useOnResize from "@/common/hooks/useOnResize";

import SiteTitle from "./components/SiteTitle/SiteTitle";
import MenuToggleButton from "./components/MenuToggleButton/MenuToggleButton";
import SiteNav from "./components/SiteNav/SiteNav";
import SocialLinks from "./components/SocialLinks/SocialLinks";

import styles from "./styles.module.scss";

export default function Header() {
  const { pathname } = useRouter();

  const [menuOpen, , closeMenu, toggleMenu] = useToggle(false);

  useOnResize(closeMenu);

  useEffect(closeMenu, [closeMenu, pathname]);

  return (
    <header className={styles.stickyHeader}>
      <div className={styles.headerContent}>
        <div className={styles.titleSection}>
          <SiteTitle />
          <MenuToggleButton onClick={toggleMenu} menuOpen={menuOpen} />
        </div>
        <nav className={clsx(styles.navSection, menuOpen && styles.active)}>
          <SiteNav closeMenu={closeMenu} currentPath={pathname} />
          <SocialLinks />
        </nav>
      </div>
    </header>
  );
}
