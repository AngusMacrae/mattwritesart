import ShowcaseItem from "./components/ShowcaseItem/ShowcaseItem";
import art from "../../../../data/art";

import styles from "./styles.module.scss";

export default function Showcase() {
  const filteredArt = art.filter((artwork) => artwork.showcase);

  return (
    <section className={styles["showcase"]}>
      <ul className={styles["showcase__grid"]}>
        {filteredArt.map((artwork) => (
          <ShowcaseItem artwork={artwork} key={artwork.slug} />
        ))}
      </ul>
    </section>
  );
}
