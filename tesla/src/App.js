import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import approval from './Pages/approval';
import dashboard from './Pages/dashboard';
import home from './Pages/home';
import Login from './Pages/login';
import Registro from './Pages/registro';
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
          <Route exact
            path="/login"
            component={Login} />
          <Route exact
            path="/registrarse"
            component={Registro} />
          <Route exact
            path="/approval"
            component={approval} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
