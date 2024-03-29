import { Link } from 'react-router-dom';
import Error from './Error';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ArtDetailsLightbox from '../components/ArtDetails/ArtDetailsLightbox';
import usePageTitle from '../hooks/usePageTitle';
import useArtworkSlug from '../hooks/useArtworkSlug';
import useLightbox from '../hooks/useLightbox';
import magnifyingGlass from '../assets/icons/magnifying-glass.svg';

export default function ArtDetails() {
  const artwork = useArtworkSlug();

  usePageTitle(`${artwork && artwork.name} - mattwritesart`);

  const [lightboxOpen, openLightbox, closeLightbox] = useLightbox();

  if (!artwork) {
    return <Error />;
  }

  const { name, slug, date, original, prints, closeups, height, width, medium, description } = artwork;

  return (
    <>
      <Header />
      <main className='art-details'>
        <section className='art-details__content container-med'>
          <div className='art-details__img-container'>
            <picture>
              <source srcSet={`/art-images/${slug}.webp`} type='image/webp' />
              <img className='shadow' src={`/art-images/${slug}.jpg`} alt={description} />
            </picture>
            {closeups && (
              <button onClick={openLightbox}>
                <img src={magnifyingGlass} alt='' /> View Closer
              </button>
            )}
          </div>
          <div className='art-details__info-container flow'>
            <h2>{name}</h2>
            <ul>
              <li>
                <small>{date}</small>
              </li>
              <li>
                <small>
                  Original size {width}"x{height}"
                </small>
              </li>
              <li>
                <small>{medium}</small>
              </li>
            </ul>
            <p>{description}</p>
            <h3 className='art-details__availability'>{original || prints ? 'AVAILABLE TO BUY' : 'NOT AVAILABLE TO BUY'}</h3>
            {prints && (
              <Link to={{ pathname: `/buy/${slug}`, state: { buyOption: 'Print' } }} className={`btn ${original ? 'btn-secondary' : ''}`}>
                Order Print £{prints}
              </Link>
            )}
            {original && (
              <Link to={{ pathname: `/buy/${slug}`, state: { buyOption: 'Original' } }} className='btn'>
                Buy Original £{original}
              </Link>
            )}
          </div>
        </section>
        {lightboxOpen && <ArtDetailsLightbox imageSrc={`/art-images/close-ups/${slug}_1.jpg`} closeLightbox={closeLightbox} />}
      </main>
      <Footer />
    </>
  );
}
