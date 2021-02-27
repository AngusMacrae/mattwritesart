import { useState } from 'react';

export default function useFilter() {
  const [filter, setFilter] = useState('show all');

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  return [filter, handleFilterChange];
}
