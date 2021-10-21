import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Button } from '@mui/material';
import PrivateComponent from './PrivateComponent';

import '../Pages/styles/admv.css';
import '../utils/api';
import { obtenerUsuarios } from '../utils/api';
import { nanoid } from 'nanoid';

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

    const [vendedores, setVendedores] = useState([]);
    useEffect(() => {
        const obtenerVendedores = async () =>{
            await obtenerUsuarios(
                (response)=>{
                    console.log("Respuesta usuarios", response);
                    setVendedores(response.data);
                },
                (error)=>{
                    console.error(error);
                }
            );
        }
        obtenerVendedores();
        
    }, []);


    const [obtenerSelect, setObtenerSelect] = useState([]);

    useEffect(() => {
        console.log("obtenerSelect", obtenerSelect);
    }, [obtenerSelect]);

    const [obtenerSelect1, setObtenerSelect1] = useState([]);

    useEffect(() => {
        console.log("obtenerSelect2", obtenerSelect1);
    }, [obtenerSelect1]);


    const [nombreCliente, setNombreCliente] = useState([]);
    const [nombreVendedor, setNombreVendedor] = useState([]);
    const mostrarNombreYApellidoAparte = () => {
        setNombreCliente([obtenerSelect])
        
    }
    const mostrarNombreYApellidoAparte2 = () => {
        setNombreVendedor([obtenerSelect1])
    }

    useEffect(() => {
        console.log("nombreCliente", nombreCliente);
    }, [nombreCliente]);
    useEffect(() => {
        console.log("nombreVendedor", nombreVendedor);
    }, [nombreVendedor]);

    const [busquedaRoll, setBusquedaRoll] = useState('');
    const [busquedaRoll1, setBusquedaRoll1] = useState('');
    const [usuariosFilatrados, setUsuariosFiltrados] = useState(vendedores);
    const [usuariosFilatrados1, setUsuariosFiltrados1] = useState(vendedores);
    useEffect(() => {
        //console.log('busquedaRoll', busquedaRoll);
        //console.log("Lista original Roll", vendedores);
        setUsuariosFiltrados(
            vendedores.filter(elementoRoll => {
                console.log("elemento Roll", elementoRoll);
                return JSON.stringify(elementoRoll).toLowerCase().includes(busquedaRoll.toLowerCase());
            })
        );
        setUsuariosFiltrados1(
            vendedores.filter(elementoRoll => {
                console.log("elemento Roll", elementoRoll);
                return JSON.stringify(elementoRoll).toLowerCase().includes(busquedaRoll1.toLowerCase());
            })
        );
        setBusquedaRoll("cliente");
        setBusquedaRoll1("vendedor");
    }, [busquedaRoll, vendedores, busquedaRoll1]);

    return (

        <PrivateComponent roleList={['administrador', 'vendedor']}>
           <div className="registrar-venta">

            <form onSubmit={handleSubmit} className="formWidth">


                




                <div className="card-group">
                    
                    
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
                                <select onChange={(e) => setObtenerSelect(usuariosFilatrados.filter((u)=>u._id===e.target.value)[0])}
                                value={obtenerSelect._id -1}
                                     className="form-select" id="nombres" onClick={mostrarNombreYApellidoAparte}>
                                    <option>Seleccione un cliente
                                    </option>
                                    {usuariosFilatrados.map((el) => {
                                        return (
                                            <option 
                                            key={nanoid()}
                                            value={el._id} 
                                            >{`${el.nombre} ${el.apellido}`}
                                            </option>
                                        )
                                    })}
                                </select>
                                <label className="form-label" for="nombres">Cliente</label>

                                {nombreCliente.map(el => {
                                    return (
                                        <>
                                        <PrivateComponent roleList={['administrador', 'vendedor']}>
                                            <input name="firstName" 
                                            onChange={handleChange} type="text" aria-label="First name" className="form-control" id="inputName" value={`${el.nombre}`} />

                                            <input name="lastName"
                                            onChange={handleChange} type="text" aria-label="Last name" className="form-control" id="inputLastName" value={`${el.apellido}`} />
                                        </PrivateComponent>
                                            
                                        </>
                                    )
                                })}
                            </div>
                            
                                

                            <div className="form-floating">

                                {nombreCliente.map(el => {
                                    return (
                                        <>
                                            <input name="email" onChange={handleChange} type="text" className="form-control" id="inputEmail" value={`${el.email}`}/>
                                            <label for="inputEmail" className="form-label">Email</label>
                                        </>
                                    )
                                })}
                                
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
                                <select onChange={(e) => setObtenerSelect1(usuariosFilatrados1.filter((u) => u._id === e.target.value)[0])} value={obtenerSelect1._id -1} className="form-select" id="nombres2" onClick={mostrarNombreYApellidoAparte2}>
                                    <option>Seleccione un vendedor
                                    </option>
                                    {usuariosFilatrados1.map((el) => {
                                        return (
                                            <option
                                                key={nanoid()}
                                                value={el._id}
                                            >{`${el.nombre} ${el.apellido}`}
                                            </option>
                                        )
                                    })}
                                </select>
                                <label className="form-label" for="nombres2">Vendedor</label>

                                {nombreVendedor.map(el => {
                                    return (
                                        <>
                                            <input name="fNVendedor" onChange={handleChange} type="text" aria-label="First name" className="form-control" id="inputName" value={`${el.nombre}`} />

                                            <input name="lNVendedor" onChange={handleChange} type="text" aria-label="Last name" className="form-control" id="inputLastName" value={`${el.apellido}`} />
                                        </>
                                    )
                                })}
                            </div>

                           
                            
                            <div className="form-floating">
                                {nombreVendedor.map(el => {
                                    return (
                                        <>
                                            <input name="emailVendedor" onChange={handleChange} type="text" className="form-control" id="inputEmail" value={`${el.email}`} />
                                            <label for="inputEmail" className="form-label">Email</label>
                                        </>
                                    )
                                })}
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
                    

                    
                    
                </div>
            </form>
        </div> 
        </PrivateComponent>
        
    )
}

export default RegistrarVenta
