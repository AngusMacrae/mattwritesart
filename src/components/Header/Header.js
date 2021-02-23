import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(prevState => !prevState);
  }

  return (
    <header className='header'>
      <div className='header__content-container'>
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
              <NavLink to='/' exact onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/art' onClick={toggleMenu}>
                Browse & Buy
              </NavLink>
            </li>
            <li>
              <NavLink to='/commissions' onClick={toggleMenu}>
                Commissions
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' onClick={toggleMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className='header-nav__social-links'>
            <li>
              <a href='https://twitter.com/mattwritesart' target='_blank' rel='noopener noreferrer' title='Twitter'>
                <img src={twitter} alt='mattwritesart Twitter' />
              </a>
            </li>
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
