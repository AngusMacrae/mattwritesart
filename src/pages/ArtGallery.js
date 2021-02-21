import { useState } from 'react';
import ArtGalleryItem from '../components/ArtGallery/ArtGalleryItem';

export default function ArtGallery({ art }) {
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  function handleAvailabilityFilterChange(event) {
    setAvailabilityFilter(event.target.value);
  }

  const [categoryFilter, setCategoryFilter] = useState('all');
  function handleCategoryFilterChange(event) {
    setCategoryFilter(event.target.value);
  }

  const showOriginals = availabilityFilter !== 'prints';
  const showPrints = availabilityFilter !== 'original';
  const filteredArt = art.filter(artwork => (artwork.original && showOriginals) || (artwork.prints && showPrints));

  return (
    <section className='art-gallery'>
      <aside>
        <div className='art-filters'>
          <fieldset>
            <legend>Availability</legend>
            <div className='art-filters__radio-group'>
              <input type='radio' id='availability-all' value='all' checked={availabilityFilter === 'all'} onChange={handleAvailabilityFilterChange} />
              <label htmlFor='availability-all'>Show All</label>
              <input type='radio' id='availability-original' value='original' checked={availabilityFilter === 'original'} onChange={handleAvailabilityFilterChange} />
              <label htmlFor='availability-original'>Original</label>
              <input type='radio' id='availablitiy-prints' value='prints' checked={availabilityFilter === 'prints'} onChange={handleAvailabilityFilterChange} />
              <label htmlFor='availablitiy-prints'>Prints</label>
            </div>
          </fieldset>
          <fieldset>
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
          </fieldset>
        </div>
      </aside>
      <ul className='art-gallery__gallery'>
        {filteredArt.map(artwork => (
          <ArtGalleryItem key={artwork.slug} artwork={artwork} />
        ))}
      </ul>
    </section>
  );
}
