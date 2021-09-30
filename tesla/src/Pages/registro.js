import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import './styles/registro.css';
import logo from './img/logo.png';

const Registro = () => {
    const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

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
            <div className="main-registro">
                <div className="main-form">
                    <div className="logo">
                        <img className="logo-main" src={logo} alt="logo" />
                    </div>
                    <h1>Bienvenido!!</h1>
                    <p>Por favor completa los campos que se necesitan para poder crear una cuenta.</p>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: 'fullwidth' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                            <div className="descripcion">
                                <p>Datos personales</p>
                            </div>
                            <TextField 
                                required 
                                id="filled-basic" 
                                label="Nombres" 
                                variant="filled" 
                                helperText="Digíta tu nombre"
                            />
                            <TextField 
                                required 
                                id="filled-basic" 
                                label="Apellidos" 
                                variant="filled" 
                                helperText="Digíta tu apellido"
                            />
                            <TextField
                                required
                                id="filled-number"
                                label="Edad"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                helperText="Digíta tu edad"
                            />
                            <TextField 
                                required 
                                id="filled-basic" 
                                label="celular" 
                                variant="filled" 
                                helperText="Digíta tu número de celular"
                            />
                            <TextField 
                                required 
                                id="filled-email-input" 
                                label="Email" 
                                variant="filled" 
                                helperText="Digíta tu email"
                            />
                            <div className="descripcion">
                                <p>Datos para la cuenta</p>
                            </div>
                            <TextField 
                                required 
                                id="filled-basic" 
                                label="Usuario" 
                                variant="filled" 
                                helperText="Digíta tu usuario"
                            />
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
                    </Box>
                    <div className="terminos">
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ m: 1, position: 'relative' }}>
                                <Fab
                                    aria-label="save"
                                    color="primary"
                                    sx={buttonSx}
                                    onClick={handleButtonClick}
                                    >
                                    {success ? <CheckIcon /> : <SaveIcon />}
                                </Fab>
                                {loading && (
                                <CircularProgress
                                    size={68}
                                    sx={{
                                    color: green[500],
                                    position: 'absolute',
                                    top: -6,
                                    left: -6,
                                    zIndex: 1,
                                    }}
                                />
                                )}
                            </Box>
                            <Box sx={{ m: 1, position: 'relative' }}>
                                <Button
                                    variant="contained"
                                    sx={buttonSx}
                                    disabled={loading}
                                    onClick={handleButtonClick}
                                    >
                                    Accept terms
                                </Button>
                                {loading && (
                                <CircularProgress
                                    size={24}
                                    sx={{
                                    color: green[500],
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',
                                    marginLeft: '-12px',
                                    }}
                                />
                                )}
                            </Box>
                        </Box>
                    </div>
                    <div className="boton-registro">
                        <Button variant="contained" color="success">Crear cuenta</Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Registro;