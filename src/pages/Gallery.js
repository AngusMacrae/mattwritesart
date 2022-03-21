import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GalleryFilter from "../components/Gallery/GalleryFilter";
import GalleryItem from "../components/Gallery/GalleryItem";
import useFilter from "../hooks/useFilter";
import art, { AVAILABILITY_FILTERS, CATEGORY_FILTERS } from "../data/art.js";

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
      <main className="gallery">
        <section className="gallery__content">
          <aside>
            <h1 className="gallery-filters__title">
              <img src="/icons/filter.svg" alt=""></img>Browse & Filter Art
            </h1>
            <div className="gallery-filters__container">
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
            <ul className="gallery__grid">
              {filteredArt.map((artwork) => (
                <GalleryItem key={artwork.slug} artwork={artwork} />
              ))}
            </ul>
          ) : (
            <div className="gallery__alert">Sorry - no results</div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
