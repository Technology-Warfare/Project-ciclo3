import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import modelS from "../Pages/img/ModelS/models.jpg";
import RegistrarVehiculo from "../components/RegistrarVehiculo";
//import { tableRowClasses } from '@mui/material';
import { Link } from 'react-router-dom'

const vehiculosBackend = [
    //Lista de vehiculos del backend (Borrar codigo de este archivo)
    {
        Tipo: "Eléctrico",
        Marca: "Tesla",
        Modelo: "S",
        Generacion: "1ra [2012 - 2020]",
        Serie: "Liftbek",
        Equipamento: "Model S",
        Modificacion: "60 (306 cv)",
        FechaCompra: "23/09/2021",
        FechaDePago: "31/12/2021",
        Descripcion: "Transmisión automática, deportivo aerodinámico",
        Observaciones: "Modelo para exhibición",
        Cantidad: "250",
        ValorUnitario: "$24'000.000",
        ValorTotal: "$6.000.000.000"
        
        
    },
    {
        Tipo: "Eléctrico",
        Marca: "Tesla",
        Modelo: "X",
        Generacion: "1ra [2015 - 2021]",
        Serie: "Crossover",
        Equipamento: "Model X",
        Modificacion: "AT 4WD (333 cv)",
        FechaCompra: "23/09/2021",
        FechaDePago: "31/12/2021",
        Descripcion: "Transmisión automática, deportivo aerodinámico",
        Observaciones: "Modelo para exhibición",
        Cantidad: "250",
        ValorUnitario: "$24'000.000",
        ValorTotal:  "$6.000.000.000"
        
        
    },
    {
        Tipo: "Eléctrico",
        Marca: "Tesla",
        Modelo: "Y",
        Generacion: "1ra generación",
        Serie: "Crossover",
        Equipamento: "Model Y",
        Modificacion: "AT (271 cv)",
        FechaCompra: "23/09/2021",
        FechaDePago: "31/12/2021",
        Descripcion: "Transmisión automática, deportivo aerodinámico",
        Observaciones: "Modelo para exhibición",
        Cantidad: "250",
        ValorUnitario: "$24'000.000",
        ValorTotal: "$6.000.000.000"
    
        
    }
]


