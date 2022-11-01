import NavLink from "./NavLink/NavLink";

import styles from "./styles.module.scss";

const links = [
  {
    path: "/",
    caption: "Home",
  },
  {
    path: "/art",
    caption: "Browse & Buy",
  },
  {
    path: "/commissions",
    caption: "Commissions",
  },
  {
    path: "/contact",
    caption: "Contact",
  },
];

export default function SiteNav({ closeMenu, currentPath }) {
  return (
    <ul className={styles.siteNav}>
      {links.map((link) => {
        return (
          <li key={link.path}>
            <NavLink
              path={link.path}
              caption={link.caption}
              isActive={currentPath === link.path}
              isActiveOnClick={closeMenu}
            />
          </li>
        );
      })}
    </ul>
  );
}
