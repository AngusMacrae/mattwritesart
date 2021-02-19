import GalleryItem from './GalleryItem';

export default function Gallery({ art }) {
  return (
    <section className='gallery'>
      {art.map(artwork => (
        <GalleryItem artwork={artwork} key={artwork.id} />
      ))}
    </section>
  );
}
