import ShowcaseItem from './ShowcaseItem';

export default function Showcase({ art }) {
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
