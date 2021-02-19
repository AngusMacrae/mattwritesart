import placeholder from '../../assets/images/placeholder.webp';

export default function GalleryItem({ artwork }) {
  return (
    <div className='gallery-item'>
      <img src={`/gallery-images/${artwork.slug}.png`} alt='' />
      {/* <img src={placeholder} alt='' /> */}
    </div>
  );
}
