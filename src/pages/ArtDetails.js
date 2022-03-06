import Head from 'next/head'
import Link from 'next/link';
import clsx from 'clsx';
import Error from './Error';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ArtDetailsLightbox from '../components/ArtDetails/ArtDetailsLightbox';
import useArtworkSlug from '../hooks/useArtworkSlug';
import useToggle from '../hooks/useToggle';

export default function ArtDetails() {
  const { name, slug, date, original, prints, closeups, height, width, medium, description, buyOgCaption, buyOgSmallprint, buyPrtCaption, buyPrtSmallprint } = useArtworkSlug();

  const [lightboxOpen, openLightbox, closeLightbox] = useToggle(false);

  if (!slug) return <Error />;

  return (
    <>
      <Head>
        <title>{name} - mattwritesart</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        <meta name="author" content="Angus Macrae" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="facebook-domain-verification" content="5r3fypjmkapt6xv9ny66qoz39msdn2" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
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
                <img src='/icons/magnifying-glass.svg' alt='' /> View Closer
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
                  Original size {width}&quot;x{height}&quot;
                </small>
              </li>
              <li>
                <small>{medium}</small>
              </li>
            </ul>
            <p>{description}</p>
            <h3 className='art-details__availability'>{original || prints ? 'AVAILABLE TO BUY' : 'NOT AVAILABLE TO BUY'}</h3>
            {prints && (
              <>
                <Link href={`/buy/${slug}?buyOption=print`} as={`/buy/${slug}`}>
                  <a className={clsx('btn', original && 'btn-secondary')}>{buyPrtCaption || 'Order Print'} £{prints}</a>
                </Link>
                {buyPrtSmallprint && <small className='art-details__order-smallprint'>{buyPrtSmallprint}</small>}
              </>
            )}
            {original && (
              <>
                <Link href={`/buy/${slug}?buyOption=original`} as={`/buy/${slug}`}>
                  <a className='btn'>{buyOgCaption || 'Buy Original'} £{original}</a>
                </Link>
                {buyOgSmallprint && <small className='art-details__order-smallprint'>{buyOgSmallprint}</small>}
              </>
            )}
          </div>
        </section>
        {lightboxOpen && <ArtDetailsLightbox imageSrc={`/art-images/close-ups/${slug}_1.jpg`} closeLightbox={closeLightbox} />}
      </main>
      <Footer />
    </>
  );
}
