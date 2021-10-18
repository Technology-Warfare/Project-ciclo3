import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



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

const ocupacion = [
    {
        value: 'cliente',
        label: 'Cliente',
    },
    {
        value: 'vendedor',
        label: 'Vendedor',
    },
    {
        value: 'administrador',
        label: 'Administrador',
    },
  ];

const RegistrarUsuario = () => {
    const [habilitar, setHabilitar] = useState(false);
    const [currency, setCurrency] = useState('');
    const [rol, setRol] = useState('');
    const [datos, setDatos] = useState({
        nombre:'',
        apellido:'',
        edad:'',
        email:'',
        documento:'',
        numerodocumento:'',
        cargo: ''
    })

    useEffect(() => {
        const validarNombre = datos.nombre.trim() === ''? false:true
        const validarApellido = datos.apellido.trim() === ''? false:true
        const validarEdad = datos.edad.trim() === ''? false:true
        const validarEmail = datos.email.trim() === ''? false:true
        const validarDocumento = datos.documento.trim() === ''? false:true
        const validarNumeroDocumento = datos.numerodocumento.trim() === ''? false:true
        const validarTodos = validarNombre && validarApellido && validarEdad && validarEmail && validarDocumento && validarNumeroDocumento
        setHabilitar(validarTodos)
    }, [datos])

    const handleChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })
        setCurrency(event.target.value);
        setRol(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("nombre: " + datos.nombre + " appellido: " + datos.apellido + " tipo documento: " + datos.documento + " numero: " +
        datos.numerodocumento + " email: "+datos.email+" edad: "+datos.edad);
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/usuarios/nuevo',
            headers: { 'Content-Type': 'application/json' },
            data:{
                nombre : datos.nombre,
                apellido : datos.apellido,
                edad : datos.edad,
                email : datos.email,
                documento : datos.documento,
                numerodocumento : datos.numerodocumento,
                cargo: datos.cargo
            },
        };
        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success('Vehículo agregado con éxito');
                window.location="/dashboard/usuarios";
            })
            .catch(function (error) {
                console.error(error);
                toast.error('Error creando un vehículo');
            });
    }

    return (
        <>
            <div>
                <h4>Por favor digite los campos para registrar.</h4>
                <div className="datos">
                    <form onSubmit={handleSubmit}>
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
                                variant="outlined"
                                onChange={handleChange}
                                type="text" />
                            
                            <TextField 
                                required 
                                name="apellido"
                                id="outlined-basic" 
                                label="Apellido"
                                variant="outlined"
                                onChange={handleChange}
                                type="text" />
                                
                            <TextField
                                required
                                name="edad"
                                id="outlined-number"
                                label="Edad"
                                type="number"
                                min='18'
                                onChange={handleChange}
                                InputProps={{ inputProps: { min: 18} }}
                            />
                            
                            <TextField
                                required
                                name="email"
                                id="outlined-basic" 
                                label="email" 
                                variant="outlined"
                                onChange={handleChange}
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
                                        onChange={handleChange}
                                        type="text" />
                                    <TextField
                                    required
                                    name="cargo"
                                    id="outlined-select"
                                    select
                                    label="Selecciona un rol"
                                    value={rol}
                                    onChange={handleChange}
                                    helperText="Por favor digita un rol"
                                    >
                                        {ocupacion.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                        </Box>
                        {habilitar ? (
                            <Button type="submit" className="button mt-3 mb-5" variant="contained">submit</Button>
                        ):(
                            <Button type="submit" disabled className="button mt-3 mb-5" variant="contained">submit</Button>
                        )}
                        
                        <ToastContainer
                            position="bottom-center"
                            autoClose={2500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            draggable
                        />
                    </form>
                </div>
            </div>
        </>
    )
};

export default RegistrarUsuario;
