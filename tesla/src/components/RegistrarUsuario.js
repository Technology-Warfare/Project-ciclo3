import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
      value: 'cedula',
      label: 'Cédula de ciudadanía',
    },
    {
      value: 'pasaporte',
      label: 'Pasaporte',
    },
    {
      value: 'cedula de extranjería',
      label: 'Cédula de extranjería',
    },
    {
      value: 'visa',
      label: 'Visa',
    },
  ];

const RegistrarUsuario = () => {
    /*const [name, setName] = React.useState();
    const [apellido, setApellido] = React.useState();

    const handleChange = (event) => {
        setName(event.target.value);
        setApellido(event.target.value);
    };*/

    const [currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

    return (
        <>
            <div className="registrar">
                <h4>Por favor digite los campos para registrar.</h4>
                <div className="datos">
                    <form>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, mt:3},
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField 
                                required
                                name="nombre"
                                id="outlined-basic" 
                                label="Nombre" 
                                /*value={name}
                                onChange={handleChange} */
                                variant="outlined"
                                type="text" />
                            
                            <TextField 
                                required 
                                name="apellido"
                                id="outlined-basic" 
                                label="Apellido"
                                /*value={apellido}
                                onChange={handleChange} */
                                variant="outlined"
                                type="text" />
                                
                            <TextField
                                required
                                name="edad"
                                id="outlined-number"
                                label="Edad"
                                type="number"
                                min='18'
                                InputProps={{ inputProps: { min: 18} }}
                            />
                            
                            <TextField
                                required
                                name="email"
                                id="outlined-basic" 
                                label="email" 
                                variant="outlined"
                                type="email" />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, mt: 3},
                            }}
                            noValidate
                            autoComplete="off"
                            >
                                <div>
                                    <TextField
                                    required
                                    name="documento"
                                    id="outlined-select-currency"
                                    select
                                    label="Tipo documento"
                                    value={currency}
                                    onChange={handleChange}
                                    helperText="Por favor digita un tipo de documento"
                                    >
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        required
                                        name="numerodocumento"
                                        id="outlined-basic" 
                                        label="Número identidad" 
                                        variant="outlined"
                                        type="number" />
                                </div>
                        </Box>
                        <Button className="button mt-3 mb-5" variant="contained">submit</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegistrarUsuario;
