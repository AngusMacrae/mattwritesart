import ShowcaseItem from "./ShowcaseItem";
import art from "../../data/art.js";

export default function Showcase() {
  const filteredArt = art.filter((artwork) => artwork.showcase);

  return (
    <section className="showcase">
      <ul className="showcase__grid">
        {filteredArt.map((artwork) => (
          <ShowcaseItem artwork={artwork} key={artwork.slug} />
        ))}
      </ul>
    </section>
  );
}
