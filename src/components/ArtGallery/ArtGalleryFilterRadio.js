export default function ArtGalleryFilterRadio({ filterGroupName, filterName, checked, handleFilterChange }) {
  return (
    <>
      <input type='radio' id={`${filterGroupName}-${filterName}`} value={filterName} checked={checked} onChange={handleFilterChange} />
      <label htmlFor={`${filterGroupName}-${filterName}`}>{filterName}</label>
    </>
  );
}
