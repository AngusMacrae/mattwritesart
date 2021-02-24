import { Fragment } from 'react';

export default function ArtGalleryFilterRadio({ idName, filterName, checked, handleFilterChange, FILTERS }) {
  return (
    <Fragment>
      <input type='radio' id={`${idName}-${filterName}`} value={filterName} checked={checked} onChange={handleFilterChange} />
      <label htmlFor={`${idName}-${filterName}`}>{FILTERS[filterName].caption}</label>
    </Fragment>
  );
}
