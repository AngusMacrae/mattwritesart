import Head from "next/head";

import Header from "@/common/components/Header/Header";
import Footer from "@/common/components/Footer/Footer";
import { ICONS } from "@/common/constants";
import { getAllArt, getAllFilters } from "@/models/art";

import GalleryFilters from "./components/GalleryFilters/GalleryFilters";
import GalleryGrid from "./components/GalleryGrid/GalleryGrid";

import styles from "./styles.module.scss";

export default function Gallery({ art, filters }) {
  return (
    <>
      <Head>
        <title>Browse - mattwritesart</title>
        <meta
          name="description"
          content="UK-based artist - forming words into images, exploring the power of negative space and the illusion of distance."
        />
      </Head>
      <Header />
      <main>
        <section className={styles.galleryContentContainer}>
          <h1 className={styles.title}>
            <img src={ICONS.FILTER} alt=""></img>Browse & Filter Art
          </h1>
          <GalleryFilters filters={filters} />
          <GalleryGrid art={art} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const art = getAllArt();
  const filters = getAllFilters();

  return {
    props: {
      art,
      filters,
    },
  };
}
