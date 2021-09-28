import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import dashboard from './Pages/dashboard';
import home from './Pages/home';
import usuarios from './Pages/usuarios';
import vehiculos from './Pages/vehiculos';
import ventas from './Pages/ventas';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact
            path="/"
            component={home} />
          <Route exact
            path="/dashboard/ventas"
            component={ventas} />
          <Route exact
            path="/dashboard"
            component={dashboard} />
          <Route exact
            path="/dashboard/vehiculos"
            component={vehiculos} />
            <Route exact
            path="/dashboard/usuarios"
            component={usuarios} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
