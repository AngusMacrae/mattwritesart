import ViewCloserButton from "./ViewCloserButton/ViewCloserButton";

import styles from "./styles.module.scss";

export default function ArtworkImage({ slug, description, closeups }) {
  return (
    <div className={styles.artworkImage}>
      <picture>
        <source srcSet={`/art-images/${slug}.webp`} type="image/webp" />
        <img src={`/art-images/${slug}.jpg`} alt={description} />
      </picture>
      {closeups ? <ViewCloserButton slug={slug} /> : null}
    </div>
  );
}
