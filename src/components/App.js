import './App.css';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import art from '../data/art.json';

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
