import GalleryFilterRadio from "./components/GalleryFilterRadio/GalleryFilterRadio";

import styles from "./styles.module.scss";

export default function GalleryFilterRadioGroup({ filterName, filterValues }) {
  return (
    <fieldset className={styles.galleryFilterRadioGroup}>
      <legend>{filterName}</legend>
      <div>
        {filterValues.map((value) => (
          <GalleryFilterRadio
            filterName={filterName}
            value={value}
            key={value}
          />
        ))}
      </div>
    </fieldset>
  );
}
