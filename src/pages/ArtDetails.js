import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import usePageTitle from '../hooks/usePageTitle';
import art from '../data/art.js';

export default function ArtDetails() {
  const { slug } = useParams();
  const artwork = art.find(item => item.slug === slug);

  usePageTitle(`mattwritesart - ${artwork.name}`);

  return (
    <>
      <Header />
      <main className='art-details'>
        <section className='art-details__content container-med'>
          <div className='art-details__img-gallery-container'>
            <img src={`/art-images/${artwork.slug}.webp`} alt={artwork.description} className='shadow' />
          </div>
          <div className='art-details__text-container flow'>
            <h2>{artwork.name}</h2>
            <ul className='art-details__key-info'>
              <li>
                <small>{artwork.date}</small>
              </li>
              <li>
                <small>
                  Original size {artwork.width}"x{artwork.height}"
                </small>
              </li>
              <li className='art-details__medium'>
                <small>{artwork.medium}</small>
              </li>
            </ul>
            <p>{artwork.description}</p>
            <h3 className='art-details__buy'>{artwork.original || artwork.prints ? 'AVAILABLE TO BUY' : 'NOT AVAILABLE TO BUY'}</h3>
            {artwork.prints && (
              <Link to={{ pathname: `/buy/${artwork.slug}`, state: { buyOption: 'print' } }} className={`btn ${artwork.original ? 'btn-secondary' : ''}`}>
                Order Print £{artwork.prints}
              </Link>
            )}
            {artwork.original && (
              <Link to={{ pathname: `/buy/${artwork.slug}`, state: { buyOption: 'original' } }} className='btn'>
                Buy Original £{artwork.original}
              </Link>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
