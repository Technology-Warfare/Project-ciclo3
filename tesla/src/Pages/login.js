import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

import './styles/login.css';

const Login = () => {
    const [values, setValues] = React.useState({
        usuario: '',
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values.password);
        console.log(values.usuario);
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return(
        <React.Fragment>
            <div className="main">
                <div className="main-login">
                    <div className="form">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '98%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >   
                            <div className="campos">
                            <TextField 
                                id="filled-basic" 
                                label="Usuario" 
                                variant="filled" 
                                onChange={handleChange('usuario')}
                            />
                            </div>
                            <div className="campos">
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                    <FilledInput
                                        id="filled-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="center">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                        </Box>
                        <div className="boton-login">
                            <Button variant="contained" color="success">Iniciar sesion</Button>
                        </div>
                        <div className="registrarse">
                            no tienes cuenta?, 
                            <Link to="/registrarse">Registrate aqui</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;