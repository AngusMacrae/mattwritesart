import GalleryFilterRadioGroup from "./GalleryFilterRadioGroup";
import GalleryFilterSelect from "./GalleryFilterSelect";

export default function GalleryFilter({
  filterGroup,
  FILTERS,
  currentFilter,
  handleFilterChange,
}) {
  return (
    <>
      <GalleryFilterRadioGroup
        filterGroup={filterGroup}
        FILTERS={FILTERS}
        currentFilter={currentFilter}
        handleFilterChange={handleFilterChange}
      />
      <GalleryFilterSelect
        filterGroup={filterGroup}
        FILTERS={FILTERS}
        currentFilter={currentFilter}
        handleFilterChange={handleFilterChange}
      />
    </>
  );
}
