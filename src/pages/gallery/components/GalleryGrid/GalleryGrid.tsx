import { useRouter } from "next/router";

import GalleryGridItem from "./components/GalleryGridItem/GalleryGridItem";

import styles from "./styles.module.scss";

export default function GalleryGrid({ art }) {
  const {
    query: { availability, category },
  } = useRouter();

  const filteredArt = art
    .filter((artwork) => {
      return availability ? artwork[availability as string] : true;
    })
    .filter((artwork) => {
      return category ? artwork.tags.includes(category) : true;
    });

  return filteredArt.length ? (
    <ul className={styles.galleryGrid}>
      {filteredArt.map((artwork) => (
        <GalleryGridItem key={artwork.slug} artwork={artwork} />
      ))}
    </ul>
  ) : (
    <div className={styles.galleryGridAlert}>Sorry - no results</div>
  );
}
