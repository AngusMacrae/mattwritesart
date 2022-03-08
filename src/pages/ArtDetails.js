import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ArtDetailsLightbox from "../components/ArtDetails/ArtDetailsLightbox";
import useToggle from "../hooks/useToggle";
import art from "../data/art.js";

export default function ArtDetails({ artwork }) {
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

  return (
    <>
      <Head>
        <title>{name} - mattwritesart</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main className="art-details">
        <section className="art-details__content container-med">
          <div className="art-details__img-container">
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
          <div className="art-details__info-container flow">
            <h2>{name}</h2>
            <ul>
              <li>
                <small>{date}</small>
              </li>
              <li>
                <small>
                  Original size {width}&quot;x{height}&quot;
                </small>
              </li>
              <li>
                <small>{medium}</small>
              </li>
            </ul>
            <p>{description}</p>
            <h3 className="art-details__availability">
              {original || prints ? "AVAILABLE TO BUY" : "NOT AVAILABLE TO BUY"}
            </h3>
            {prints ? (
              <>
                <Link href={`/buy/${slug}?buyOption=print`} as={`/buy/${slug}`}>
                  <a className={clsx("btn", original && "btn-secondary")}>
                    {buyPrtCaption || "Order Print"} £{prints}
                  </a>
                </Link>
                {buyPrtSmallprint ? (
                  <small className="art-details__order-smallprint">
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
                    {buyOgCaption || "Buy Original"} £{original}
                  </a>
                </Link>
                {buyOgSmallprint ? (
                  <small className="art-details__order-smallprint">
                    {buyOgSmallprint}
                  </small>
                ) : null}
              </>
            ) : null}
          </div>
        </section>
        {lightboxOpen ? (
          <ArtDetailsLightbox
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
