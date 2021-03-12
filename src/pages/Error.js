import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FilterContext } from '../context/FilterContext';
import usePageTitle from '../hooks/usePageTitle';
import logoSad from '../assets/logo/mwa-logo-sad.svg';

export default function Error() {
  usePageTitle('Page Not Found - mattwritesart');
  const { setSavedFilters } = useContext(FilterContext);

  return (
    <>
      <main className='error'>
        <section className='container-thin standout flow'>
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
          <Link to='/art' className='btn' onClick={() => setSavedFilters({})}>
            Browse Art
          </Link>
        </section>
      </main>
    </>
  );
}
