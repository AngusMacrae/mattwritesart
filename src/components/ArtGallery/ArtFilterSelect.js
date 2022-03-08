export default function ArtFilterSelect({
  filterGroup,
  FILTERS,
  currentFilter,
  handleFilterChange,
}) {
  const selectId = `${filterGroup}-select`;

  return (
    <div className="art-filter__select">
      <label htmlFor={selectId}>{filterGroup}</label>
      <select
        value={currentFilter}
        onChange={handleFilterChange}
        name={filterGroup}
        id={selectId}
      >
        {Object.keys(FILTERS).map((filter) => {
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
