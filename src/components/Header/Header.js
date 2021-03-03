import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import useOnResize from '../../hooks/useOnResize.js';
import instagram from '../../assets/icons/instagram.svg';
import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen(prevState => !prevState);
  }

  useOnResize(closeMenu);

  return (
    <header className='header'>
      <div className='header__content-container container-wide'>
        <div className='header__top-bar'>
          <NavLink to='/' onClick={menuOpen ? toggleMenu : null} title='Home' className='header-home'>
            <h1>
              matt<span className='deemphasised'>writes</span>art<small className='deemphasised'>.co.uk</small>
            </h1>
          </NavLink>
          <button onClick={toggleMenu} className='header__menu-toggle-btn'>
            <img src={menuOpen ? close : menu} alt='Menu' />
          </button>
        </div>
        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <ul className='header-nav__page-links'>
            <li>
              <NavLink to='/' exact onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/art' onClick={closeMenu}>
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
          <ul className='header-nav__social-links'>
            <li>
              <a href='https://www.instagram.com/mattwritesart/' target='_blank' rel='noopener noreferrer' title='Instagram'>
                <img src={instagram} alt='mattwritesart Instagram' />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
