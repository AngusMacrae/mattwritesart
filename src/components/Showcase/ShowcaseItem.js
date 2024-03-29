import { Link } from 'react-router-dom';
import useImg from '../../hooks/useImg';

export default function ShowcaseItem({ artwork }) {
  const { name, slug, spotlight, height, width, description } = artwork;
  const [imgStatus, onLoad, onError] = useImg();

  return (
    <li className={`showcase__item shadow ${height > width ? 'portrait' : 'landscape'} ${imgStatus} ${spotlight ? 'spotlight' : ''}`}>
      <Link to={`/art/${slug}`} className='showcase__item-content'>
        <h2>{name}</h2>
        <picture>
          <source srcSet={`/art-images/${slug}.webp`} type='image/webp' />
          <img src={`/art-images/${slug}.jpg`} alt={description} height={height * 1000} width={width * 1000} onLoad={onLoad} onError={onError} loading='lazy' />
        </picture>
      </Link>
    </li>
  );
}
