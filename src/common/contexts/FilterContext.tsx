import { createContext, useState } from "react";

export const FilterContext = createContext({});

export default function FilterProvider({ children }) {
  const [savedFilters, setSavedFilters] = useState({});

  return (
    <FilterContext.Provider value={{ savedFilters, setSavedFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
