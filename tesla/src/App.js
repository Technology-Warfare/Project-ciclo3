import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import './App.css';
import approval from './Pages/approval';
import Dashboard from './Pages/dashboard';
import home from './Pages/home';
import Login from './Pages/login';
import Registro from './Pages/registro';
import usuarios from './Pages/usuarios';
import vehiculos from './Pages/vehiculos';
import ventas from './Pages/ventas';



function App() {

  return (
    <Auth0Provider
      domain="dev-6cldxko0.us.auth0.com"
      clientId="JNbMdKPOPxy1tOIT8I8niI7O6OPOIbYl"
      redirectUri={'http://localhost:3000/dashboard'}
    >
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
              component={Dashboard} />
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
    </Auth0Provider>
  );
}

export default App;
