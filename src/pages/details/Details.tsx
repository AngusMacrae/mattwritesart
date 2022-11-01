import Head from "next/head";
import clsx from "clsx";
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";
import MetaData from "../../common/components/MetaData/MetaData";
import Lightbox from "./components/Lightbox/Lightbox";
import useToggle from "../../common/hooks/useToggle";
import art from "../../data/art";

import styles from "./styles.module.scss";
import LinkButton from "../../common/components/LinkButton/LinkButton";

export default function Details({ artwork }) {
  const {
    name,
    slug,
    date,
    original,
    prints,
    closeups,
    height,
    width,
    medium,
    description,
    buyOgCaption,
    buyOgSmallprint,
    buyPrtCaption,
    buyPrtSmallprint,
  } = artwork;

  const [lightboxOpen, openLightbox, closeLightbox] = useToggle(false);

  const availabilityText =
    original || prints ? "AVAILABLE TO BUY" : "NOT AVAILABLE TO BUY";

  const originalDimensionsText = `Original size ${width}"x${height}"`;

  return (
    <>
      <Head>
        <MetaData
          title={`${name} - mattwritesart`}
          description={description}
          url={`/art/${slug}`}
          image={`/art-images/${slug}.jpg`}
        />
      </Head>
      <Header />
      <main>
        <section className={clsx(styles["details__content"], "container-m")}>
          <div className={styles["details__img-container"]}>
            <picture>
              <source srcSet={`/art-images/${slug}.webp`} type="image/webp" />
              <img src={`/art-images/${slug}.jpg`} alt={description} />
            </picture>
            {closeups ? (
              <button onClick={openLightbox}>
                <img src="/icons/magnifying-glass.svg" alt="" /> View Closer
              </button>
            ) : null}
          </div>
          <div className={clsx(styles["details__info-container"], "flow")}>
            <h1>{name}</h1>
            <ul>
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
            <h2 className={styles["details__availability"]}>
              {availabilityText}
            </h2>
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
                  <small className={styles["details__order-smallprint"]}>
                    {buyPrtSmallprint}
                  </small>
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
                  <small className={styles["details__order-smallprint"]}>
                    {buyOgSmallprint}
                  </small>
                ) : null}
              </>
            ) : null}
          </div>
        </section>
        {lightboxOpen ? (
          <Lightbox
            imageSrc={`/art-images/close-ups/${slug}_1.jpg`}
            closeLightbox={closeLightbox}
          />
        ) : null}
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = art.map((artwork) => {
    return { params: { slug: artwork.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const artwork = art.find((item) => item.slug === params.slug);

  return {
    props: {
      artwork,
    },
  };
}
