import ArtGalleryFilterRadio from './ArtGalleryFilterRadio';

export default function ArtGalleryFilterRadioGroup({ FILTERS, filterGroupName, filter, handleFilterChange }) {
  return (
    <fieldset>
      <legend>{filterGroupName}</legend>
      <div className='art-filters__radio-group'>
        {Object.keys(FILTERS).map((filterName, i) => (
          <ArtGalleryFilterRadio key={i} filterGroupName={filterGroupName} filterName={filterName} checked={filter === filterName} handleFilterChange={handleFilterChange} />
        ))}
      </div>
    </fieldset>
  );
}
