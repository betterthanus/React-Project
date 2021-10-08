import React from 'react';
import './styles/main.css';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Characters from './pages/RickandMorty/Characters';
import CharacterDetails from './pages/RickandMorty/CharacterDetails';
import Locations from './pages/RickandMorty/Locations';
import LocationDetails from './pages/RickandMorty/LocationDetails';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/characters/:id" component={CharacterDetails}/>
        <Route path="/characters" component={Characters} />
        <Route path="/locations/:id" component={LocationDetails}/>
        <Route path="/locations" component={Locations} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="container home">
      
      <div className="poster">
        <img alt="rickandmorty router" src="https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeJtBpd7gVufNBcVqvz9HPneSuK06oCuSWVIe1rbvL9yoBfZbHbUhjLgU0yv1DoOG8gWtyFUjonoxF132iuRBPNf_LoVM6tKrbKc.png?r=871" />
      </div>
    </div>
  )
}

export default App;
