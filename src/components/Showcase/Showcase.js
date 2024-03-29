import ShowcaseItem from './ShowcaseItem';
import art from '../../data/art.js';

export default function Showcase() {
  return (
    <section className='showcase'>
      <ul className='showcase__grid'>
        {art
          .filter(artwork => artwork.showcase)
          .map(artwork => (
            <ShowcaseItem artwork={artwork} key={artwork.slug} />
          ))}
      </ul>
    </section>
  );
}
