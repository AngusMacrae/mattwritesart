import useFilter from "../../../../../../hooks/useFilter";

import styles from "./styles.module.scss";

export default function GalleryFilterRadio({ filterName, value }) {
  const [currentValue, handleChange] = useFilter(filterName);

  const inputId = `${filterName}-${value}`;

  return (
    <div className={styles.galleryFilterRadio}>
      <input
        type="radio"
        id={inputId}
        value={value}
        checked={value === currentValue}
        onChange={handleChange}
      />
      <label htmlFor={inputId}>{value}</label>
    </div>
  );
}
