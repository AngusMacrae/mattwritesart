import ArtFilterRadioGroup from "./ArtFilterRadioGroup";
import ArtFilterSelect from "./ArtFilterSelect";

export default function ArtFilter({
  filterGroup,
  FILTERS,
  currentFilter,
  handleFilterChange,
}) {
  return (
    <>
      <ArtFilterRadioGroup
        filterGroup={filterGroup}
        FILTERS={FILTERS}
        currentFilter={currentFilter}
        handleFilterChange={handleFilterChange}
      />
      <ArtFilterSelect
        filterGroup={filterGroup}
        FILTERS={FILTERS}
        currentFilter={currentFilter}
        handleFilterChange={handleFilterChange}
      />
    </>
  );
}
