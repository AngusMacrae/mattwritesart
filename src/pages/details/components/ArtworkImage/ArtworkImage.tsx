import ViewCloserButton from "./ViewCloserButton/ViewCloserButton";

import styles from "./styles.module.scss";

export default function ArtworkImage({ slug, description, closeups }) {
  return (
    <div className={styles.artworkImage}>
      <picture>
        <source srcSet={`/assets/images/art/${slug}.webp`} type="image/webp" />
        <img src={`/assets/images/art/${slug}.jpg`} alt={description} />
      </picture>
      {closeups ? <ViewCloserButton slug={slug} /> : null}
    </div>
  );
}
