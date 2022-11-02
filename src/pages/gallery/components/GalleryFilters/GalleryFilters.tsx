import { SHOW_ALL_FILTER_VALUE } from "@/common/constants";

import GalleryFilterRadioGroup from "./components/GalleryFilterRadioGroup/GalleryFilterRadioGroup";
import GalleryFilterSelect from "./components/GalleryFilterSelect/GalleryFilterSelect";

import styles from "./styles.module.scss";

interface IProps {
  filters: Record<string, string[]>;
}

export default function GalleryFilters({ filters }: IProps) {
  return (
    <aside>
      <div className={styles.galleryFiltersContainer}>
        {Object.entries(filters).map(([name, values]) => (
          <div className={styles.galleryFilter} key={name}>
            <GalleryFilterRadioGroup
              filterName={name}
              filterValues={[SHOW_ALL_FILTER_VALUE, ...values]}
            />
            <GalleryFilterSelect
              filterName={name}
              filterValues={[SHOW_ALL_FILTER_VALUE, ...values]}
            />
          </div>
        ))}
      </div>
    </aside>
  );
}
