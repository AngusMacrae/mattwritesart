import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ArtGallery from '../pages/ArtGallery';
import ArtDetails from '../pages/ArtDetails';
import Commissions from '../pages/Commissions';
import Contact from '../pages/Contact';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import art from '../data/art.json';
import './App.css';

export const ArtContext = React.createContext();

function App() {
  return (
    <Router>
      <Header />
      <main>
        <ArtContext.Provider value={art}>
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
          </Switch>
        </ArtContext.Provider>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
