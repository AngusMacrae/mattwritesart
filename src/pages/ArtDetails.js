import { useParams, Link } from 'react-router-dom';
import Error from './Error';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import usePageTitle from '../hooks/usePageTitle';
import art from '../data/art.js';

export default function ArtDetails() {
  const urlParams = useParams();
  const artwork = art.find(item => item.slug === urlParams.slug);
  const pathValid = typeof artwork !== 'undefined';

  usePageTitle(`mattwritesart - ${pathValid && artwork.name}`);

  if (!pathValid) {
    return <Error />;
  }

  const { name, slug, date, original, prints, height, width, medium, description } = artwork;

  return (
    <>
      <Header />
      <main className='art-details'>
        <section className='art-details__content container-med'>
          <div className='art-details__img-container'>
            <img src={`/art-images/${slug}.webp`} alt={description} className='shadow' />
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
      </main>
      <Footer />
    </>
  );
}
