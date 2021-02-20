import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Art from '../pages/Art';
import Commissions from '../pages/Commissions';
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
          <Route path='/art'>
            <Art />
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
