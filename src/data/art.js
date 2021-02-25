import artRaw from './artRaw.json';

const liveArt = artRaw.filter(artwork => artwork.name && artwork.slug && artwork.date);

function processArtData(artwork) {
  let { showcase, spotlight } = artwork;
  showcase = !!showcase;
  spotlight = !!spotlight;
  const tags = artwork.tags.split(',');

  return {
    ...artwork,
    showcase,
    spotlight,
    tags,
  };
}

const artProcessed = liveArt.map(processArtData);

const allTags = artProcessed
  .map(artwork => artwork.tags)
  .flat()
  .filter(tag => tag !== '');

export const CATEGORIES = new Set(allTags);

export default artProcessed;
console.log(artProcessed);