const DatosVehiculo = () => {
    const [vehiculos, setVehiculos] = useState([]);
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleAceptar = () => {
        setOpen(false);
        toast.success('Operación exitosa.', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        window.location = "/dashboard/vehiculos";
    };

    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
        window.location = "/dashboard/vehiculos";
    };


    useEffect(() => {
        // Obtener lista de vehiculos desde el fronted
        setVehiculos(vehiculosBackend);        
    }, [])

    const TablaVehiculos = ({ listaVehiculos }) => {
        useEffect(() => {
            console.log("Este es el listado de vehiculos en el componente de tabla", listaVehiculos);
        }, [listaVehiculos])

 

        return (
            
            <div>    
                <div className="designDesktop">
                    <table>
                        <thead>
                            <th>Tipo</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Generación</th>
                            <th>Serie</th>
                            <th>Equipamento</th>
                            <th>Modificación</th>
                            <th>Fecha compra</th>
                            <th>Fecha de pago</th>
                            <th>Descripción</th>
                            <th>Observaciones</th>
                            <th>Cantidad</th>
                            <th>Vr Unitario</th>
                            <th>Vr Total</th>
                            <th>Actividad</th>
                        </thead>
                    
            {listaVehiculos.map((vehiculos) =>{
             

                return (
                    <>
                    
                        <tbody>
                            <td>{vehiculos.Tipo}</td>
                            <td>{vehiculos.Marca}</td>
                            <td>{vehiculos.Modelo}</td>
                            <td>{vehiculos.Generacion}</td>
                            <td>{vehiculos.Serie}</td>
                            <td>{vehiculos.Equipamento}</td>
                            <td>{vehiculos.Modificacion}</td>
                            <td>{vehiculos.FechaCompra}</td>
                            <td>{vehiculos.FechaDePago}</td>
                            <td>{vehiculos.Descripcion}</td>
                            <td>{vehiculos.Observaciones}</td>
                            <td>{vehiculos.Cantidad}</td>
                            <td>{vehiculos.ValorUnitario}</td>
                            <td>{vehiculos.ValorTotal}</td>
                            <td>
                                <div className="boxButtons">
                                    <button type="button mr-3" className="btn btn-success mt-3 mx-4" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">E</button>
                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog ModalDialogEdit">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Editar</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                    </button>
                                                </div>
                                                <div className="modal-body">

                                                            <RegistrarVehiculo />


                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar
                                                    </button>
                                                    <button type="button" onClick={handleAceptar} className="btn btn-primary">Guardar
                                                    </button>
                                                    <ToastContainer />
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <button type="button" onClick={handleClickOpen} className="btn btn-danger mt-3">E
                                    </button>
                                    <Dialog
                                        open={open}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={handleAceptar}
                                        aria-describedby="alert-dialog-slide-description">
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-slide-description">
                                                 Estas seguro que deseas realizar esta acción, luego no podrás
                                                        recuperar lo perdido.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancelar
                                            </Button>
                                            <Button onClick={handleAceptar}>Aceptar</Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>   
                            </td>
                        </tbody>
                        



                    </>

                );  
                
            })}
            </table>
                </div>
                  

                {listaVehiculos.map((vehiculos) => {


                    return (
                        <>
                            <div className="designMovil">

                                <div className="Form imgVenta p-5">
                                    <div className="card bg-dark text-white imgAd">
                                        <img src={modelS} alt="img1" />
                                    </div>
                                </div>
                                <div className="fForm">
                                    <div className="Form">
                                        <div className="cardData">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                    <div className="tit">
                                                        <div className="lblTit1">
                                                            <label className="input-group-text">Tipo
                                                            </label>
                                                        </div>
                                                        <div className="lblTit2">
                                                            <label className="lblTit">{vehiculos.Tipo}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="tit">
                                                        <div className="lblTit1">
                                                            <label className="input-group-text">Marca
                                                            </label>
                                                        </div>
                                                        <div className="lblTit2">
                                                            <label className="lblTit">{vehiculos.Marca}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="tit">
                                                        <div className="lblTit1">
                                                            <label className="input-group-text">Modelo
                                                            </label>
                                                        </div>
                                                        <div className="lblTit2">
                                                            <label className="lblTit">{vehiculos.Modelo}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="tit">
                                                        <div className="lblTit1">
                                                            <label className="input-group-text">Generación
                                                            </label>
                                                        </div>
                                                        <div className="lblTit2">
                                                            <label>{vehiculos.Generacion}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="list-group-item">
                                                    <div className="tit">
                                                        <div className="lblTit1">
                                                            <label className="input-group-text">Serie
                                                            </label>
                                                        </div>
                                                        <div className="lblTit2">
                                                            <label className="lblTit">{vehiculos.Serie}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="list-group-item">
                                                    <div className="tit">
                                                        <div className="lblTit1">
                                                            <label className="input-group-text">Equipamento
                                                            </label>
                                                        </div>
                                                        <div className="lblTit2">
                                                            <label className="lblTit">{vehiculos.Equipamento}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="list-group-item">
                                                    <div className="tit">
                                                        <div className="">
                                                            <label className="input-group-text">Modificación
                                                            </label>
                                                        </div>
                                                        <div className="">
                                                            <label className="lblTit">{vehiculos.Modificacion}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="tit">
                                                        <div className="lblTit1">
                                                            <label className="input-group-text">Fecha compra
                                                            </label>
                                                        </div>
                                                        <div className="lblTit2">
                                                            <label className="lblTit">{vehiculos.FechaCompra}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="list-group-item">
                                                    <div className="tit">
                                                        <div className="lblTit1">
                                                            <label className="input-group-text">Fecha de pago
                                                            </label>
                                                        </div>
                                                        <div className="lblTit2">
                                                            <label className="lblTit">{vehiculos.FechaDePago}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="card mt-4">
                                            <div className="card-body">
                                                <label className="input-group-text">Descripción
                                                </label>
                                                <p className="card-text">{vehiculos.Descripcion}</p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <label className="input-group-text">Observaciones
                                                </label>
                                                <p className="card-text">{vehiculos.Observaciones}</p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <label className="input-group-text">Cantidad
                                                </label>
                                                <p className="card-text">{vehiculos.Cantidad}</p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <label className="input-group-text">Valor Unitario
                                                </label>
                                                <p className="card-text">{vehiculos.ValorUnitario}</p>
                                            </div>
                                        </div>
                                        <div className="card mt-1 border border-2 ">
                                            <div className="card-body">
                                                <label className="input-group-text">Valor Total
                                                </label>
                                                <p className="card-text">{vehiculos.ValorTotal}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="fForm">
                                    <div className="Form">
                                        <div className="boxButtons">
                                            <button type="button mr-3" className="btn btn-success mt-3 mx-4" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Editar registro</button>
                                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog ModalDialogEdit">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Editar</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">

                                                            <RegistrarVehiculo />


                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                            <button type="button" onClick={handleAceptar} className="btn btn-primary">Guardar
                                                            </button>
                                                            <ToastContainer />
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>


                                            <button type="button" onClick={handleClickOpen} className="btn btn-danger mt-3">Eliminar registro</button>
                                            <Dialog
                                                open={open}
                                                TransitionComponent={Transition}
                                                keepMounted
                                                onClose={handleAceptar}
                                                aria-describedby="alert-dialog-slide-description">
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-slide-description">
                                                        Estas seguro que deseas realizar esta acción, luego no podrás
                                                        recuperar lo perdido.
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleClose}>Cancelar</Button>
                                                    <Button onClick={handleAceptar}>Aceptar</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            
            </div>
        );

    };

    return (

        <div>
            <TablaVehiculos listaVehiculos={vehiculos} />

        </div>

           


        

    )
}

export default DatosVehiculo
