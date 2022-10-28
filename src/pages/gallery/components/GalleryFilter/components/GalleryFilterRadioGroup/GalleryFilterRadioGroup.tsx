import GalleryFilterRadio from "./components/GalleryFilterRadio/GalleryFilterRadio";

import styles from "./styles.module.scss";

export default function GalleryFilterRadioGroup({
  filterGroup,
  FILTERS,
  currentFilter,
  handleFilterChange,
}) {
  return (
    <fieldset className={styles["gallery-filter__radio-group"]}>
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
