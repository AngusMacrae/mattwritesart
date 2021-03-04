import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ArtGalleryFilterRadioGroup from '../components/ArtGallery/ArtGalleryFilterRadioGroup';
import ArtGalleryFilterSelect from '../components/ArtGallery/ArtGalleryFilterSelect';
import ArtGalleryItem from '../components/ArtGallery/ArtGalleryItem';
import usePageTitle from '../hooks/usePageTitle';
import useFilter from '../hooks/useFilter';
import art, { CATEGORIES } from '../data/art.js';
import filterIcon from '../assets/icons/filter.svg';

const AVAILABILITY_FILTERS = {
  'show all': () => true,
  original: artwork => artwork.original,
  prints: artwork => artwork.prints,
};

const CATEGORY_FILTERS = {
  'show all': () => true,
};

CATEGORIES.forEach(category => {
  CATEGORY_FILTERS[category] = artwork => artwork.tags.includes(category);
});

export default function ArtGallery() {
  usePageTitle('mattwritesart - Browse & Buy');
  const [availabilityFilter, handleAvailabilityFilterChange] = useFilter('availability');
  const [categoryFilter, handleCategoryFilterChange] = useFilter('category');

  const filteredArt = art.filter(AVAILABILITY_FILTERS[availabilityFilter]).filter(CATEGORY_FILTERS[categoryFilter]);

  return (
    <>
      <Header />
      <main className='art-gallery'>
        <section className='art-gallery__content'>
          <aside>
            <div className='art-filters-lg'>
              <ArtGalleryFilterRadioGroup FILTERS={AVAILABILITY_FILTERS} filterGroupName='availability' filter={availabilityFilter} handleFilterChange={handleAvailabilityFilterChange} />
              <ArtGalleryFilterRadioGroup FILTERS={CATEGORY_FILTERS} filterGroupName='category' filter={categoryFilter} handleFilterChange={handleCategoryFilterChange} />
            </div>
            <div className='art-filters-sm'>
              <h2>
                <img src={filterIcon} alt=''></img>Filter Art
              </h2>
              <ArtGalleryFilterSelect value={availabilityFilter} handleFilterChange={handleAvailabilityFilterChange} filterGroupName='availability' options={Object.keys(AVAILABILITY_FILTERS)} />
              <ArtGalleryFilterSelect value={categoryFilter} handleFilterChange={handleCategoryFilterChange} filterGroupName='category' options={Object.keys(CATEGORY_FILTERS)} />
            </div>
          </aside>

          {filteredArt.length ? (
            <ul className='art-gallery__grid'>
              {filteredArt.map(artwork => (
                <ArtGalleryItem key={artwork.slug} artwork={artwork} />
              ))}
            </ul>
          ) : (
            <p className='art-gallery__no-results'>Sorry - no results</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
