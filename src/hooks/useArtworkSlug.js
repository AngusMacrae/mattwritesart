import { useParams } from 'react-router-dom';
import art from '../data/art.js';

export default function useArtworkSlug() {
  const urlParams = useParams();
  return art.find(item => item.slug === urlParams.slug);
}
