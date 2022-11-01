import styles from "./styles.module.scss";

const links = [
  {
    url: "https://www.instagram.com/mattwritesart/",
    urlTitle: "Instagram",
    iconImgSrc: "/icons/instagram.svg",
  },
  {
    url: "https://www.facebook.com/mattwritesart/",
    urlTitle: "Facebook",
    iconImgSrc: "/icons/facebook.svg",
  },
];

export default function SocialLinks() {
  return (
    <ul className={styles.socialLinks}>
      {links.map((link) => {
        return (
          <li key={link.urlTitle}>
            <a
              href={link.url}
              title={link.urlTitle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.iconImgSrc} alt="" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
