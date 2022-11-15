import { useRouter } from "next/router";

import GalleryGridItem from "./components/GalleryGridItem/GalleryGridItem";

import styles from "./styles.module.scss";

export default function GalleryGrid({ art }) {
  const {
    query: { availability, category },
  } = useRouter();

  const filteredArt = art.filter((artwork) => {
    const isAvailabilityMatch =
      !availability || artwork[availability as string];
    const isCategoryMatch = !category || artwork.tags.includes(category);

    return isAvailabilityMatch && isCategoryMatch;
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
