const fs = require('fs');
const artRaw = require('./art-data-source.json');

const liveArt = artRaw.filter(artwork => artwork.name && artwork.slug && artwork.date);

function processArtData(artwork) {
  let { showcase, spotlight, closeups } = artwork;
  showcase = !!showcase;
  spotlight = !!spotlight;
  closeups = !!closeups;
  const tags = artwork.tags.split(',');

  return {
    ...artwork,
    showcase,
    spotlight,
    closeups,
    tags,
  };
}

const artProcessed = liveArt.map(processArtData);

const allTags = artProcessed
  .map(artwork => artwork.tags)
  .flat()
  .filter(tag => tag !== '');

const CATEGORIES = [...new Set(allTags)];

const outputFile = './art.js';

const outputString = `// file generated ${new Date()}

const art = ${JSON.stringify(artProcessed)};

export const CATEGORIES = ${JSON.stringify(CATEGORIES)};

export const AVAILABILITY_FILTERS = {
  'show all': () => true,
  original: artwork => artwork.original,
  prints: artwork => artwork.prints,
};

export const CATEGORY_FILTERS = {
  'show all': () => true,
  ${CATEGORIES.map(category => `'${category}': artwork => artwork.tags.includes('${category}')`).join(',\n  ')}
};

export default art;
`;

fs.writeFile(outputFile, outputString, function (err) {
  if (err) return console.log(err);
  console.log(`Art data written to file ${outputFile}`);
});
