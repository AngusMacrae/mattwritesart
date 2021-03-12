import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FilterContext } from '../context/FilterContext';
import usePageTitle from '../hooks/usePageTitle';
import logo from '../assets/logo/mwa-logo.svg';

export default function Thankyou() {
  usePageTitle('Thanks! - mattwritesart');
  const { setSavedFilters } = useContext(FilterContext);

  return (
    <>
      <main className='thankyou'>
        <section className='container-thin standout flow'>
          <img src={logo} alt='' />
          <p>
            <strong>Thanks for your enquiry!</strong>
          </p>
          <p>I'll get back to you as soon as I can, so keep your eyes on your inbox...</p>
          <p>&#128394;</p>
        </section>
        <section className='cta-container'>
          <Link to='/art' className='btn btn-secondary' onClick={() => setSavedFilters({})}>
            Browse More Art
          </Link>
        </section>
      </main>
    </>
  );
}
