import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Error from './Error';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ArtDetailsLightbox from '../components/ArtDetails/ArtDetailsLightbox';
import usePageTitle from '../hooks/usePageTitle';
import loadImage from '../utils/loadImage';
import art from '../data/art.js';
import magnifyingGlass from '../assets/icons/magnifying-glass.svg';

export default function ArtDetails() {
  const urlParams = useParams();
  const artwork = art.find(item => item.slug === urlParams.slug);
  const pathValid = typeof artwork !== 'undefined';

  usePageTitle(`mattwritesart - ${pathValid && artwork.name}`);

  const [lightboxOpen, setLightboxOpen] = useState(false);

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function openLightbox() {
    setLightboxOpen(true);
  }

  const [lightboxImgLoaded, setLightboxImgLoaded] = useState(false);

  useEffect(() => {
    loadImage(`/art-images/close-ups/${artwork.slug}_1.webp`)
      .then(() => setLightboxImgLoaded(true))
      .catch(err => console.log('Failed to load lightbox image', err));
  }, [artwork]);

  if (!pathValid) {
    return <Error />;
  }

  const { name, slug, date, original, prints, closeups, height, width, medium, description } = artwork;

  return (
    <>
      <Header />
      <main className='art-details'>
        <section className='art-details__content container-med'>
          <div className='art-details__img-container'>
            <img src={`/art-images/${slug}.webp`} alt={description} className='shadow' />
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
        {lightboxOpen && lightboxImgLoaded && <ArtDetailsLightbox imageSrc={`/art-images/close-ups/${slug}_1.webp`} closeLightbox={closeLightbox} />}
      </main>
      <Footer />
    </>
  );
}
