import ShowcaseItem from './ShowcaseItem';
import art from '../../data/art.js';

export default function Showcase() {
  const gridStyles = {
    gridAutoRows: 10,
    gap: 32,
  };

  return (
    <section className='showcase'>
      <ul className='showcase__grid' style={gridStyles}>
        {art
          .filter(artwork => artwork.showcase)
          .map(artwork => (
            <ShowcaseItem artwork={artwork} key={artwork.slug} rowHeight={gridStyles.gridAutoRows} rowGap={gridStyles.gap} />
          ))}
      </ul>
    </section>
  );
}
