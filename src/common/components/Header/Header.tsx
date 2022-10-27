import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";
import useToggle from "../../hooks/useToggle";
import useOnResize from "../../hooks/useOnResize";
import NavLink from "./components/NavLink/NavLink";

import styles from './styles.module.scss';

export default function Header() {
  const router = useRouter();
  const [menuOpen, , closeMenu, toggleMenu] = useToggle(false);
  useOnResize(closeMenu);

  useEffect(() => {
    router.events.on("routeChangeStart", closeMenu);

    return () => {
      router.events.off("routeChangeStart", closeMenu);
    };
  }, [closeMenu, router.events]);

  return (
    <header className={styles.header}>
      <div className={clsx(styles.header__content, "container-wide")}>
        <div className={styles["header__top-bar"]}>
          <Link href="/" className={styles["header-home"]} title="Home">
              <img src="/logo/mwa-logo.svg" alt="" />
              <span className={styles["header-site-name"]}>
                matt<span className="deemphasised">writes</span>art
                <small className="deemphasised">.co.uk</small>
              </span>
          </Link>
          <button onClick={toggleMenu} className={styles["header__menu-toggle-btn"]}>
            <img
              src={menuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
              alt="Menu"
            />
          </button>
        </div>
        <nav className={clsx(styles.nav, menuOpen && styles.active)}>
          <ul className={styles["nav__page-links"]}>
            <li className={styles["nav__home"]}>
              <NavLink
                path="/"
                caption="Home"
                currentPath={router.pathname}
                callback={closeMenu}
              />
            </li>
            <li>
              <NavLink
                path="/art"
                caption="Browse & Buy"
                currentPath={router.pathname}
                callback={closeMenu}
              />
            </li>
            <li>
              <NavLink
                path="/commissions"
                caption="Commissions"
                currentPath={router.pathname}
                callback={closeMenu}
              />
            </li>
            <li>
              <NavLink
                path="/contact"
                caption="Contact"
                currentPath={router.pathname}
                callback={closeMenu}
              />
            </li>
          </ul>
          <ul className={styles["nav__social-links"]}>
            <li>
              <a
                href="https://www.instagram.com/mattwritesart/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <img
                  src="/icons/instagram.svg"
                  alt="mattwritesart on Instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/mattwritesart"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <img
                  src="/icons/facebook.svg"
                  alt="mattwritesart on Facebook"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
