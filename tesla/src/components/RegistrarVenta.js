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
            <div className="form">
                <div class="input-group mb-3">
                    <div className="input-group">
                        <span className="input-group-text">ID venta</span>
                        <div className="form-floating">
                            <input onChange={handleChange} name="idVenta" type="text" class="form-control" id="inIdVenta" />
                            <label for="inIdVenta" class="form-label">TWMV
                            </label>
                        </div>
                        <label className="input-group-text" for="inIdAutomovil">ID Automovil</label>
                        <select onChange={handleChange} name="idAuto" className="form-select" id="inIdAutomovil">
                            <option selected>Seleccione</option>
                            <option value="TMM1">TMM1</option>
                            <option value="TMM2">TMM2</option>
                            <option value="TMM3">TMM3</option>
                            <option value="TMM4">TMM4</option>
                            <option value="TMM5">TMM5</option>
                            <option value="TMM6">TMM6</option>
                        </select>
                       
                    </div>
                </div>
            </div>
            <div className="fForm">
                <div className="form">
                    <h4 className="h4">Datos del cliente </h4>
                    <div className="input-group">
                        <span className="input-group-text">Nombres y apellidos</span>
                        <input onChange={handleChange} name="firstName" type="text" aria-label="First name" className="form-control" />
                        <input onChange={handleChange} name="lastName" type="text" aria-label="Last name" className="form-control" />
                    </div>
                    <div className="input-group">
                        <div className="form-floating dat">
                            <input onChange={handleChange} name="email" type="email" className="form-control" id="inputEmail" />
                            <label for="inputEmail" className="form-label">Email</label>
                        </div>
                        <div className="form-floating dat">
                            <input onChange={handleChange} name="celular" type="text" className="form-control" id="celular" />
                            <label for="celular" className="form-label">Celular</label>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <h4 className="h4">Datos del Vendedor </h4>
                    <div className="input-group">
                        <span className="input-group-text">Nombres y apellidos</span>
                        <input onChange={handleChange} name="fNVendedor" type="text" aria-label="First name" class="form-control" />
                        <input onChange={handleChange} name="lNVendedor" type="text" aria-label="Last name" class="form-control" />
                    </div>
                    <div className="input-group">
                        <div className="form-floating dat">
                            <input onChange={handleChange} name="emailVendedor" type="email" className="form-control" id="inputEmail2" />
                            <label for="inputEmail2" className="form-label">Email</label>
                        </div>
                        <div className="form-floating dat">
                            <input onChange={handleChange} name="celularVendedor" type="text" className="form-control" id="celular2" />
                            <label for="celular2" className="form-label">Celular</label>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="h4">Detalles de la venta </h4>
            <div className="fForm">
                <div className="form">
                    <div class="input-group mb-3">
                        <label className="input-group-text" for="inIdVenta">Precio $</label>
                        <input onChange={handleChange} name="precio" type="text" class="form-control" id="inIdVenta" />
                    </div>
                </div>
                <div className="form">
                    <div className="input-group flex-nowrap">
                        <label className="input-group-text" for="inEstado">Estado Venta</label>
                        <select onChange={handleChange} name="estado" className="form-select" id="inEstado">
                            <option selected>Seleccione</option>
                            <option value="Creacion">Creacion</option>
                            <option value="Embalaje">Embalaje</option>
                            <option value="Despacho">Despacho</option>
                            <option value="Ruta">Ruta</option>
                            <option value="Ubicación">Ubicación</option>
                            <option value="Recepción">Recepción</option>
                        </select>
                    </div>
                </div>
                <div className="form">
                    <div className="input-group flex-nowrap">
                        <label className="input-group-text" for="inIdAutomovil">Cantidad</label>
                        <select onChange={handleChange} name="cantidad" className="form-select" id="inIdAutomovil">
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
                    </div>
                </div>
            </div>
            <div className="fForm">
                <div className="form">
                    <label for="exampleFormControlTextarea1" className="form-label">Descripcion detallada</label>
                    <textarea onChange={handleChange} name="descripcion" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form">
                    <label for="exampleFormControlTextarea1" className="form-label">Observaciones generales</label>
                    <textarea onChange={handleChange} name="observacion" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
