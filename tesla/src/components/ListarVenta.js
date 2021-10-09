import React, { useState, useEffect } from 'react';
import '../Pages/styles/admv.css';
import '../Pages/styles/ventas.css';
import modelS from "../Pages/img/ModelS/models.jpg";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegistrarVenta from "../components/RegistrarVenta";
import axios from "axios";


const ListarVenta = () => {
    const [ventas, setVentas] = useState([]);
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
        window.location = "/dashboard/ventas";
    };

    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
        window.location = "/dashboard/ventas";
    };


    useEffect
        (
            () => 
            {
                const options = { method: 'GET', url: 'http://localhost:5000/ventas' };

                axios.request(options).then(function (response) {
                    console.log(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
                // Obtener lista de ventas desde el backend
                  
            }, []
        )

    const TablaVentas = ({ listaVentas }) => {
        useEffect(() => {
            console.log("Este es el listado de ventas en el componente de tabla", listaVentas);
        }, [listaVentas])



    return (
        <div>
            
            
               
                    <table>
                        <thead>
                            <tr>
                                <th>idVenta</th>
                                <th>idAutomovil</th>
                                <th>NombreCliente</th>
                                <th>ApellidoCliente</th>
                                <th>EmailCliente</th>
                                <th>CelularCliente</th>
                                <th>NombreVendedor</th>
                                <th>ApellidoVendedor</th>
                                <th>EmailVendedor</th>
                                <th>CelularVendedor</th>
                                <th>PrecioAutomovil</th>
                                <th>EstadoVenta</th>
                                <th>Cantidad</th>
                                <th>Descripcion</th>
                                <th>Observaciones</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                listaVentas.map(
                                    (ventas) => 
                                    {
                                        return (



                                            <tr>
                                                <td>{ventas.idVenta}</td>
                                                <td>{ventas.idAutomovil}</td>
                                                <td>{ventas.NombreCliente}</td>
                                                <td>{ventas.ApellidoCliente}</td>
                                                <td>{ventas.EmailCliente}</td>
                                                <td>{ventas.CelularCliente}</td>
                                                <td>{ventas.NombreVendedor}</td>
                                                <td>{ventas.ApellidoVendedor}</td>
                                                <td>{ventas.EmailVendedor}</td>
                                                <td>{ventas.CelularVendedor}</td>
                                                <td>{ventas.PrecioAutomovil}</td>
                                                <td>{ventas.EstadoVenta}</td>
                                                <td>{ventas.Cantidad}</td>
                                                <td>{ventas.Descripcion}</td>
                                                <td>{ventas.Observaciones}</td>
                                                <td>
                                                    
                                                        
                                                            <button type="button" class="btn btn-success buttonEdit" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">E</button>
                                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div class="modal-dialog ModalDialogEdit">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h5 class="modal-title" id="exampleModalLabel">Editar
                                                                            </h5>
                                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                                            </button>
                                                                        </div>
                                                                        <div class="modal-body">

                                                                            <RegistrarVenta />

                                                                        </div>
                                                                        <div class="modal-footer">
                                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar
                                                                            </button>
                                                                            <button type="button" onClick={handleAceptar} class="btn btn-primary">Guardar
                                                                            </button>
                                                                            <ToastContainer />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                        
                                                            <button type="button" onClick={handleClickOpen} class="btn btn-danger buttonEdit">E
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
                                                                    <Button onClick={handleAceptar}>Aceptar
                                                                    </Button>
                                                                </DialogActions>
                                                            </Dialog>
                                                       

                                                    
                                                </td>


                                            </tr>
                                        );
                                    }
                                )

                             }
                        </tbody>
                    </table>
                

           

            

                        
            {
                listaVentas.map(
                    (ventas) => {


                        return (
                            <>
                                <div className="designMovil">
                                    <div class="box mt-4">
                                        <img src={modelS} alt="img1" />
                                    </div>

                                    <div className="fForm">
                                        <div className="Form">
                                            <div className="cardData">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Referencia
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">Plaid
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
                                                                <label className="lblTit">S
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Cantidad
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">1
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Valor
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label>$45'000.000
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
                                                                <label className="lblTit">23/09/2021
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
                                                                <label className="lblTit">31/12/2021
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">ID Automovil
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">TWM!005
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">ID Cliente
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">C#000004
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>



                                        <div className="Form">
                                            <div className="cardData">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Estado
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">Despacho
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div class="card">
                                                    <div class="card-body">
                                                        <label className="input-group-text">Descripción
                                                        </label>
                                                        <p class="card-text">El cliente quiere el modelo S en color Beige, paneles digitales, interfaz Onion, con acceso a motor de juegos 3D</p>
                                                    </div>
                                                </div>

                                                <div class="card">
                                                    <div class="card-body">
                                                        <label className="input-group-text">Observaciones
                                                        </label>
                                                        <p class="card-text">Entregar al centro de distribución</p>
                                                    </div>
                                                </div>
                                                <div className='mt-4'>
                                                    <div class="card">
                                                        <button type="button" class="btn btn-success buttonEdit" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Editar registro</button>
                                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div class="modal-dialog ModalDialogEdit">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">Editar
                                                                        </h5>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">

                                                                        <RegistrarVenta />

                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar
                                                                        </button>
                                                                        <button type="button" onClick={handleAceptar} class="btn btn-primary">Guardar
                                                                        </button>
                                                                        <ToastContainer />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card mt-2">
                                                        <button type="button" onClick={handleClickOpen} class="btn btn-danger buttonEdit">Eliminar registro
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
                                                                <Button onClick={handleAceptar}>Aceptar
                                                                </Button>
                                                            </DialogActions>
                                                        </Dialog>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                    </div>




                                    <div className="fForm mt-5">
                                        <div className="form">
                                            <div className="tit1">
                                                <div className="lblTit1">
                                                    <span className="input-group-text">Vendedor</span>
                                                </div>
                                                <div>
                                                    <label className="padName">Juan Alberto Jimenez
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="form-floating dat">
                                                    <label className="form-control">Juanji93@gmail.com
                                                    </label>
                                                    <input type="email" className="form-control" id="inputEmail" />
                                                    <label for="inputEmail" className="form-label">Email
                                                    </label>
                                                </div>
                                                <div className="form-floating dat">
                                                    <label className="form-control">3157415468
                                                    </label>
                                                    <input type="text" className="form-control" id="celular" />
                                                    <label for="celular" className="form-label">Celular
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fForm mt-2">
                                        <div className="form">
                                            <div className="tit1">
                                                <div className="lblTit1">
                                                    <span className="input-group-text">Cliente</span>
                                                </div>
                                                <div>
                                                    <label className="padName">Juan Carlos Zambrano
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="form-floating dat">
                                                    <label className="form-control">JuanCZambrano@gmail.com
                                                    </label>
                                                    <input type="email" className="form-control" id="inputEmail" />
                                                    <label for="inputEmail" className="form-label">Email
                                                    </label>
                                                </div>
                                                <div className="form-floating dat">
                                                    <label className="form-control">3183457962
                                                    </label>
                                                    <input type="text" className="form-control" id="celular" />
                                                    <label for="celular" className="form-label">Celular
                                                    </label>
                                                </div>
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
            <TablaVentas listaVentas={ventas} />

        </div>



    )
}



export default ListarVenta;
