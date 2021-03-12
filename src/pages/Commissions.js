import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FilterContext } from '../context/FilterContext';
import usePageTitle from '../hooks/usePageTitle';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Commissions() {
  usePageTitle('Commissions - mattwritesart');
  const { setSavedFilters } = useContext(FilterContext);

  return (
    <>
      <Header />
      <main className='commissions'>
        <section className='commissions__images container-med'>
          <img src={`/art-images/pete-doherty.jpg`} alt='Pete Doherty' className='shadow' />
          <img src={`/art-images/bjoern-gelotte.jpg`} alt='Bjoern Gelotte' className='shadow' />
          <img src={`/art-images/frank-turner-3.jpg`} alt='Frank Turner' className='shadow' />
        </section>
        <section className='commissions__text-container container-thin flow'>
          <h2>Commissions</h2>
          <p>I love the challenge and joy of commissions. From discussing a new idea with a potential customer, through the process of creation, to delivery - it's a unique journey.</p>
          <p>If you're interested in an original commission, please don't hesitate to get in touch! I'll be happy to discuss ideas, cost, sizing, and anything else that makes the piece special for you.</p>
          <p>Please note that unless discussed I reserve the right to make a copy and prints of any commissioned piece.</p>
        </section>
        <section className='cta-container'>
          <Link to='/art' className='btn btn-secondary' onClick={() => setSavedFilters({})}>
            View More Art
          </Link>
          <Link to='/contact' className='btn'>
            Commission Original Art
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
