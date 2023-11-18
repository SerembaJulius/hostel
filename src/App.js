import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Search from './pages/Hostels/Hostels';
import Hostels from './pages/Hostels/Hostels';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Navbar from './Components/Navbar/Navbar';

import Olympia from './pages/Hostels/kikoni/olympia/Olympia';
import Olympia from './pages/Hostels/kikoni/jessum/Jessum';
import Olympia from './pages/Hostels/kikoni/mish/Mish';
import Olympia from './pages/Hostels/kikoni/nalika/Nalika';
import Olympia from './pages/Hostels/kikoni/nakiyingi/Nakiyingi';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/" exact>
            <Search />
          </Route>
          <Route path="/hostels" exact>
            <Hostels />
          </Route>
          <Route path="/service" exact>
            <Services />
          </Route>
          <Route path="/olympia" component={Olympia}>
            <Olympia />
          </Route>
          <Route path="/jessum" component={jessum}>
            <Jessum/>
          </Route>
          <Route path="/mish" component={mish}>
            <Mish />
          </Route>
          <Route path="/nalika" component={nalika}>
            <Nalika/>
          </Route>
          <Route path="/nakiyingi" component={nakiyingi}>
            <Nakiyingi />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
