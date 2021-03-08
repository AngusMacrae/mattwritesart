import { Link } from 'react-router-dom';
import useImg from '../../hooks/useImg';

export default function ArtGalleryItem({ artwork }) {
  const { name, slug, height, width, description, original, prints } = artwork;
  const [imgStatus, onLoad, onError] = useImg();

  let availability;

  if (original && !prints) {
    availability = 'Original';
  } else if (!original && prints) {
    availability = 'Prints';
  } else if (original && prints) {
    availability = 'Original & prints';
  } else {
    availability = 'Unavailable';
  }

  return (
    <li className={`art-gallery__item ${imgStatus}`}>
      <Link to={`/art/${slug}`}>
        <img className='shadow' src={`/art-images/${slug}.webp`} alt={description} height={height * 1000} width={width * 1000} onLoad={onLoad} onError={onError} />
        <div>
          <h3>{name}</h3>
          <p className='art-gallery__item--availability'>{availability}</p>
        </div>
      </Link>
    </li>
  );
}
