export default function ArtGalleryFilterSelect({ value, handleFilterChange, filterGroupName, options }) {
  return (
    <div className={`${filterGroupName}-select-container select-container`}>
      <label htmlFor={`${filterGroupName}-select`}>Availability</label>
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
