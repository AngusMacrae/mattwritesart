import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";
import MetaData from "../../common/components/MetaData/MetaData";
import DetailsLightbox from "./components/DetailsLightbox";
import useToggle from "../../common/hooks/useToggle";
import art from "../../data/art";

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
      <main className="details">
        <section className="details__content container-med">
          <div className="details__img-container">
            <picture>
              <source srcSet={`/art-images/${slug}.webp`} type="image/webp" />
              <img
                className="shadow"
                src={`/art-images/${slug}.jpg`}
                alt={description}
              />
            </picture>
            {closeups ? (
              <button onClick={openLightbox}>
                <img src="/icons/magnifying-glass.svg" alt="" /> View Closer
              </button>
            ) : null}
          </div>
          <div className="details__info-container flow">
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
            <h2 className="details__availability">{availabilityText}</h2>
            {prints ? (
              <>
                <Link href={`/buy/${slug}?buyOption=print`} as={`/buy/${slug}`}>
                  <a className={clsx("btn", original && "btn-secondary")}>
                    {buyPrtCaption} £{prints}
                  </a>
                </Link>
                {buyPrtSmallprint ? (
                  <small className="details__order-smallprint">
                    {buyPrtSmallprint}
                  </small>
                ) : null}
              </>
            ) : null}
            {original ? (
              <>
                <Link
                  href={`/buy/${slug}?buyOption=original`}
                  as={`/buy/${slug}`}
                >
                  <a className="btn">
                    {buyOgCaption} £{original}
                  </a>
                </Link>
                {buyOgSmallprint ? (
                  <small className="details__order-smallprint">
                    {buyOgSmallprint}
                  </small>
                ) : null}
              </>
            ) : null}
          </div>
        </section>
        {lightboxOpen ? (
          <DetailsLightbox
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
