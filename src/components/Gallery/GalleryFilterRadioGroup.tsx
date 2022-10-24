import GalleryFilterRadio from "./GalleryFilterRadio";

export default function GalleryFilterRadioGroup({
  filterGroup,
  FILTERS,
  currentFilter,
  handleFilterChange,
}) {
  return (
    <fieldset className="gallery-filter__radio-group">
      <legend>{filterGroup}</legend>
      <div>
        {Object.keys(FILTERS).map((filter) => (
          <GalleryFilterRadio
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
