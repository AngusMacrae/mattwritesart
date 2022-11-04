import Image from "next/image";

import peteDoherty from "public/assets/images/art/pete-doherty.webp";
import bjoernGelotte from "public/assets/images/art/bjoern-gelotte.webp";
import frankTurner from "public/assets/images/art/frank-turner-3.webp";

import styles from "./styles.module.scss";

export default function SampleImages() {
  return (
    <section className={styles.sampleImages}>
      <Image src={peteDoherty} alt="Pete Doherty" placeholder="blur" />
      <Image
        src={bjoernGelotte}
        alt="Bjoern Gelotte"
        placeholder="blur"
        priority
      />
      <Image src={frankTurner} alt="Frank Turner" placeholder="blur" />
    </section>
  );
}
