import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Hostels from './pages/Hostels/Hostels';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Navbar from './Components/Navbar/Navbar';

import Olympia from './pages/Hostels/kikoni/olympia/Olympia';
import Jessum from './pages/Hostels/kikoni/jessum/Jessum';
import Mish from './pages/Hostels/kikoni/mish/Mish';
import Nalika from './pages/Hostels/kikoni/nalika/Nalika';
import Nakiyingi from './pages/Hostels/kikoni/nakiyingi/Nakiyingi';
import Prince from './pages/Hostels/kikoni/prince/Prince';
import Muhika from './pages/Hostels/kikoni/muhika/Muhika';
import JJ from './pages/Hostels/kikoni/jj/JJ';
import Castellvile from './pages/Hostels/kikoni/castellvile/Castellvile';
import Apex from './pages/Hostels/kikoni/apex/Apex';
import Akwata_empola from './pages/Hostels/kikoni/akwata_empola/Akwata_empola';
import Aryan from './pages/Hostels/kikoni/aryan/Aryan';
import Bascon from './pages/Hostels/kikoni/bascon/Bascon';
import Clibas from './pages/Hostels/kikoni/clibas/Clibas';
import Daglousvilla from './pages/Hostels/kikoni/daglousvilla/Daglousvilla';
import Dreamworld from './pages/Hostels/kikoni/dreamworld/Dreamworld';
import GardenCourts from './pages/Hostels/kikoni/garden_courts/Garden_courts';
import GodIsAble from './pages/Hostels/kikoni/godIsAble/GodIsAble';

import Julian from './pages/Hostels/kikoni/julian/Julian';
import Kare from './pages/Hostels/kikoni/kare/Kare';
import Khan from './pages/Hostels/kikoni/khan/Khan';
import Frama from './pages/Hostels/kikoni/frama/Frama';
import Edith from './pages/Hostels/kikoni/edith/Edith';
import Mwesigwa from './pages/Hostels/kikoni/mwesigwa/Mwesigwa';
import Sunways from './pages/Hostels/kikoni/sunways/Sunways';


import Aryan1 from './pages/Hostels/wandegeya/aryan1/Aryan1';
import Nana from './pages/Hostels/wandegeya/nana/Nana';
import Bryted_girls from './pages/Hostels/wandegeya/bryted_girls/Bryted_girls';

import Helican from './pages/Hostels/kikumikikumi/helican/Helican';
import Katende from './pages/Hostels/kikumikikumi/katende/Katende';
import Mariam from './pages/Hostels/kikumikikumi/mariam/Mariam';
import Mulago_view from './pages/Hostels/kikumikikumi/mulago_view/Mulago_view';
import Zoe from './pages/Hostels/kikumikikumi/zoe/Zoe';





const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
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
        
          <Route path="/mish" component={Mish}>
            <Mish />
          </Route>
          <Route path="/nalika" component={Nalika}>
            <Nalika/>
          </Route>
          <Route path="/nakiyingi" component={Nakiyingi}>
            <Nakiyingi />
          </Route>
          <Route path="/akwata_empola" component={Akwata_empola}>
            <Akwata_empola />
          </Route>
          <Route path="/apex" component={Apex}>
            <Apex />
          </Route>
          <Route path="/aryan" component={Aryan}>
            <Aryan />
          </Route>
          <Route path="/bascon" component={Bascon}>
            <Bascon />
          </Route>
          <Route path="/castellvile" component={Castellvile}>
            <Castellvile />
          </Route>
          <Route path="/clibas" component={Clibas}>
            <Clibas />
          </Route>
          <Route path="/daglousvilla" component={Daglousvilla}>
            <Daglousvilla />
          </Route>
          <Route path="/dreamworld" component={Dreamworld}>
            <Dreamworld />
          </Route>
          <Route path="/edith" component={Edith}>
            <Edith />
          </Route>
          <Route path="/frama" component={Frama}>
            <Frama />
          </Route>
          <Route path="/garden_courts" component={GardenCourts}>
            <GardenCourts />
          </Route>
          <Route path="/god_is_able" component={GodIsAble}>
            <GodIsAble />
          </Route>
          <Route path="/jessum" component={Jessum}>
            <Jessum />
          </Route>
          <Route path="/jj" component={JJ}>
            <JJ />
          </Route>
          <Route path="/julian" component={Julian}>
            <Julian />
          </Route>
          <Route path="/kare" component={Kare}>
            <Kare />
          </Route>
          <Route path="/khan" component={Khan}>
            <Khan />
          </Route>
          <Route path="/muhika" component={Muhika}>
            <Muhika />
          </Route>
          <Route path="/mweisgwa" component={Mwesigwa}>
            <Mwesigwa />
          </Route>
          <Route path="/prince" component={Prince}>
            <Prince />
          </Route>
          <Route path="/sunways" component={Sunways}>
            <Sunways />
          </Route>
          <Route path="/helican" component={Helican}>
            <Helican />
          </Route>
          <Route path="/katende" component={Katende}>
            <Katende />
          </Route>
          <Route path="/mariam" component={Mariam}>
            <Mariam />
          </Route>
          <Route path="/mulago_view" component={Mulago_view}>
            <Mulago_view />
          </Route>
          <Route path="/zoe" component={Zoe}>
            <Zoe />
          </Route>
          <Route path="/aryan1" component={Aryan1}>
            <Aryan1 />
          </Route>
          <Route path="/bryted_girls" component={Bryted_girls}>
            <Bryted_girls />
          </Route>
          <Route path="/nana" component={Nana}>
            <Nana />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
