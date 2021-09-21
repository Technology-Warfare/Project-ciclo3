import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import home from './Pages/home';
import login from './Pages/login';


function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact
            path="/"
            component={home} />
          <Route exact
            path="/login"
            component={login} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
