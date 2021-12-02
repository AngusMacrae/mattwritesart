const csv = require('csvtojson');
const fs = require('fs');

const inputFilePath = __dirname + '/raw/art.csv';
const outputFilePath = __dirname.split('\\').slice(0, -1).join('/') + '/src/data/art.js';

function processArtData(artwork) {
  const { name, slug, date, showcase, spotlight, closeups, original, prints, width, height, medium, description, tags, buyOgCaption, buyOgSmallprint, buyPrtCaption, buyPrtSmallprint } = artwork;

  return {
    name,
    slug,
    date,
    showcase: !!showcase,
    spotlight: !!spotlight,
    closeups: !!closeups,
    original: original ? Number(original) : null,
    prints: prints ? Number(prints) : null,
    width: Number(width),
    height: Number(height),
    medium,
    description,
    tags: tags.split(',').map(tag => tag.trim()),
    buyOgCaption,
    buyOgSmallprint,
    buyPrtCaption,
    buyPrtSmallprint,
  };
}

csv()
  .fromFile(inputFilePath)
  .then(rawArt => {
    const liveArt = rawArt.filter(artwork => artwork.name && artwork.slug && artwork.date);

    const processedArt = liveArt.map(processArtData);

    const allTags = processedArt
      .map(artwork => artwork.tags)
      .flat()
      .filter(tag => tag !== '');

    const CATEGORIES = [...new Set(allTags)];

    const outputString = `// file generated ${new Date()}

const art = ${JSON.stringify(processedArt)};

export const CATEGORIES = ${JSON.stringify(CATEGORIES)};

export const AVAILABILITY_FILTERS = {
  'show all': () => true,
  'original': artwork => artwork.original,
  'prints': artwork => artwork.prints,
};

export const CATEGORY_FILTERS = {
  'show all': () => true,
  ${CATEGORIES.map(category => `'${category}': artwork => artwork.tags.includes('${category}')`).join(',\n  ')}
};

export default art;`;

    fs.writeFile(outputFilePath, outputString, function (err) {
      if (err) return console.log(err);
      console.log(`Art data written to file ${outputFilePath}`);
    });
  });
