import React from 'react'

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
const DatosVehiculo = () => {

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

    return (
        <div>
             <div className="Form imgVenta p-5">
                    <div class="card bg-dark text-white imgAd">
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
                                        <label className="lblTit">Eléctrico
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
                                        <label className="lblTit">Tesla
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
                                        <label className="input-group-text">Generación
                                        </label>
                                    </div>
                                    <div className="lblTit2">
                                        <label>1ra [2017 - 2021]
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
                                        <label className="lblTit">Sedan
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
                                        <label className="lblTit">Long Range
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
                                        <label className="lblTit">190kw (258 cv) Transmisión automática
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
                
                        </ul>
                    </div>
                </div>
            <div>
                <div class="card">
                    <div class="card-body">
                        <label className="input-group-text">Descripción
                            </label>
                        <p class="card-text">190 kw (258 cv) Transmisión automática, deportivo aerodinámico</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <label className="input-group-text">Observaciones
                        </label>
                        <p class="card-text">Modelo para exhibición</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <label className="input-group-text">Cantidad
                            </label>
                        <p class="card-text">250</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <label className="input-group-text">Valor Unitario
                        </label>
                        <p class="card-text">$24'000.000</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <label className="input-group-text">Valor Total
                            </label>
                        <p class="card-text">$ 6.000.000.000</p>
                        </div>
                    </div>
                </div>
            </div>


                

            <div className="fForm">
                <div className="Form">
                    <div className="boxButtons">
                <button type="button" class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Editar registro</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog ModalDialogEdit">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">         
                                </button>
                            </div>
                            <div class="modal-body">

                                <RegistrarVehiculo />


                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" onClick={handleAceptar} class="btn btn-primary">Guardar
                                </button>
                                    <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>


                <button type="button" onClick={handleClickOpen} class="btn btn-danger mt-3">Eliminar registro</button>
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

           


        

    )
}

export default DatosVehiculo
