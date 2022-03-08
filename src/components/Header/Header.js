import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import clsx from "clsx";
import NavLink from "./NavLink";
import useToggle from "../../hooks/useToggle";
import useOnResize from "../../hooks/useOnResize";

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
    <header className="header">
      <div className="header__content container-wide">
        <div className="header__top-bar">
          <Link href="/" onClick={closeMenu}>
            <a className="header-home" title="Home">
              <img src="/logo/mwa-logo.svg" alt="" />
              <h1>
                matt<span className="deemphasised">writes</span>art
                <small className="deemphasised">.co.uk</small>
              </h1>
            </a>
          </Link>
          <button onClick={toggleMenu} className="header__menu-toggle-btn">
            <img
              src={menuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
              alt="Menu"
            />
          </button>
        </div>
        <nav className={clsx(menuOpen && "active")}>
          <ul className="nav__page-links">
            <li className="nav__home">
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
          <ul className="nav__social-links">
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
