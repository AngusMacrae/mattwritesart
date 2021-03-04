import ArtGalleryFilterRadio from './ArtGalleryFilterRadio';

export default function ArtGalleryFilterRadioGroup({ FILTERS, filterGroupName, filter, handleFilterChange }) {
  return (
    <fieldset className='art-filters__radio-group'>
      <legend>{filterGroupName}</legend>
      <div>
        {Object.keys(FILTERS).map((filterName, i) => (
          <ArtGalleryFilterRadio key={i} filterGroupName={filterGroupName} filterName={filterName} checked={filter === filterName} handleFilterChange={handleFilterChange} />
        ))}
      </div>
    </fieldset>
  );
}
