import { ART, FILTERS } from "@/data";

export function getAllArt() {
  return ART;
}

export function getArtworkBySlug(slug) {
  return ART.find((item) => item.slug === slug);
}

export function getAllFilters() {
  return FILTERS;
}
