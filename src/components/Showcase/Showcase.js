import ShowcaseItem from './ShowcaseItem';

export default function Showcase({ art }) {
  const gridStyles = {
    gridAutoRows: 20,
    gap: 16,
  };

  return (
    <section className='showcase'>
      <ul className='showcase-list' style={gridStyles}>
        {art.map(artwork => (
          <ShowcaseItem artwork={artwork} key={artwork.slug} rowHeight={gridStyles.gridAutoRows} rowGap={gridStyles.gap} />
        ))}
      </ul>
    </section>
  );
}
