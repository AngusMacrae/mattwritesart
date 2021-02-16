import './App.css';
import swallow from '../assets/img/swallow.webp';
import email from '../assets/icon/email.svg';
import instagram from '../assets/icon/instagram.svg';

function App() {
  return (
    <main>
      <div class='img-container'>
        <img src={swallow} alt='Swallow' />
      </div>
      <div class='text-container flow'>
        <h1>
          matt<span class='highlight'>writes</span>art
          <span>
            <small>.co.uk</small>
          </span>
        </h1>
        <p>
          <strong>Hi! I'm matt, and I write art.</strong>
        </p>
        <p>I form words into images, exploring the power of negative space and the illusion of distance.</p>
        <p>Website under construction - stay tuned.</p>
        <ul class='social-links'>
          <li>
            <a href='mailto:mattwritesart@gmail.com' target='_blank' rel='noopener noreferrer' title='Email'>
              <img src={email} alt='mattwritesart Email' class='email-icon' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/mattwritesart/' target='_blank' rel='noopener noreferrer' title='Instagram'>
              <img src={instagram} alt='mattwritesart Instagram' />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
