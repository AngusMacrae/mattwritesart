import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import clsx from "clsx";
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
              {router.pathname === "/" ? (
                <p className="active" onClick={closeMenu}>
                  Home
                </p>
              ) : (
                <Link href="/">
                  <a>Home</a>
                </Link>
              )}
            </li>
            <li>
              {router.pathname === "/art" ? (
                <p className="active" onClick={closeMenu}>
                  Browse & Buy
                </p>
              ) : (
                <Link href="/art">
                  <a>Browse & Buy</a>
                </Link>
              )}
            </li>
            <li>
              {router.pathname === "/commissions" ? (
                <p className="active" onClick={closeMenu}>
                  Commissions
                </p>
              ) : (
                <Link href="/commissions">
                  <a>Commissions</a>
                </Link>
              )}
            </li>
            <li>
              {router.pathname === "/contact" ? (
                <p className="active" onClick={closeMenu}>
                  Contact
                </p>
              ) : (
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              )}
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
