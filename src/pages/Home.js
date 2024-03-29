import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Showcase from '../components/Showcase/Showcase';
import { FilterContext } from '../context/FilterContext';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle('mattwritesart');
  const { setSavedFilters } = useContext(FilterContext);

  return (
    <>
      <Header />
      <main className='home'>
        <section className='container-thin standout flow'>
          <p>
            <strong>Hi! I'm matt and I write art.</strong>
          </p>
          <p>I form words into images, exploring the power of negative space and the illusion of distance.</p>
        </section>
        <Showcase />
        <section className='cta-container'>
          <Link to='/commissions' className='btn btn-secondary'>
            Commissions
          </Link>
          <Link to='/art' className='btn' onClick={() => setSavedFilters({})}>
            Browse & Buy
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
