import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ArtFilter from "../components/ArtGallery/ArtFilter";
import ArtGalleryItem from "../components/ArtGallery/ArtGalleryItem";
import useFilter from "../hooks/useFilter";
import art, { AVAILABILITY_FILTERS, CATEGORY_FILTERS } from "../data/art.js";

export default function ArtGallery() {
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
      <main className="art-gallery">
        <section className="art-gallery__content">
          <aside>
            <h2 className="art-filters__title">
              <img src="/icons/filter.svg" alt=""></img>Filter Art
            </h2>
            <div className="art-filters__container">
              <ArtFilter
                filterGroup="availability"
                FILTERS={AVAILABILITY_FILTERS}
                currentFilter={availabilityFilter}
                handleFilterChange={handleAvailabilityFilterChange}
              />
              <ArtFilter
                filterGroup="category"
                FILTERS={CATEGORY_FILTERS}
                currentFilter={categoryFilter}
                handleFilterChange={handleCategoryFilterChange}
              />
            </div>
          </aside>

          {filteredArt.length ? (
            <ul className="art-gallery__grid">
              {filteredArt.map((artwork) => (
                <ArtGalleryItem key={artwork.slug} artwork={artwork} />
              ))}
            </ul>
          ) : (
            <div className="art-gallery__alert">Sorry - no results</div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
