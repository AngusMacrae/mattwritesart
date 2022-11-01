import Router, { useRouter } from "next/router";
import React from "react";
import { SHOW_ALL_FILTER_VALUE } from "../../../common/constants";

type TFilterTuple = [
  string,
  (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
];

export default function useFilter(filterName: string): TFilterTuple {
  const { query, pathname } = useRouter();
  const currentValue = (query[filterName] || SHOW_ALL_FILTER_VALUE) as string;

  const handleFilterChange = (event) => {
    const newValue = event.target.value;
    const newQuery = { ...query };

    if (newValue === SHOW_ALL_FILTER_VALUE) {
      delete newQuery[filterName];
    } else {
      newQuery[filterName] = newValue;
    }

    Router.replace({
      pathname,
      query: newQuery,
    });
  };

  return [currentValue, handleFilterChange];
}
