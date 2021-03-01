import { Link } from 'react-router-dom';

export default function ArtGalleryItem({ artwork }) {
  const { name, slug, description, original, prints } = artwork;

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
    <li className='art-gallery__item'>
      <Link to={`/art/${slug}`}>
        <img className='art-gallery__item--img shadow' src={`/art-images/${slug}.webp`} alt={description} />
        <div className='art-gallery__item--content'>
          <h3>{name}</h3>
          <p className='art-gallery__item__availability'>{availability}</p>
        </div>
      </Link>
    </li>
  );
}
