import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Button } from '@mui/material';

import '../Pages/styles/admv.css';

const RegistrarVenta = () => {

    const [venta, setVenta] = useState({
        idVenta:'',
        idAuto:'',
        firstName:'',
        lastName:'',
        email:'',
        celular:'',
        fNVendedor:'',
        lNVendedor:'',
        emailVendedor:'',
        celularVendedor:'',
        precio:'',
        estado:'',
        cantidad:'',
        descripcion:'',
        observacion:''
    })

    const handleChange = (event) => {
        setVenta({
            ...venta,
            [event.target.name]:event.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/ventas/nuevo',
            headers: { 'Content-Type': 'application/json' },
            data:{
                idVenta:venta.idVenta,
                idAuto:venta.idAuto,
                firstName:venta.firstName,
                lastName:venta.lastName,
                email:venta.email,
                celular:venta.celular,
                fNVendedor:venta.fNVendedor,
                lNVendedor:venta.lNVendedor,
                emailVendedor:venta.emailVendedor,
                celularVendedor:venta.celularVendedor,
                precio:venta.precio,
                estado:venta.estado,
                cantidad:venta.cantidad,
                descripcion:venta.descripcion,
                observacion:venta.observacion
            },
        };
        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success('Venta agregada con éxito');
                window.location="/dashboard/ventas";
            })
            .catch(function (error) {
                console.error(error);
                toast.error('Error creando una venta');
            });
    }

    return (
        <div className="registrar-venta">
            <form onSubmit={handleSubmit}>
                <div className="card-group">
                    <div className="card">
                        <div className ="card-body">
                            <span className="input-group-text">ID venta</span>
                            <div className="form-floating">
                                <input onChange={handleChange} name="idVenta" type="text" class="form-control" id="inIdVenta" />
                                <label for="inIdVenta" class="form-label">
                                TWMV
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className ="card-body">
                            <div className="form-floating">
                                <select onChange={handleChange} name="idAuto" className="form-select" id="inIdAutomovil">
                                    <option selected>Seleccione</option>
                                    <option value="TMM1">TMM1</option>
                                    <option value="TMM2">TMM2</option>
                                    <option value="TMM3">TMM3</option>
                                    <option value="TMM4">TMM4</option>
                                    <option value="TMM5">TMM5</option>
                                    <option value="TMM6">TMM6</option>
                                </select>
                                <label className="form-label" for="inIdAutomovil">ID Automovil</label>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Datos cliente</h5>
                            <div className="form-floating">
                                <input name="firstName" onChange={handleChange} type="text" aria-label="First name" className="form-control" id="inputName" />
                                <label for="inputName" className="form-label">Nombres</label>
                            </div>
                            <div className="form-floating">
                                <input name="lastName" onChange={handleChange} type="text" aria-label="Last name" className="form-control" id="inputLastName" />
                                <label for="inputLastName" className="form-label">Apellidos</label>
                            </div>
                            <div className="form-floating">
                                <input name="email" onChange={handleChange} type="email" className="form-control" id="inputEmail" />
                                <label for="inputEmail" className="form-label">Email</label>
                            </div>
                            <div className="form-floating">
                                <input name="celular" onChange={handleChange} type="text" className="form-control" id="celular" />
                                <label for="celular" className="form-label">Celular</label>
                            </div>

                        </div>
                    </div>
                
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Datos Vendedor</h5>
                            <div className="form-floating">
                                <input name="fNVendedor" onChange={handleChange} type="text" aria-label="First name" className="form-control" id="inputName" />
                                <label for="inputName" className="form-label">Nombres</label>
                            </div>
                            <div className="form-floating">
                                <input name="lNVendedor" onChange={handleChange} type="text" aria-label="Last name" className="form-control" id="inputLastName" />
                                <label for="inputLastName" className="form-label">Apellidos</label>
                            </div>
                            <div className="form-floating">
                                <input name="emailVendedor" onChange={handleChange} type="email" className="form-control" id="inputEmail" />
                                <label for="inputEmail" className="form-label">Email</label>
                            </div>
                            <div className="form-floating">
                                <input name="celularVendedor" onChange={handleChange} type="text" className="form-control" id="celular" />
                                <label for="celular" className="form-label">Celular</label>
                            </div>

                        </div>
                    </div>
                </div>

                <h4 className="h4">Detalles de la venta </h4>
                <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                            <div className="form-floating">
                                <input name="precio" onChange={handleChange} type="text" aria-label="First name" className="form-control" id="inputName" />
                                <label for="inputName" className="form-label">Precios $</label>
                            </div>
                            <div className="form-floating">
                                <select name="estado" onChange={handleChange} className="form-select" id="inEstado">
                                    <option selected>Seleccione</option>
                                    <option value="Creacion">Creacion</option>
                                    <option value="Embalaje">Embalaje</option>
                                    <option value="Despacho">Despacho</option>
                                    <option value="Ruta">Ruta</option>
                                    <option value="Ubicación">Ubicación</option>
                                    <option value="Recepción">Recepción</option>
                                </select>
                                <label className="form-label" for="inEstado">Estado Venta</label>
                            </div>
                            <div className="form-floating">
                                <select name="cantidad" onChange={handleChange} className="form-select" id="inIdAutomovil">
                                <option selected>Seleccione</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">mas de 9</option>
                            </select>
                                <label className="form-label" for="inIdAutomovil">Cantidad</label>
                            </div>
                            

                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="form-floating">

                                
                                <textarea name="descripcion" onChange={handleChange} className="form-control TextHeight" id="exampleFormControlTextarea1" rows="3"></textarea>
                                <label for="exampleFormControlTextarea1" className="form-label">Descripcion detallada</label>

                            
                            </div>
                            <div className="form-floating">

                                
                                <textarea name="observacion" onChange={handleChange} className="form-control TextHeight" id="exampleFormControlTextarea2" rows="3"></textarea>
                                <label for="exampleFormControlTextarea2" className="form-label">Observaciones generales</label>                   
                            </div>
            
                        </div>
                    </div>
                    <Button type="submit" className="button mt-3 mb-5" variant="contained">Submit</Button>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={2500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        draggable
                    />
                </div>
            </form>
        </div>
    )
}

export default RegistrarVenta
