import ArtFilterRadio from "./ArtFilterRadio";

export default function ArtFilterRadioGroup({
  filterGroup,
  FILTERS,
  currentFilter,
  handleFilterChange,
}) {
  return (
    <fieldset className="art-filter__radio-group">
      <legend>{filterGroup}</legend>
      <div>
        {Object.keys(FILTERS).map((filter) => (
          <ArtFilterRadio
            filterGroup={filterGroup}
            filter={filter}
            checked={currentFilter === filter}
            handleFilterChange={handleFilterChange}
            key={filter}
          />
        ))}
      </div>
    </fieldset>
  );
}
