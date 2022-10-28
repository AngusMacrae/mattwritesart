import Link from "next/link";
import clsx from "clsx";
import useImg from "../../../../common/hooks/useImg";
import getAvailabilityText from "../../utils/getAvailabilityText";

import styles from "./styles.module.scss";

export default function GalleryItem({ artwork }) {
  const { name, slug, height, width, description, original, prints } = artwork;
  const [imgStatus, onLoad, onError] = useImg();

  const availabilityText = getAvailabilityText(original, prints);

  return (
    <li className={clsx(styles["gallery__item"], styles[imgStatus])}>
      <Link href={`/art/${slug}`}>
        <picture>
          <source srcSet={`/art-images/${slug}.webp`} type="image/webp" />
          <img
            className="shadow"
            src={`/art-images/${slug}.jpg`}
            alt={description}
            height={height * 1000}
            width={width * 1000}
            onLoad={onLoad}
            onError={onError}
            loading="lazy"
          />
        </picture>
        <div>
          <h2>{name}</h2>
          <p className={styles["gallery__item--availability"]}>
            {availabilityText}
          </p>
        </div>
      </Link>
    </li>
  );
}
