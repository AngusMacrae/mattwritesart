import styles from "./styles.module.scss";

export default function ArtworkImage({
  slug,
  description,
  closeups,
  openLightbox,
}) {
  return (
    <div className={styles.artworkImage}>
      <picture>
        <source srcSet={`/art-images/${slug}.webp`} type="image/webp" />
        <img src={`/art-images/${slug}.jpg`} alt={description} />
      </picture>
      {closeups ? (
        <button onClick={openLightbox}>
          <img src="/icons/magnifying-glass.svg" alt="" />
          View Closer
        </button>
      ) : null}
    </div>
  );
}
