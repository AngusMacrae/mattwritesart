import './App.css';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import art from '../data/art.json';
import { v4 as uuidv4 } from 'uuid';

art.forEach(artwork => (artwork.id = uuidv4()));

function App() {
  return (
    <>
      <Header />
      <main>
        <Gallery art={art} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
