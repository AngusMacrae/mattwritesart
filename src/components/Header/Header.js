import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';
import useToggle from '../../hooks/useToggle';
import useOnResize from '../../hooks/useOnResize';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';
import logo from '../../assets/logo/mwa-logo.svg';

export default function Header() {
  const { setSavedFilters } = useContext(FilterContext);
  const [menuOpen, , closeMenu, toggleMenu] = useToggle(false);
  useOnResize(closeMenu);

  return (
    <header className='header'>
      <div className='header__content container-wide'>
        <div className='header__top-bar'>
          <NavLink to='/' onClick={closeMenu} title='Home' className='header-home'>
            <img src={logo} alt='' />
            <h1>
              matt<span className='deemphasised'>writes</span>art<small className='deemphasised'>.co.uk</small>
            </h1>
          </NavLink>
          <button onClick={toggleMenu} className='header__menu-toggle-btn'>
            <img src={menuOpen ? close : menu} alt='Menu' />
          </button>
        </div>
        <nav className={menuOpen ? 'active' : ''}>
          <ul className='nav__page-links'>
            <li className='nav__home'>
              <NavLink to='/' exact onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/art'
                onClick={() => {
                  closeMenu();
                  setSavedFilters({});
                }}
              >
                Browse & Buy
              </NavLink>
            </li>
            <li>
              <NavLink to='/commissions' onClick={closeMenu}>
                Commissions
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className='nav__social-links'>
            <li>
              <a href='https://www.instagram.com/mattwritesart/' target='_blank' rel='noopener noreferrer' title='Instagram'>
                <img src={instagram} alt='mattwritesart on Instagram' />
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/mattwritesart' target='_blank' rel='noopener noreferrer' title='Facebook'>
                <img src={facebook} alt='mattwritesart on Facebook' />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
