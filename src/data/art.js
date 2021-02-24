import artRaw from './artRaw.json';

export const CATEGORIES = new Set(artRaw.map(artwork => artwork.tags).flat());

export default artRaw;
