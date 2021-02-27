import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Showcase from '../components/Showcase/Showcase';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle('mattwritesart');

  return (
    <>
      <Header />
      <main>
        <section className='about flow'>
          <p>
            <strong>Hi! I'm matt and I write art.</strong>
          </p>
          <p>I form words into images, exploring the power of negative space and the illusion of distance.</p>
        </section>
        <Showcase />
        <section className='home-ctas'>
          <Link to='/commissions' className='btn btn-secondary'>
            Commissions
          </Link>
          <Link to='/art' className='btn'>
            Browse & Buy
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
