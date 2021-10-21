import React, { useState } from 'react';
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
import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import { UserContext } from './context/user';



function App() {
  const [userData, setUserData] = useState({});

  return (
    <Auth0Provider
      domain="technowarfare.us.auth0.com"
      clientId="A7K9u8XMghdZcxisbP0k2AzUe4i6xoSQ"
      redirectUri={'http://localhost:3000/dashboard'}
      audience='api-autenticacion-technology-warfare'
    >
      <div>
        <UserContext.Provider value={{userData, setUserData}}>
          <BrowserRouter>
          <Switch>
            <Route path={['/dashboard', '/dashboard/ventas', '/dashboard/vehiculos', '/dashboard/usuarios']}>
              <PrivateLayout>
                <Switch>
                  <Route exact
                    path='/dashboard/ventas'
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
                </Switch>
              </PrivateLayout>
            </Route>
            
            <Route path={['/']}>
              <PublicLayout>
                <Route exact
                path="/"
                component={home} />
              </PublicLayout>
            </Route>
            
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
        </UserContext.Provider>
        
      </div>
    </Auth0Provider>
  );
}

export default App;
