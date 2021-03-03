import { useState, useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

export default function useFilter(name) {
  const { filters, setFilters } = useContext(FilterContext);
  const [filter, setFilter] = useState(filters[name] || 'show all');

  function handleFilterChange(event) {
    setFilter(event.target.value);
    setFilters({
      ...filters,
      [name]: event.target.value,
    });
  }

  return [filter, handleFilterChange];
}
