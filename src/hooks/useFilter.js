import { useState, useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

export default function useFilter(name) {
  const { savedFilters, setSavedFilters } = useContext(FilterContext);
  const [filter, setFilter] = useState(savedFilters[name] || 'show all');

  function handleFilterChange(event) {
    setFilter(event.target.value);
    setSavedFilters({
      ...savedFilters,
      [name]: event.target.value,
    });
    window.scrollTo(0, 0);
  }

  return [filter, handleFilterChange];
}
