import '../Pages/styles/vehiculos.css';
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
import axios from "axios";



const ListarVehiculos = () => 
{
    const [vehiculos, setVehiculos] = useState([]);
    const Transition = React.forwardRef
    (
        function Transition(props, ref) 
        {
            return <Slide direction="up" ref={ref} {...props} />;
        }
    );

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => 
    {
        setOpen(true);
    };

    const handleAceptar = () => 
    {
        setOpen(false);
        toast.success
        (
            'Operación exitosa.', 
            {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        );
        
        window.location = "/dashboard/vehiculos";
    };

    const handleClose = (e) => 
    {
        e.preventDefault();
        setOpen(false);
        window.location = "/dashboard/vehiculos";
    };


    useEffect
        (
            () => 
            {
                const options = { method: 'GET', url: 'http://localhost:5000/vehiculos' };

                axios.request(options).then(function (response) {
                    setVehiculos(response.data);
                    console.log(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
                // Obtener lista de vehiculos desde el backend
                setVehiculos([]);
            }, []
        )

    const TablaVehiculos = ({ listaVehiculos }) => {
        useEffect(() => 
        {
            console.log("Este es el listado de vehiculos en el componente de tabla", listaVehiculos);
        }, [listaVehiculos])


    return (
        <div>
            <div className="designDesktop">
                <table>
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Generación</th>
                            <th>Serie</th>
                            <th>Equipamento</th>
                            <th>Modificación</th>
                            <th>Descripción</th>
                            <th>Observaciones</th>
                            <th>Actividad</th>
                        </tr>
                    </thead>
                    <tbody>

                    { 
                        listaVehiculos.map(
                            (vehiculos) => 
                            {
                                return (
                                    <tr>
                                        <td>{vehiculos.marca}</td>
                                        <td>{vehiculos.modelo}</td>
                                        <td>{vehiculos.generacion}</td>
                                        <td>{vehiculos.serie}</td>
                                        <td>{vehiculos.equipamiento}</td>
                                        <td>{vehiculos.modificacion}</td>
                                        <td>{vehiculos.descripcion}</td>
                                        <td>{vehiculos.observaciones}</td>
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
                                                            Estas seguro que deseas realizar esta acción, luego no podrás recuperar lo perdido.
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
                                    </tr>
                                );

                            }
                        )
                    }
                    </tbody>

                </table>
            </div>


            {
                listaVehiculos.map(
                    (vehiculos) => 
                    {


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
                                                                <label className="input-group-text">Marca
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">{vehiculos.marca}
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
                                                                <label className="lblTit">{vehiculos.modelo}
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
                                                                <label>{vehiculos.generacion}
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
                                                                <label className="lblTit">{vehiculos.serie}
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
                                                                <label className="lblTit">{vehiculos.equipamiento}
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
                                                                <label className="lblTit">{vehiculos.modificacion}
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
                                                    <p className="card-text">{vehiculos.descripcion}</p>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-body">
                                                    <label className="input-group-text">Observaciones
                                                    </label>
                                                    <p className="card-text">{vehiculos.observaciones}</p>
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
                    }
                )
            }



            
        </div>
    );
};
    return (

        <div>
            <TablaVehiculos listaVehiculos={vehiculos} />

        </div>






    )
}


export default ListarVehiculos;
