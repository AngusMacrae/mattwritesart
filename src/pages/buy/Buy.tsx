import Head from "next/head";

import Header from "@/common/components/Header/Header";
import Footer from "@/common/components/Footer/Footer";
import MetaData from "@/common/components/MetaData/MetaData";
import { getAllArt, getArtworkBySlug } from "@/models/art";

import BuyForm from "./components/BuyForm/BuyForm";

import styles from "./styles.module.scss";

export default function Buy({ artwork }) {
  const { name, slug, description } = artwork;

  return (
    <>
      <Head>
        <MetaData
          title={`${name} - mattwritesart`}
          description={description}
          url={`/art/${slug}`}
          image={`/assets/images/art/${slug}.jpg`}
        />
      </Head>
      <Header />
      <main>
        <section className={styles.buyFormContainer}>
          <h1>{name}</h1>
          <BuyForm artwork={artwork} />
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
