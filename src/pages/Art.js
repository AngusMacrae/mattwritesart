import GalleryItem from '../components/Gallery/GalleryItem';

export default function Art({ art }) {
  return (
    <section className='art-gallery'>
      <aside>
        <div className='art-filters'>
          <fieldset>
            <legend>Availability</legend>
            <div className='art-filters__radio-group'>
              <input type='radio' id='availability-all' name='availability' value='all' defaultChecked />
              <label htmlFor='availability-all'>Show All</label>
              <input type='radio' id='availability-original' name='availability' value='original' />
              <label htmlFor='availability-original'>Original Available</label>
              <input type='radio' id='availablitiy-prints' name='availability' value='prints' />
              <label htmlFor='availablitiy-prints'>Prints Available</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Category</legend>
            <div className='art-filters__radio-group'>
              <input type='radio' id='category-animals' name='category' value='all' defaultChecked />
              <label htmlFor='category-animals'>Show All</label>
              <input type='radio' id='category-people' name='category' value='people' />
              <label htmlFor='category-people'>People</label>
              <input type='radio' id='category-animals' name='category' value='animals' />
              <label htmlFor='category-animals'>Animals</label>
              <input type='radio' id='category-anaglyph' name='category' value='anaglyph' />
              <label htmlFor='category-anaglyph'>Anaglyph</label>
            </div>
          </fieldset>
        </div>
      </aside>
      <div className='art-gallery__gallery'>
        {art.map(artwork => (
          <GalleryItem key={artwork.slug} artwork={artwork} />
        ))}
      </div>
    </section>
  );
}
