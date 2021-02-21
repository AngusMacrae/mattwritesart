import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Art from '../pages/Art';
import ArtDetails from '../pages/ArtDetails';
import Commissions from '../pages/Commissions';
import Contact from '../pages/Contact';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import art from '../data/art.json';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path='/'>
            <Home art={art} />
          </Route>
          <Route path='/art/:slug'>
            <ArtDetails />
          </Route>
          <Route path='/art'>
            <Art art={art} />
          </Route>
          <Route path='/commissions'>
            <Commissions />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
