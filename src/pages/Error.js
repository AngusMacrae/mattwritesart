import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import usePageTitle from '../hooks/usePageTitle';

export default function Error() {
  usePageTitle('mattwritesart - Page Not Found');

  return (
    <>
      <Header />
      <main className='error'>
        <section className='container-thin hero-text flow'>
          <p>
            <strong>Oh no! Nothing to see here.</strong>
          </p>
          <p>Would you like to browse some art?</p>
        </section>
        <section className='cta-container'>
          <Link to='/' className='btn btn-secondary'>
            Home
          </Link>
          <Link to='/art' className='btn'>
            Browse Art
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
