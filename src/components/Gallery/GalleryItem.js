export default function GalleryItem({ artwork }) {
  return (
    <div className='art-gallery__item'>
      <div className='art-gallery__item--img-container'>
        <img src={`/art-images/${artwork.slug}.png`} alt='' />
      </div>
      <div className='art-gallery__item--content'>
        <h3>{artwork.name}</h3>
        <p className='art-gallery__item__availability'>{artwork.sold && !artwork.prints ? 'Unavailable' : artwork.sold && artwork.prints ? 'Prints' : !artwork.sold && artwork.prints ? 'Original & prints' : 'Original'}</p>
      </div>
      <button>Details</button>
    </div>
  );
}
