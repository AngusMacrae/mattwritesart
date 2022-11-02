import LinkButton from "@/common/components/LinkButton/LinkButton";

import styles from "./styles.module.scss";

export default function ArtworkInfo({ artwork }) {
  const {
    name,
    slug,
    date,
    original,
    prints,
    height,
    width,
    medium,
    description,
    buyOgCaption,
    buyOgSmallprint,
    buyPrtCaption,
    buyPrtSmallprint,
  } = artwork;

  const availabilityText =
    original || prints ? "AVAILABLE TO BUY" : "NOT AVAILABLE TO BUY";

  const originalDimensionsText = `Original size ${width}"x${height}"`;

  return (
    <div className={styles.artworkInfo}>
      <h1>{name}</h1>
      <ul className={styles.keyInfoList}>
        <li>
          <small>{date}</small>
        </li>
        <li>
          <small>{originalDimensionsText}</small>
        </li>
        <li>
          <small>{medium}</small>
        </li>
      </ul>
      <p>{description}</p>
      <h2 className={styles.availability}>{availabilityText}</h2>
      {prints ? (
        <>
          <LinkButton
            href={`/buy/${slug}?buyOption=print`}
            as={`/buy/${slug}`}
            level={original ? "secondary" : "primary"}
          >
            {buyPrtCaption} £{prints}
          </LinkButton>
          {buyPrtSmallprint ? (
            <small className={styles.smallprint}>{buyPrtSmallprint}</small>
          ) : null}
        </>
      ) : null}
      {original ? (
        <>
          <LinkButton
            href={`/buy/${slug}?buyOption=original`}
            as={`/buy/${slug}`}
          >
            {buyOgCaption} £{original}
          </LinkButton>
          {buyOgSmallprint ? (
            <small className={styles.smallprint}>{buyOgSmallprint}</small>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
