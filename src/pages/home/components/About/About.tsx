import styles from "./styles.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <p>
        I&apos;m matt and I write art! I&apos;ve been creating written drawings
        (otherwise known as calligrams) for the best part of a decade now. I got
        bored at uni one day, looking for a distraction to avoid exam revision,
        and just decided to start writing. I&apos;ve always enjoyed writing by
        hand - writing so much relaxes me.
      </p>
      <p>
        I decided to take my art more seriously during the Covid-19 lockdowns,
        which gave me the time I needed to create and experiment more, and
        launch this website.
      </p>
      <p>
        Since then I&apos;ve shown my art at my first exhibition and sent prints
        and originals all across the globe. Please have a look around and if you
        like what I do, get in touch!
      </p>
    </section>
  );
}
