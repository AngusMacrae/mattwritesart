import { Link } from 'react-router-dom';

export default function ShowcaseItem({ artwork }) {
  const { name, slug, spotlight, height, width, description } = artwork;

  let gridClasses = '';
  if (height > width) {
    gridClasses += 'portrait ';
  } else {
    gridClasses += 'landscape ';
  }
  // if (height / width < 1.2 && height / width > 0.85) {
  //   gridClasses += 'square ';
  // }
  if (spotlight) {
    gridClasses += 'spotlight ';
  }

  return (
    <li className={`showcase-item shadow ${gridClasses}`}>
      <Link to={`/art/${slug}`} className='showcase-item-content'>
        <h2>{name}</h2>
        <img className='showcase-item__main-img' src={`/art-images/${slug}.webp`} alt={description} />
      </Link>
    </li>
  );
}
