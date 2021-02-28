export default function ArtGalleryFilterSelect({ value, handleFilterChange, filterGroupName, options }) {
  return (
    <div className='select-container'>
      <label htmlFor={`${filterGroupName}-select`}>{filterGroupName}</label>
      <select value={value} onChange={handleFilterChange} name={filterGroupName} id={`${filterGroupName}-select`}>
        {options.map(option => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
