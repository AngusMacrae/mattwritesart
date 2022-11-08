const fs = require("fs");
const csv = require("csvtojson");
const sharp = require("sharp");

const rawImageDir = "lib/raw/images/";
const rawCloseupsDir = "lib/raw/images/close-ups/";
const processedImageDir = "public/art-images/";
const processedCloseupsDir = "public/art-images/close-ups/";
const rawArtPath = __dirname + "/raw/art.csv";
// for windows
// const processedArtPath =
//   __dirname.split("\\").slice(0, -1).join("/") + "/src/data/art.ts";
// for mac
const processedArtPath =
  __dirname.split("/").slice(0, -1).join("/") + "/src/data/art.ts";

function isFormat(filename, formats) {
  const fileFormat = filename.split(".")[1];

  return fileFormat ? formats.includes(fileFormat) : false;
}

function formatImage(filename, format) {
  return filename.split(".")[0] + "." + format;
}

const rawImages = fs
  .readdirSync(rawImageDir)
  .filter((image) => isFormat(image, ["jpg", "png"]));
const rawCloseups = fs
  .readdirSync(rawCloseupsDir)
  .filter((image) => isFormat(image, ["jpg", "png"]));

// convert jpg and png art images to jpg and webp 1500x1300 contained dimensions, and strip exif
rawImages.forEach((filename) => {
  sharp(rawImageDir + filename)
    .resize(1500, 1300, { fit: sharp.fit.inside })
    .toFile(processedImageDir + formatImage(filename, "jpg"), (err) => {
      if (err) throw err;
    });

  sharp(rawImageDir + filename)
    .resize(1500, 1300, { fit: sharp.fit.inside })
    .toFile(processedImageDir + formatImage(filename, "webp"), (err) => {
      if (err) throw err;
    });

  console.log(`Image named ${filename} was converted`);
});

if (rawImages.length === 0) console.log("No images were found");

// convert jpg and png closeups to jpg 1800x1500 contained dimensions, and strip exif
rawCloseups.forEach((filename) => {
  sharp(rawCloseupsDir + filename)
    .resize(1800, 1500, { fit: sharp.fit.inside })
    .toFile(processedCloseupsDir + formatImage(filename, "jpg"), (err) => {
      if (err) throw err;
    });

  console.log(`Closeup named ${filename} was converted`);
});

if (rawCloseups.length === 0) console.log("No closeups were found");

// convert input csv to json (stripping out unwanted fields) and generate categories and filters
csv()
  .fromFile(rawArtPath)
  .then((rawArt) => {
    const liveArt = rawArt.filter(
      (artwork) => artwork.name && artwork.slug && artwork.date
    );

    const processedArt = liveArt.map((artwork) => {
      return {
        name: artwork.name,
        slug: artwork.slug,
        date: artwork.date,
        showcase: !!artwork.showcase,
        spotlight: !!artwork.spotlight,
        closeups: !!artwork.closeups,
        original: artwork.original ? Number(artwork.original) : null,
        prints: artwork.prints ? Number(artwork.prints) : null,
        width: Number(artwork.width),
        height: Number(artwork.height),
        medium: artwork.medium,
        description: artwork.description,
        tags: artwork.tags.split(",").map((tag) => tag.trim()),
        buyOgCaption: artwork.buyOgCaption || "Buy Original",
        buyOgSmallprint: artwork.buyOgSmallprint,
        buyPrtCaption: artwork.buyPrtCaption || "Order Print",
        buyPrtSmallprint: artwork.buyPrtSmallprint,
      };
    });

    const allTags = processedArt
      .map((artwork) => artwork.tags)
      .flat()
      .filter((tag) => tag !== "");

    const CATEGORIES = [...new Set(allTags)];

    const outputString = `// file generated ${new Date()}

const art = ${JSON.stringify(processedArt)};

export const FILTERS = {
  availability: ["original", "prints"],
  category: ${JSON.stringify(CATEGORIES)},
}

export default art;`;

    fs.writeFile(processedArtPath, outputString, function (err) {
      if (err) return console.log(err);
      console.log(`Art data written to file ${processedArtPath}`);
    });
  });
