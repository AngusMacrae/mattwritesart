import ShowcaseItem from './ShowcaseItem';

export default function Showcase({ art }) {
  return (
    <section className='showcase'>
      {art.map(artwork => (
        <ShowcaseItem artwork={artwork} key={artwork.slug} />
      ))}
    </section>
  );
}
