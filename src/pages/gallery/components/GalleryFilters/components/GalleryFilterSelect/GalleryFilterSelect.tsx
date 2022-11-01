import useFilter from "../../../../hooks/useFilter";

import styles from "./styles.module.scss";

export default function GalleryFilterSelect({ filterName, filterValues }) {
  const [currentValue, handleChange] = useFilter(filterName);

  const selectId = `${filterName}-select`;

  return (
    <div className={styles.galleryFilterSelectContainer}>
      <label htmlFor={selectId}>{filterName}</label>
      <select
        value={currentValue}
        onChange={handleChange}
        name={filterName}
        id={selectId}
      >
        {filterValues.map((value) => {
          return (
            <option value={value} key={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
