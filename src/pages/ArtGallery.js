import Head from 'next/head'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ArtFilter from '../components/ArtGallery/ArtFilter';
import ArtGalleryItem from '../components/ArtGallery/ArtGalleryItem';
import useFilter from '../hooks/useFilter';
import art, { AVAILABILITY_FILTERS, CATEGORY_FILTERS } from '../data/art.js';

export default function ArtGallery() {
  const [availabilityFilter, handleAvailabilityFilterChange] = useFilter('availability');
  const [categoryFilter, handleCategoryFilterChange] = useFilter('category');

  const availabilityFilterFunc = AVAILABILITY_FILTERS[availabilityFilter];
  const categoryFilterFunc = CATEGORY_FILTERS[categoryFilter];
  const filteredArt = art.filter(availabilityFilterFunc).filter(categoryFilterFunc);

  return (
    <>
      <Head>
        <title>Browse - mattwritesart</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="UK-based artist - forming words into images, exploring the power of negative space and the illusion of distance." />
        <meta name="author" content="Angus Macrae" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="facebook-domain-verification" content="5r3fypjmkapt6xv9ny66qoz39msdn2" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className='art-gallery'>
        <section className='art-gallery__content'>
          <aside>
            <h2 className='art-filters__title'>
              <img src='/icons/filter.svg' alt=''></img>Filter Art
            </h2>
            <div className='art-filters__container'>
              <ArtFilter filterGroup='availability' FILTERS={AVAILABILITY_FILTERS} currentFilter={availabilityFilter} handleFilterChange={handleAvailabilityFilterChange} />
              <ArtFilter filterGroup='category' FILTERS={CATEGORY_FILTERS} currentFilter={categoryFilter} handleFilterChange={handleCategoryFilterChange} />
            </div>
          </aside>

          {filteredArt.length ? (
            <ul className='art-gallery__grid'>
              {filteredArt.map(artwork => (
                <ArtGalleryItem key={artwork.slug} artwork={artwork} />
              ))}
            </ul>
          ) : (
            <div className='art-gallery__alert'>Sorry - no results</div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
