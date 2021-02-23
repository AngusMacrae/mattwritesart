import { useContext } from 'react';
import { ArtContext } from '../App';
import ShowcaseItem from './ShowcaseItem';

export default function Showcase() {
  const art = useContext(ArtContext);

  return (
    <section className='showcase'>
      <ul className='showcase-list'>
        {art.map(artwork => (
          <ShowcaseItem artwork={artwork} key={artwork.slug} />
        ))}
      </ul>
    </section>
  );
}
