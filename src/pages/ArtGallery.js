import { useState, Fragment } from 'react';
import ArtGalleryItem from '../components/ArtGallery/ArtGalleryItem';
import filterIcon from '../assets/icons/filter.svg';

const AVAILABILITY_FILTERS = {
  all: { caption: 'Show All', filterFunc: () => true },
  original: { caption: 'Original', filterFunc: artwork => artwork.original },
  prints: { caption: 'Prints', filterFunc: artwork => artwork.prints },
};

const CATEGORY_FILTERS = {
  all: { caption: 'Show All', filterFunc: () => true },
  // make new Set based on art.json (useContext) and dynamically create filter function for each
};

export default function ArtGallery({ art }) {
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  function handleAvailabilityFilterChange(event) {
    setAvailabilityFilter(event.target.value);
  }

  // const [categoryFilter, setCategoryFilter] = useState('all');
  // function handleCategoryFilterChange(event) {
  //   setCategoryFilter(event.target.value);
  // }

  const filteredArt = art.filter(AVAILABILITY_FILTERS[availabilityFilter].filterFunc);

  return (
    <section className='art-gallery'>
      <aside>
        <div className='art-filters-large'>
          <fieldset>
            <legend>Availability</legend>
            <div className='art-filters__radio-group'>
              {Object.keys(AVAILABILITY_FILTERS).map((filterName, i) => (
                <Fragment key={i}>
                  <input type='radio' id={`availability-${filterName}`} value={filterName} checked={availabilityFilter === filterName} onChange={handleAvailabilityFilterChange} />
                  <label htmlFor={`availability-${filterName}`}>{AVAILABILITY_FILTERS[filterName].caption}</label>
                </Fragment>
              ))}
            </div>
          </fieldset>
          {/* <fieldset>
            <legend>Category</legend>
            <div className='art-filters__radio-group'>
              <input type='radio' id='category-all' value='all' checked={categoryFilter === 'all'} onChange={handleCategoryFilterChange} />
              <label htmlFor='category-all'>Show All</label>
              <input type='radio' id='category-people' value='people' checked={categoryFilter === 'people'} onChange={handleCategoryFilterChange} />
              <label htmlFor='category-people'>People</label>
              <input type='radio' id='category-animals' value='animals' checked={categoryFilter === 'animals'} onChange={handleCategoryFilterChange} />
              <label htmlFor='category-animals'>Animals</label>
              <input type='radio' id='category-anaglyph' value='anaglyph' checked={categoryFilter === 'anaglyph'} onChange={handleCategoryFilterChange} />
              <label htmlFor='category-anaglyph'>Anaglyph</label>
            </div>
          </fieldset> */}
        </div>
        {/* <div className='art-filters-small'>
          <h2>
            <img src={filterIcon} alt=''></img>Filter Art
          </h2>
          <div className='availability-select-container select-container'>
            <label htmlFor='availability-select'>Availability</label>
            <select value={availabilityFilter} onChange={handleAvailabilityFilterChange} name='availability' id='availability-select'>
              <option value='all'>Show All</option>
              <option value='original'>Original</option>
              <option value='prints'>Prints</option>
            </select>
          </div>
          <div className='category-select-container select-container'>
            <label htmlFor='category-select' id='category-select'>
              Category
            </label>
            <select value={categoryFilter} onChange={handleCategoryFilterChange} name='category' id='category-select'>
              <option value='all'>Show All</option>
              <option value='people'>People</option>
              <option value='animals'>Animals</option>
              <option value='anaglyph'>Anaglyph</option>
            </select>
          </div>
        </div> */}
      </aside>
      <ul className='art-gallery__gallery'>
        {filteredArt.map(artwork => (
          <ArtGalleryItem key={artwork.slug} artwork={artwork} />
        ))}
      </ul>
    </section>
  );
}
