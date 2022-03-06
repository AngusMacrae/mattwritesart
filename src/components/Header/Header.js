import Link from 'next/link';
import { useContext } from 'react';
import clsx from 'clsx';
import { FilterContext } from '../../context/FilterContext';
import useToggle from '../../hooks/useToggle';
import useOnResize from '../../hooks/useOnResize';

export default function Header() {
  const { setSavedFilters } = useContext(FilterContext);
  const [menuOpen, , closeMenu, toggleMenu] = useToggle(false);
  useOnResize(closeMenu);

  return (
    <header className='header'>
      <div className='header__content container-wide'>
        <div className='header__top-bar'>
          <Link href='/' onClick={closeMenu} >
            <a className='header-home' title='Home'>
              <img src='/logo/mwa-logo.svg' alt='' />
              <h1>
                matt<span className='deemphasised'>writes</span>art<small className='deemphasised'>.co.uk</small>
              </h1>
            </a>
          </Link>
          <button onClick={toggleMenu} className='header__menu-toggle-btn'>
            <img src={menuOpen ? '/icons/close.svg' : '/icons/menu.svg'} alt='Menu' />
          </button>
        </div>
        <nav className={clsx(menuOpen && 'active')}>
          <ul className='nav__page-links'>
            <li className='nav__home'>
              <Link href='/' exact onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/art'
                onClick={() => {
                  closeMenu();
                  setSavedFilters({});
                }}
              >
                Browse & Buy
              </Link>
            </li>
            <li>
              <Link href='/commissions' onClick={closeMenu}>
                Commissions
              </Link>
            </li>
            <li>
              <Link href='/contact' onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <ul className='nav__social-links'>
            <li>
              <a href='https://www.instagram.com/mattwritesart/' target='_blank' rel='noopener noreferrer' title='Instagram'>
                <img src='/icons/instagram.svg' alt='mattwritesart on Instagram' />
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/mattwritesart' target='_blank' rel='noopener noreferrer' title='Facebook'>
                <img src='/icons/facebook.svg' alt='mattwritesart on Facebook' />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
