import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/right-arrow.svg';

export default function ShowcaseItem({ artwork }) {
  return (
    <li className='showcase-item'>
      <h2>{artwork.name}</h2>
      <Link to={`/art/${artwork.slug}`} className='showcase-item__link'>
        View
        <img src={arrow} alt='' />
      </Link>
      <img className='showcase-item__main-img' src={`/art-images/${artwork.slug}.png`} alt='' />
    </li>
  );
}
