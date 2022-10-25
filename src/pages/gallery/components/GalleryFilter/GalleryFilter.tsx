import GalleryFilterRadioGroup from "./components/GalleryFilterRadioGroup/GalleryFilterRadioGroup";
import GalleryFilterSelect from "./components/GalleryFilterSelect/GalleryFilterSelect";

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
