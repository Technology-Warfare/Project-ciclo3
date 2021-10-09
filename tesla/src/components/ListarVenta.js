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
                    setVentas(response.data);
                    console.log(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
                // Obtener lista de ventas desde el backend
                setVentas([]);
            }, []
        )

    const TablaVentas = ({ listaVentas }) => {
        useEffect(() => {
            console.log("Este es el listado de ventas en el componente de tabla", listaVentas);
        }, [listaVentas])



    return (
        <div>
            
            <div className="scrollDivTab designDesktopVt">
               
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
                                                <td>{ventas.idAuto}</td>
                                                <td>{ventas.firstName}</td>
                                                <td>{ventas.lastName}</td>
                                                <td>{ventas.email}</td>
                                                <td>{ventas.celular}</td>
                                                <td>{ventas.fNVendedor}</td>
                                                <td>{ventas.lNVendedor}</td>
                                                <td>{ventas.emailVendedor}</td>
                                                <td>{ventas.celularVendedor}</td>
                                                <td>{ventas.precio}</td>
                                                <td>{ventas.estado}</td>
                                                <td>{ventas.cantidad}</td>
                                                <td>{ventas.descripcion}</td>
                                                <td>{ventas.observacion}</td>
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
            </div>

           

            

                        
            {
                listaVentas.map(
                    (ventas) => {


                        return (
                            <>
                                <div className="designMovil">

                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                        <div class="col">
                                            <div class="card">
                                                <img src={modelS} alt="img1" />
                                               
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class ="card-body">
                                                    <div className="tit">
                                                        <div className="lblTit1">
                                                            <label className="input-group-text">Id Venta
                                                            </label>
                                                        </div>
                                                        <div className="lblTit2">
                                                            <label className="lblTit">{ventas.idVenta}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class ="card-body">
                                                    <div className="tit">
                                                        <div className="lblTit1">
                                                            <label className="input-group-text">Cantidad
                                                            </label>
                                                        </div>
                                                        <div className="lblTit2">
                                                            <label className="lblTit">{ventas.cantidad}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class ="card-body">
                                                    <div className="tit">
                                                        <div className="lblTit1">
                                                            <label className="input-group-text">Valor
                                                            </label>
                                                        </div>
                                                        <div className="lblTit2">
                                                            <label>{ventas.precio}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div className="tit">
                                                        <div className="lblTit1">
                                                            <label className="input-group-text">ID Automovil
                                                            </label>
                                                        </div>
                                                        <div className="lblTit2">
                                                            <label className="lblTit">{ventas.idAuto}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div className="tit">
                                                        <div className="lblTit1">
                                                            <label className="input-group-text">Estado
                                                            </label>
                                                        </div>
                                                        <div className="lblTit2">
                                                            <label className="lblTit">{ventas.estado}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <label className="input-group-text">Descripción
                                                    </label>
                                                    <p class="card-text">{ventas.descripcion}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <label className="input-group-text">Observaciones
                                                    </label>
                                                    <p class="card-text">{ventas.observacion}</p>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div className="tit1">
                                                        <div className="lblTit1">
                                                            <span className="input-group-text">Vendedor</span>
                                                        </div>
                                                        <div>
                                                            <label className="padName">{ventas.fNVendedor} {ventas.lNVendedor}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div className="form-floating">
                                                        <label className="form-control">{ventas.emailVendedor}
                                                        </label>
                                                        <input type="email" className="form-control" id="inputEmail" />
                                                        <label for="inputEmail" className="form-label">Email
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div className="form-floating">
                                                        <label className="form-control">{ventas.celularVendedor}
                                                        </label>
                                                        <input type="text" className="form-control" id="celular" />
                                                        <label for="celular" className="form-label">Celular
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div className="tit1">
                                                        <div className="lblTit1">
                                                            <span className="input-group-text">Cliente</span>
                                                        </div>
                                                        <div>
                                                            <label className="padName">{ventas.firstName} {ventas.lastName}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div className="form-floating">
                                                        <label className="form-control">{ventas.email}
                                                        </label>
                                                        <input type="email" className="form-control" id="inputEmail" />
                                                        <label for="inputEmail" className="form-label">Email
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div className="form-floating">
                                                        <label className="form-control">{ventas.celular}
                                                        </label>
                                                        <input type="text" className="form-control" id="celular" />
                                                        <label for="celular" className="form-label">Celular
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body">
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
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body">
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
