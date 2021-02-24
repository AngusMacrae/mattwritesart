import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/right-arrow.svg';

export default function ShowcaseItem({ artwork }) {
  let gridClasses = '';
  if (artwork.height > artwork.width) {
    gridClasses += 'portrait ';
  } else {
    gridClasses += 'landscape ';
  }
  // if (artwork.height / artwork.width < 1.2 && artwork.height / artwork.width > 0.85) {
  //   gridClasses += 'square ';
  // }
  if (artwork.spotlight) {
    gridClasses += 'spotlight ';
  }

  return (
    <li className={`showcase-item ${gridClasses}`}>
      <div className='showcase-item-content'>
        <h2>{artwork.name}</h2>
        <Link to={`/art/${artwork.slug}`} className='showcase-item__link'>
          View
          <img src={arrow} alt='' />
        </Link>
        <img className='showcase-item__main-img' src={`/art-images/${artwork.slug}.webp`} alt={artwork.description} />
      </div>
    </li>
  );
}
