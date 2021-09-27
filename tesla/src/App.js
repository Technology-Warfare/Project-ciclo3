import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import home from './Pages/home';
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
            path="/ventas"
            component={ventas} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
