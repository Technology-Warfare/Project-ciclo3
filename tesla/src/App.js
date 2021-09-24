import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import home from './Pages/home';
import login from './Pages/login';
import Registro from './Pages/registro';
import ventas from './Pages/ventas';


function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact
            path="/"
            component={home} />
          <Route exact
            path="/login"
            component={login} />
          <Route exact
            path="/registrarse"
            component={Registro} />
          <Route exact
            path="/ventas"
            component={ventas} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
