import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const RegistrarUsuario = () => {
    /*const [name, setName] = React.useState();
    const [apellido, setApellido] = React.useState();

    const handleChange = (event) => {
        setName(event.target.value);
        setApellido(event.target.value);
    };*/

    return (
        <>
            <div className="registrar">
                <h4>Por favor digite los campos para registrar.</h4>
                <div className="datos">
                    <form>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, mt:3, width: '35%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField 
                                required 
                                id="outlined-basic" 
                                label="Nombre" 
                                /*value={name}
                                onChange={handleChange} */
                                variant="outlined"
                                type="text" />
                            
                            <TextField 
                                required 
                                id="outlined-basic" 
                                label="Apellido"
                                /*value={apellido}
                                onChange={handleChange} */
                                variant="outlined"
                                type="text" />
                                
                            <TextField
                                required
                                id="outlined-number"
                                label="Edad"
                                type="number"
                                min='18'
                                InputProps={{ inputProps: { min: 18} }}
                            />
                            
                            <TextField
                                required
                                id="outlined-basic" 
                                label="email" 
                                variant="outlined"
                                type="email" />
                        </Box>
                        <Button variant="contained">submit</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegistrarUsuario;
