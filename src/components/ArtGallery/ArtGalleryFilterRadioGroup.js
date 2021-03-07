import ArtGalleryFilterRadio from './ArtGalleryFilterRadio';

export default function ArtGalleryFilterRadioGroup({ filterGroup, FILTERS, currentFilter, handleFilterChange }) {
  return (
    <fieldset className='art-filters__radio-group'>
      <legend>{filterGroup}</legend>
      <div>
        {Object.keys(FILTERS).map(filter => (
          <ArtGalleryFilterRadio filterGroup={filterGroup} filter={filter} checked={currentFilter === filter} handleFilterChange={handleFilterChange} key={filter} />
        ))}
      </div>
    </fieldset>
  );
}
