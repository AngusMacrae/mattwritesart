export default function GalleryFilterRadio({
  filterGroup,
  filter,
  checked,
  handleFilterChange,
}) {
  const inputId = `${filterGroup}-${filter}`;

  return (
    <>
      <input
        type="radio"
        id={inputId}
        value={filter}
        checked={checked}
        onChange={handleFilterChange}
      />
      <label htmlFor={inputId}>{filter}</label>
    </>
  );
}
