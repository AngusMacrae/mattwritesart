import { SHOW_ALL_FILTER_VALUE } from "@/common/constants";
import { ART } from "@/data";

export function getAllArt() {
  return ART;
}

export function getArtworkBySlug(slug) {
  return ART.find((item) => item.slug === slug);
}

export function getAllFilters() {
  const allCategoryTags = ART.map((artwork) => artwork.tags)
    .flat()
    .filter((tag) => tag !== "");

  const uniqueCategories = [...new Set(allCategoryTags)];

  const filters = {
    availability: [SHOW_ALL_FILTER_VALUE, "original", "prints"],
    category: [SHOW_ALL_FILTER_VALUE, ...uniqueCategories],
  };

  return filters;
}
