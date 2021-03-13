export default function ArtFilterRadio({ filterGroup, filter, checked, handleFilterChange }) {
  return (
    <>
      <input type='radio' id={`${filterGroup}-${filter}`} value={filter} checked={checked} onChange={handleFilterChange} />
      <label htmlFor={`${filterGroup}-${filter}`}>{filter}</label>
    </>
  );
}
