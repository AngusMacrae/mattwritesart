import { Link } from 'react-router-dom';
import useImg from '../../hooks/useImg';
import getAvailabilityText from '../../utils/getAvailabilityText.js';

export default function ArtGalleryItem({ artwork }) {
  const { name, slug, height, width, description, original, prints } = artwork;
  const [imgStatus, onLoad, onError] = useImg();

  const availabilityText = getAvailabilityText(original, prints);

  return (
    <li className={`art-gallery__item ${imgStatus}`}>
      <Link to={`/art/${slug}`}>
        <picture>
          <source srcSet={`/art-images/${slug}.webp`} type='image/webp' />
          <img className='shadow' src={`/art-images/${slug}.jpg`} alt={description} height={height * 1000} width={width * 1000} onLoad={onLoad} onError={onError} loading='lazy' />
        </picture>
        <div>
          <h3>{name}</h3>
          <p className='art-gallery__item--availability'>{availabilityText}</p>
        </div>
      </Link>
    </li>
  );
}
