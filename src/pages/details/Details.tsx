import Head from "next/head";

import Header from "@/common/components/Header/Header";
import Footer from "@/common/components/Footer/Footer";
import MetaData from "@/common/components/MetaData/MetaData";
import { getAllArt, getArtworkBySlug } from "@/models/art";

import ArtworkImage from "./components/ArtworkImage/ArtworkImage";
import ArtworkInfo from "./components/ArtworkInfo/ArtworkInfo";

import styles from "./styles.module.scss";

export default function Details({ artwork }) {
  const { name, slug, description, closeups } = artwork;

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
          />
          <ArtworkInfo artwork={artwork} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const art = getAllArt();
  const paths = art.map(({ slug }) => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const artwork = getArtworkBySlug(params.slug);

  return {
    props: {
      artwork,
    },
  };
}
