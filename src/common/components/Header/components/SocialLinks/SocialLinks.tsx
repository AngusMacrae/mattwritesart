import { ICONS } from "@/common/constants";

import styles from "./styles.module.scss";

const links = [
  {
    url: "https://www.instagram.com/mattwritesart/",
    title: "Instagram",
    iconSrc: ICONS.INSTAGRAM,
  },
  {
    url: "https://www.facebook.com/mattwritesart/",
    title: "Facebook",
    iconSrc: ICONS.FACEBOOK,
  },
];

export default function SocialLinks() {
  return (
    <ul className={styles.socialLinks}>
      {links.map((link) => {
        return (
          <li key={link.title}>
            <a
              href={link.url}
              title={link.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.iconSrc} alt="" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
