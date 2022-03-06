import { useRouter } from 'next/router'
import art from "../data/art.js";

export default function useArtworkSlug() {
  const router = useRouter();
  const artwork = art.find((item) => item.slug === router.query.slug);
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