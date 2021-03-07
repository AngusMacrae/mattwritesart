export default function ArtGalleryFilterSelect({ filterGroup, FILTERS, currentFilter, handleFilterChange }) {
  return (
    <div className='art-filters__select'>
      <label htmlFor={`${filterGroup}-select`}>{filterGroup}</label>
      <select value={currentFilter} onChange={handleFilterChange} name={filterGroup} id={`${filterGroup}-select`}>
        {Object.keys(FILTERS).map(filter => {
          return (
            <option value={filter} key={filter}>
              {filter}
            </option>
          );
        })}
      </select>
    </div>
  );
}
