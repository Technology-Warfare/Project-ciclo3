import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './styles/login.css';

const login = () => {
    return(
        <React.Fragment>
            <div className="main">
                <div className="main-login">
                    <div className="form">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >   
                            <div className="campos">
                            <TextField id="filled-basic" label="Usuario" variant="filled" />
                            </div>
                            <div className="campos">
                            <TextField id="filled-basic" label="contraseña" variant="filled" />
                            </div>
                        </Box>
                        <div className="boton-login">
                            <Button variant="contained" color="success">Iniciar sesion</Button>
                        </div>
                        <div className="registrarse">
                            no tienes cuenta?, registrate ahora
                            <Link to="/registrarse">Registrate aqui</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default login;