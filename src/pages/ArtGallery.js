import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ArtGalleryFilterRadioGroup from '../components/ArtGallery/ArtGalleryFilterRadioGroup';
import ArtGalleryFilterSelect from '../components/ArtGallery/ArtGalleryFilterSelect';
import ArtGalleryItem from '../components/ArtGallery/ArtGalleryItem';
import usePageTitle from '../hooks/usePageTitle';
import useFilter from '../hooks/useFilter';
import art, { AVAILABILITY_FILTERS, CATEGORY_FILTERS } from '../data/art.js';
import filterIcon from '../assets/icons/filter.svg';

export default function ArtGallery() {
  usePageTitle('Browse - mattwritesart');
  const [availabilityFilter, handleAvailabilityFilterChange] = useFilter('availability');
  const [categoryFilter, handleCategoryFilterChange] = useFilter('category');

  const availabilityFilterFunc = AVAILABILITY_FILTERS[availabilityFilter];
  const categoryFilterFunc = CATEGORY_FILTERS[categoryFilter];
  const filteredArt = art.filter(availabilityFilterFunc).filter(categoryFilterFunc);

  return (
    <>
      <Header />
      <main className='art-gallery'>
        <section className='art-gallery__content'>
          <aside>
            <div className='art-filters-lg'>
              <ArtGalleryFilterRadioGroup filterGroup='availability' FILTERS={AVAILABILITY_FILTERS} currentFilter={availabilityFilter} handleFilterChange={handleAvailabilityFilterChange} />
              <ArtGalleryFilterRadioGroup filterGroup='category' FILTERS={CATEGORY_FILTERS} currentFilter={categoryFilter} handleFilterChange={handleCategoryFilterChange} />
            </div>
            <div className='art-filters-sm'>
              <h2>
                <img src={filterIcon} alt=''></img>Filter Art
              </h2>
              <ArtGalleryFilterSelect filterGroup='availability' FILTERS={AVAILABILITY_FILTERS} currentFilter={availabilityFilter} handleFilterChange={handleAvailabilityFilterChange} />
              <ArtGalleryFilterSelect filterGroup='category' FILTERS={CATEGORY_FILTERS} currentFilter={categoryFilter} handleFilterChange={handleCategoryFilterChange} />
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
