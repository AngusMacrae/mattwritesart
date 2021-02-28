import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';
import Home from '../pages/Home';
import ArtGallery from '../pages/ArtGallery';
import ArtDetails from '../pages/ArtDetails';
import Commissions from '../pages/Commissions';
import Contact from '../pages/Contact';
import Buy from '../pages/Buy';
import Thankyou from '../pages/Thankyou';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollMemory />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/art/:slug'>
          <ArtDetails />
        </Route>
        <Route path='/art'>
          <ArtGallery />
        </Route>
        <Route path='/commissions'>
          <Commissions />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/buy/:slug'>
          <Buy />
        </Route>
        <Route path='/thankyou'>
          <Thankyou />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
