import { Link } from 'react-router-dom';

export default function ArtGalleryItem({ artwork }) {
  return (
    <div className='art-gallery__item'>
      <div className='art-gallery__item--img-container'>
        <img src={`/art-images/${artwork.slug}.png`} alt='' />
      </div>
      <div className='art-gallery__item--content'>
        <h3>{artwork.name}</h3>
        <p className='art-gallery__item__availability'>{!artwork.original && !artwork.prints ? 'Unavailable' : !artwork.original && artwork.prints ? 'Prints' : artwork.original && artwork.prints ? 'Original & prints' : 'Original'}</p>
      </div>
      <Link to={`/art/${artwork.slug}`} className='btn'>
        View
      </Link>
    </div>
  );
}
