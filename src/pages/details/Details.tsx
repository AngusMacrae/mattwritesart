import Head from "next/head";

import Header from "@/common/components/Header/Header";
import Footer from "@/common/components/Footer/Footer";
import MetaData from "@/common/components/MetaData/MetaData";
import useToggle from "@/common/hooks/useToggle";
import art from "@/data/art";

import ArtworkImage from "./components/ArtworkImage/ArtworkImage";
import Lightbox from "./components/Lightbox/Lightbox";
import ArtworkInfo from "./components/ArtworkInfo/ArtworkInfo";

import styles from "./styles.module.scss";

export default function Details({ artwork }) {
  const { name, slug, description, closeups } = artwork;

  const [lightboxOpen, openLightbox, closeLightbox] = useToggle(false);

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
        <section className={styles.detailsContainer}>
          <ArtworkImage
            slug={slug}
            description={description}
            closeups={closeups}
            openLightbox={openLightbox}
          />
          <ArtworkInfo artwork={artwork} />
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
