import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import usePageTitle from '../hooks/usePageTitle';

export default function Thankyou() {
  usePageTitle('mattwritesart - Thanks!');

  return (
    <>
      <Header />
      <main className='thankyou'>
        <section className='container-thin hero-text flow'>
          <p>
            <strong>Thanks for your enquiry!</strong>
          </p>
          <p>I'll get back to you as soon as I can, so keep your eyes on your inbox...</p>
          <p>&#128394;</p>
        </section>
        <section className='cta-container'>
          <Link to='/art' className='btn btn-secondary'>
            Browse More Art
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
