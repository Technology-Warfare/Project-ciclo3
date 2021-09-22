import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

import './styles/registro.css';

const Registro = () => {
    return(
        <React.Fragment>
            <div className="main-registro">
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
                            helperText="Por favor digita tu nombre"
                        />
                        <TextField 
                            required 
                            id="filled-basic" 
                            label="Apellidos" 
                            variant="filled" 
                            helperText="Por favor digita tu apellido"
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
                            helperText="Por favor digita tu edad"
                        />
                        <TextField 
                            required 
                            id="filled-basic" 
                            label="celular" 
                            variant="filled" 
                            helperText="Por favor digita tu número de celular"
                        />
                        <TextField 
                            required 
                            id="filled-email-input" 
                            label="Email" 
                            variant="filled" 
                            helperText="Por favor digita tu email"
                        />
                        <div className="descripcion">
                            <p>Datos para la cuenta</p>
                        </div>
                        <TextField 
                            required 
                            id="filled-basic" 
                            label="Usuario" 
                            variant="filled" 
                            helperText="Por favor digita tu usuario"
                        />
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                            helperText="Por favor digita tu contraseña"
                        />
                </Box>
                <div className="boton-registro">
                    <Button variant="contained" color="success">Iniciar sesion</Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Registro;