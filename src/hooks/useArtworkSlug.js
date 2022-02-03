import { useParams } from "react-router-dom";
import art from "../data/art.js";

export default function useArtworkSlug() {
  const urlParams = useParams();
  const artwork = art.find((item) => item.slug === urlParams.slug);
  const fallback = {
    name: null,
    slug: null,
    date: null,
    showcase: null,
    spotlight: null,
    closeups: null,
    original: null,
    prints: null,
    width: null,
    height: null,
    medium: null,
    description: null,
    tags: [],
    buyOgCaption: null,
    buyOgSmallprint: null,
    buyPrtCaption: null,
    buyPrtSmallprint: null,
  };

  return artwork || fallback;
}