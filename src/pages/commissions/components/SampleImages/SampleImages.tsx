import clsx from "clsx";

import styles from "./styles.module.scss";

export default function SampleImages() {
  return (
    <section className={styles.sampleImages}>
      <picture>
        <source srcSet="/art-images/pete-doherty.webp" type="image/webp" />
        <img src="/art-images/pete-doherty.jpg" alt="Pete Doherty" />
      </picture>
      <picture>
        <source srcSet="/art-images/bjoern-gelotte.webp" type="image/webp" />
        <img src="/art-images/bjoern-gelotte.jpg" alt="Bjoern Gelotte" />
      </picture>
      <picture>
        <source srcSet="/art-images/frank-turner-3.webp" type="image/webp" />
        <img src="/art-images/frank-turner-3.jpg" alt="Frank Turner" />
      </picture>
    </section>
  );
}
