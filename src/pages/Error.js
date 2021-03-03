import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import logoSad from '../assets/logo/mwa-logo-sad.svg';

export default function Error() {
  usePageTitle('mattwritesart - Page Not Found');

  return (
    <>
      <main className='error'>
        <section className='container-thin hero-text flow'>
          <img src={logoSad} alt='' />
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
    </>
  );
}
