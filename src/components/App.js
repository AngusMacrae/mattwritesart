import './App.css';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import art from '../data/art.json';
import { v4 as uuidv4 } from 'uuid';

art.forEach(artwork => (artwork.id = uuidv4()));

function App() {
  return (
    <>
      <Header />
      <main>
        <Gallery art={art} />
      </main>
    </>
  );
}

export default App;
