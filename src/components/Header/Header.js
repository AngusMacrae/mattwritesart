import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__content-container'>
        <a href='/' title='mattwritesart' className='header-home'>
          <h1>
            matt<span className='deemphasised'>writes</span>art<small className='deemphasised'>.co.uk</small>
          </h1>
        </a>
        <nav className='header-nav'>
          <ul className='header-nav__page-links'>
            {/* <li>
              <a href=''>Work</a>
            </li> */}
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Contact</a>
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
