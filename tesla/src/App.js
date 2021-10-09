import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './App.css';
import approval from './Pages/approval';
import dashboard from './Pages/dashboard';
import home from './Pages/home';
import Login from './Pages/login';
import Registro from './Pages/registro';
import usuarios from './Pages/usuarios';
import vehiculos from './Pages/vehiculos';
import ventas from './Pages/ventas';

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" marginTop={"15%"} marginLeft={"50%"} marginRight={"50%"} display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

function App() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (progress === 100) {
        clearInterval(timer);
      } else{
        setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
      }
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <div>
      {progress<100 ?(
        <CircularProgressWithLabel value={progress} />
      ):(
        <>
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
      </BrowserRouter></>
      )}
    </div>
  );
}

export default App;
