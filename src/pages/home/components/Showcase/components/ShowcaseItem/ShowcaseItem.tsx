import Link from "next/link";
import clsx from "clsx";
import useImg from "../../../../../../common/hooks/useImg";

import styles from "./styles.module.scss";

export default function ShowcaseItem({ artwork }) {
  const { name, slug, spotlight, height, width, description } = artwork;
  const [imgStatus, onLoad, onError] = useImg();

  return (
    <li
      className={clsx(
        styles["showcase__item"],
        "shadow",
        styles[height > width ? "portrait" : "landscape"],
        styles[imgStatus],
        spotlight && "spotlight"
      )}
    >
      <Link href={`/art/${slug}`}>
        <h3>{name}</h3>
        <picture>
          <source srcSet={`/art-images/${slug}.webp`} type="image/webp" />
          <img
            src={`/art-images/${slug}.jpg`}
            alt={description}
            height={height * 1000}
            width={width * 1000}
            onLoad={onLoad}
            onError={onError}
            loading="lazy"
          />
        </picture>
      </Link>
    </li>
  );
}
