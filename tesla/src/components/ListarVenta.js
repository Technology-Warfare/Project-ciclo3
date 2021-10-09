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

const ventasBackend = [
    {
        //Lista de ventas del backend (Borrar codigo de este archivo)

        idVenta: "TWMV00001",
        idAutomovil: "TmMs001",
        NombreCliente: "Roberto",
        ApellidoCliente: "Jimenez",
        EmailCliente: "Robzen@gmail.com",
        CelularCliente: "3256894575",
        NombreVendedor: "Elon",
        ApellidoVendedor: "Musk",
        EmailVendedor: "Stargate @gmail.com",
        CelularVendedor: "3156598753",
        PrecioAutomovil: "35'000.000",
        EstadoVenta: "Despacho",
        Cantidad: "2",
        Descripcion: "Automovil color Gris, aire acondicionado",
        Observaciones: "El cliente lo paga en cuotas de 24 meses"

    },

    {
        idVenta: "TWMV00002",
        idAutomovil: "TmMs002",
        NombreCliente: "Julia",
        ApellidoCliente: "Robert",
        EmailCliente: "Juli2021@gmail.com",
        CelularCliente: "3131594652",
        NombreVendedor: "Marcos",
        ApellidoVendedor: "Zukaritas",
        EmailVendedor: "markbook@gmail.com",
        CelularVendedor: "3183264578",
        PrecioAutomovil: "50'000.000",
        EstadoVenta: "Ruta",
        Cantidad: "4",
        Descripcion: "Diseño aerodinamico, 5 dias de bateria",
        Observaciones: "Pago por transferencia bancaria"

    },
    {
        idVenta: "TWMV00003",
        idAutomovil: "TmMx002",
        NombreCliente: "Donald",
        ApellidoCliente: "Asange",
        EmailCliente: "Wikitrump@gmail.com",
        CelularCliente: "3143692645",
        NombreVendedor: "Hilari",
        ApellidoVendedor: "Killiguer",
        EmailVendedor: "hillarykill@gmail.com",
        CelularVendedor: "3187564123",
        PrecioAutomovil: "15'000.000",
        EstadoVenta: "Recepcion",
        Cantidad: "1",
        Descripcion: "Paneles solares para carga lenta",
        Observaciones: "Se entrega modelo de exhibicion"

    }
]


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
                // Obtener lista de ventas desde el backend
                setVentas(ventasBackend);
            }, []
        )

    const TablaVentas = ({ listaVentas }) => {
        useEffect(() => {
            console.log("Este es el listado de ventas en el componente de tabla", listaVentas);
        }, [listaVentas])



    return (
        <div>
            
            <div className="designDesktop scrollDivTab">
               
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
                                                <td>ventas.idVenta</td>
                                                <td>ventas.idAutomovil</td>
                                                <td>ventas.NombreCliente</td>
                                                <td>ventas.ApellidoCliente</td>
                                                <td>ventas.EmailCliente</td>
                                                <td>ventas.CelularCliente</td>
                                                <td>ventas.NombreVendedor</td>
                                                <td>ventas.ApellidoVendedor</td>
                                                <td>ventas.EmailVendedor</td>
                                                <td>ventas.CelularVendedor</td>
                                                <td>ventas.PrecioAutomovil</td>
                                                <td>ventas.EstadoVenta</td>
                                                <td>ventas.Cantidad</td>
                                                <td>ventas.Descripcion</td>
                                                <td>ventas.Observaciones</td>
                                                <td>ventas.Acciones</td>


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
