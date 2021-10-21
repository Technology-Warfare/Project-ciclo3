import React, { useState, useEffect } from 'react';
import '../Pages/styles/admv.css';
import '../Pages/styles/ventas.css';
import modelS from "../Pages/img/ModelS/models.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { nanoid } from 'nanoid';
import { Tooltip } from '@material-ui/core';
import { Dialog } from '@material-ui/core'; 
import { obtenerVentas } from '../utils/api';
import { getToken } from '../utils/api';
import PrivateComponent from './PrivateComponent';





const ListarVenta = () => {
    const [ventas, setVentas] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchVentas = async () => {
            setLoading(true);
            await obtenerVentas(
              (response) => {
                console.log('la respuesta que se recibio fue', response);
                setVentas(response.data);
                setEjecutarConsulta(false);
                setLoading(false);
              },
              (error) => {
                console.error('Salio un error:', error);
                setLoading(false);
              }
            );
          };
          console.log('consulta', ejecutarConsulta);
          if (ejecutarConsulta) {
            fetchVentas();
          }
        }, [ejecutarConsulta]);
      
        useEffect(() => {
          //obtener lista de vehículos desde el backend
            setEjecutarConsulta(true);
        }, []);

    return (

        <div>
            <TablaVentas loading={loading} listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta} />
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



    )

}
const TablaVentas = ({ loading, listaVentas, setEjecutarConsulta }) => {
    const [busqueda, setBusqueda] = useState('');
    const [ventasFilatradas, setVentasFiltradas] = useState(listaVentas);
    useEffect(() => {
        console.log('busqueda', busqueda);
        console.log("Lista original", listaVentas);
        setVentasFiltradas(
            listaVentas.filter(elemento=>{
                console.log("elemento", elemento);
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase()); 
            })
        );
    }, [busqueda, listaVentas]);
 
    //const form = useRef(null)
    useEffect(() => {
        console.log("Este es el listado de ventas en el componente de tabla", listaVentas);
    }, [listaVentas])



    const refresh = () => {
        window.location = "/dashboard/ventas";
    }



    return (
        <div>
            <PrivateComponent roleList={['administrador', 'vendedor']}>
                <div className="designDesktop">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input 
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        class="form-control me-2" 
                        type="search"
                        placeholder="Buscar" 
                        aria-label="Search" />
                        <button class="btn btn-outline-primary" onClick={refresh}>Refresh<i className="fas fa-sync-alt"></i></button>     
                    </form>
                </div>
                <div>
                    <div className="table-responsive">
                        <table className="table table-sm table-hover">
                            <thead className="table-active">
                            <tr>
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
                        <tbody role="rowgroup">
                            

                            {
                                ventasFilatradas.map(
                                    (ventas) => {
                                        return <FilaVenta key={nanoid()} ventas={ventas} setEjecutarConsulta={setEjecutarConsulta} />;
                                    }
                                )

                            }
                        </tbody>
                    </table>

                </div>
                </div>
            </div>
            </PrivateComponent>
           

            
            {
                listaVentas.map(
                    (ventas) => {


                        return (
                            <>
                            <PrivateComponent roleList={['administrador', 'vendedor']}>
                                <div className="designMovil">

                                    <div class="row row-cols-1 row-cols-md-3 g-4">
                                        <div class="col">
                                            <div class="card">
                                                <img src={modelS} alt="img1" />

                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
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
                                                <div class="card-body">
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
                                                <div class="card-body">
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

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body">
                                                <button type="button" class="btn btn-danger buttonEdit">Eliminar registro
                                                </button>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </PrivateComponent>
                                
                            </>
                        );
                    }
                )
            }




        </div>





    );
};

const FilaVenta = ({ ventas, setEjecutarConsulta }) => {
    console.log('ventas', ventas);
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({
        cantidad: ventas.cantidad,
        celular: ventas.celular,
        celularVendedor: ventas.celularVendedor,
        descripcion: ventas.descripcion,
        email: ventas.email,
        emailVendedor: ventas.emailVendedor,
        estado: ventas.estado,
        fNVendedor: ventas.fNVendedor,
        firstName: ventas.firstName,
        idAuto: ventas.idAuto,
        idVenta: ventas.idVenta,
        lNVendedor: ventas.lNVendedor,
        lastName: ventas.lastName,
        observacion: ventas.observacion,
        precio: ventas.precio,

    })

    const actualizarVenta = async () => {
        console.log(infoNuevaVenta);
        //enviar la info al backend

        const options = {
            method: 'PATCH',
            url: 'http://localhost:5000/ventas/editar',
            headers: { 'Content-Type': 'application/json', Authorization : getToken() },
            data: { ...infoNuevaVenta, id: ventas._id }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Venta modificada con exito')
            setEdit(false);
            setEjecutarConsulta(true);

        }).catch(function (error) {
            toast.error('Error en la actualizacion del registro de venta')
            console.error(error);
        });

    };

    const EliminarVenta = async () => {

        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/ventas/eliminar',
            headers: { 'Content-Type': 'application/json', Authorization : getToken() },
            data: { id: ventas._id }
        };

        await axios.request(options).then(function (response) {
            toast.success("Registro de venta eliminado satisfactoriamente")
            console.log(response.data);
            setEjecutarConsulta(true);
            
        }).catch(function (error) {
            toast.error("Error al eliminar el registro de venta")
            console.error(error);
        });
        setOpenDialog(false);

    }



    return (
        <PrivateComponent roleList={['administrador', 'vendedor']}>
            <tr>
            {
                edit ? (
                    <>

                        
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.idAuto}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, idAuto: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.firstName}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, firstName: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.lastName}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, lastName: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.email}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, email: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.celular}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, celular: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.fNVendedor}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, fNVendedor: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.lNVendedor}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, lNVendedor: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.emailVendedor}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, emailVendedor: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.celularVendedor}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, celularVendedor: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.precio}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, precio: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.estado}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, estado: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.cantidad}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, cantidad: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.descripcion}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, descripcion: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevaVenta.observacion}
                                onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, observacion: e.target.value })} />
                        </td>

                    </>
                ) : (
                    <>
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
                    </>
                )}

            <td>
                {edit ? (
                    <>
                        <Tooltip title= "Confirmar edición">
                            <i onClick={() => actualizarVenta()} className="fas fa-check" />
                        </Tooltip>
                        <Tooltip title= "Cancelar edición">
                            <i onClick={() => actualizarVenta(false)} className="fas fa-ban" />
                        </Tooltip>
                    </>
                ) : (
                    <>
                        <Tooltip title= "Editar Registro de Venta">
                            <i onClick={() => setEdit(!edit)} className="fas fa-pencil-alt" />
                        </Tooltip>

                        <Tooltip title= "Eliminar Registro deVenta">
                            <i onClick={() => setOpenDialog(true)} className="fas fa-trash" />
                        </Tooltip>
                    </>
                )}
                
                <Dialog open={openDialog}>
                    <div className="PopupDialog">
                            <h4>¿Confirma la eliminación de este registro?</h4> 
                            <button className="ConfirmDialog ConfYes" onClick={() => EliminarVenta()}>Si</button>
                            <button className="ConfirmDialog ConfNo" onClick={()=>setOpenDialog(false)}>No</button>
                    </div>
                </Dialog>

            </td>


        </tr>
        </PrivateComponent>
        

    )
}


export default ListarVenta;

