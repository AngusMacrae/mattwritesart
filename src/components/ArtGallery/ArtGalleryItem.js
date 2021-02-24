import { Link } from 'react-router-dom';

export default function ArtGalleryItem({ artwork }) {
  return (
    <li className='art-gallery__item'>
      <Link to={`/art/${artwork.slug}`}>
        <img className='art-gallery__item--img' src={`/art-images/${artwork.slug}.webp`} alt='' />
        <div className='art-gallery__item--content'>
          <h3>{artwork.name}</h3>
          <p className='art-gallery__item__availability'>{!artwork.original && !artwork.prints ? 'Unavailable' : !artwork.original && artwork.prints ? 'Prints' : artwork.original && artwork.prints ? 'Original & prints' : 'Original'}</p>
        </div>
      </Link>
    </li>
  );
}
