import Head from "next/head";

import Header from "@/common/components/Header/Header";
import Footer from "@/common/components/Footer/Footer";
import { ICONS } from "@/common/constants";
import art, { FILTERS } from "@/data/art";

import GalleryFilters from "./components/GalleryFilters/GalleryFilters";
import GalleryGrid from "./components/GalleryGrid/GalleryGrid";

import styles from "./styles.module.scss";

export default function Gallery() {
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
          <GalleryFilters filters={FILTERS} />
          <GalleryGrid art={art} />
        </section>
      </main>
      <Footer />
    </>
  );
}
