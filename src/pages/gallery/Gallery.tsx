import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";
import GalleryFilter from "./components/GalleryFilter/GalleryFilter";
import GalleryItem from "./components/GalleryItem/GalleryItem";
import useFilter from "./hooks/useFilter";
import art, { AVAILABILITY_FILTERS, CATEGORY_FILTERS } from "../../data/art";

import styles from './styles.module.css';

export default function Gallery() {
  const { query } = useRouter();
  const clearFilters = query.clearFilters || false;

  const [availabilityFilter, handleAvailabilityFilterChange] = useFilter(
    "availability",
    clearFilters
  );
  const [categoryFilter, handleCategoryFilterChange] = useFilter(
    "category",
    clearFilters
  );

  const availabilityFilterFunc = AVAILABILITY_FILTERS[availabilityFilter];
  const categoryFilterFunc = CATEGORY_FILTERS[categoryFilter];
  const filteredArt = art
    .filter(availabilityFilterFunc)
    .filter(categoryFilterFunc);

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
        <section className={styles["gallery__content"]}>
          <aside>
            <h1 className={styles["gallery-filters__title"]}>
              <img src="/icons/filter.svg" alt=""></img>Browse & Filter Art
            </h1>
            <div className={styles["gallery-filters__container"]}>
              <GalleryFilter
                filterGroup="availability"
                FILTERS={AVAILABILITY_FILTERS}
                currentFilter={availabilityFilter}
                handleFilterChange={handleAvailabilityFilterChange}
              />
              <GalleryFilter
                filterGroup="category"
                FILTERS={CATEGORY_FILTERS}
                currentFilter={categoryFilter}
                handleFilterChange={handleCategoryFilterChange}
              />
            </div>
          </aside>

          {filteredArt.length ? (
            <ul className={styles["gallery__grid"]}>
              {filteredArt.map((artwork) => (
                <GalleryItem key={artwork.slug} artwork={artwork} />
              ))}
            </ul>
          ) : (
            <div className={styles["gallery__alert"]}>Sorry - no results</div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
