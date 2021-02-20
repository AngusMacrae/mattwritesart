import placeholder from '../../assets/images/placeholder.webp';

export default function GalleryItem({ artwork }) {
  return (
    <div className='gallery-item'>
      <h2>{artwork.name}</h2>
      <div className='gallery-item__chips'>
        {artwork.sold ? <span>Sold!</span> : null}
        {artwork.prints ? <span>Prints available</span> : null}
        <button>Details</button>
      </div>
      <img src={`/gallery-images/${artwork.slug}.png`} alt='' />
      {/* <img src={placeholder} alt='' /> */}
    </div>
  );
}
