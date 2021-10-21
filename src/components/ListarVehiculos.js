import '../Pages/styles/vehiculos.css';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { obtenerVehiculos } from '../utils/api';
import 'react-toastify/dist/ReactToastify.css';
import modelS from "../Pages/img/ModelS/models.jpg";
import axios from "axios";
import { getToken } from '../utils/api';

import { nanoid } from 'nanoid';
import { Tooltip } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import PrivateComponent from './PrivateComponent';


const ListarVehiculos = () => {
    const [vehiculos, setVehiculos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchVehiculos = async () => {
            setLoading(true);
            await obtenerVehiculos(
              (response) => {
                console.log('la respuesta que se recibio fue', response);
                setVehiculos(response.data);
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
            fetchVehiculos();
          }
        }, [ejecutarConsulta]);
      
        useEffect(() => {
          //obtener lista de vehículos desde el backend
            setEjecutarConsulta(true);
        }, []);

    return (
        <PrivateComponent roleList={['administrador', 'vendedor']}>
            <div>
            <TablaVehiculos loading={loading} listaVehiculos={vehiculos} setEjecutarConsulta={setEjecutarConsulta} />
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
        </PrivateComponent>
        



    )

}





const TablaVehiculos = ({ loading, listaVehiculos, setEjecutarConsulta }) => {
    const [busqueda, setBusqueda] = useState('');
    const [vehiculosFiltrados, setVehiculosFiltrados] = useState(listaVehiculos);
    useEffect(() => {
        console.log('busqueda', busqueda);
        console.log("Lista original", listaVehiculos);
        setVehiculosFiltrados(
            listaVehiculos.filter(elemento => {
                console.log("elemento", elemento);
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
        );
    }, [busqueda, listaVehiculos]);

    //const form = useRef(null)
    useEffect(() => {
        console.log("Este es el listado de vehiculos en el componente de tabla", listaVehiculos);
    }, [listaVehiculos])

    const refresh = () => {
        window.location = "/dashboard/vehiculos";
    }

    return (
        <PrivateComponent roleList={['administrador', 'vendedor']}>
           <div>
            <div className="designDesktop">
                <div class="container-flex">
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
                

                <div className="table-responsive">
                    <table className="table table-sm table-hover">
                        <thead className="table-active">
                            <tr>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Generación</th>
                                <th>Serie</th>
                                <th>Equipamento</th>
                                <th>Modificación</th>
                                <th>Descripción</th>
                                <th>Observaciones</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                vehiculosFiltrados.map(
                                    (vehiculos) => {
                                        return <FilaVehiculo key={nanoid()} vehiculos={vehiculos} setEjecutarConsulta={setEjecutarConsulta} />;
                                    }
                                )

                            }
                        </tbody>
                    </table>

                </div>
            </div>

            {
                listaVehiculos.map(
                    (vehiculos) => {


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
                                                

                                                <button type="button"  className="btn btn-danger mt-3">Eliminar registro</button>
                                               
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
        </PrivateComponent>
        





    );
};

const FilaVehiculo = ({ vehiculos, setEjecutarConsulta }) => {
    console.log('vehiculos', vehiculos);
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevoVehiculo, setInfoNuevoVehiculo] = useState({
        descripcion: vehiculos.descripcion,
        equipamiento: vehiculos.equipamiento,
        generacion: vehiculos.generacion,
        marca: vehiculos.marca,
        modelo: vehiculos.modelo,
        modificacion: vehiculos.modificacion,
        observaciones: vehiculos.observaciones,
        serie: vehiculos.serie,

    })

    const actualizarVehiculo = async () => {
        console.log(infoNuevoVehiculo);
        //enviar la info al backend

        const options = {
            method: 'PATCH',
            url: 'http://localhost:5000/vehiculos/editar',
            headers: { 'Content-Type': 'application/json', Authorization : getToken() },
            data: { ...infoNuevoVehiculo, id: vehiculos._id  }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Vehiculo modificado con exito')
            setEdit(false);
            setEjecutarConsulta(true);
        }).catch(function (error) {
            toast.error('Error en la actualizacion del registro del vehiculo')
            console.error(error);
        });



    };

    const EliminarVehiculo = async () => {

        

        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/vehiculos/eliminar',
            headers: { 'Content-Type': 'application/json', Authorization : getToken() },
            data: { id: vehiculos._id }
        };

        await axios.request(options).then(function (response) {
            toast.success("Registro del vehiculo eliminado satisfactoriamente")
            console.log(response.data);
            setEjecutarConsulta(true);
        }).catch(function (error) {
            toast.error("Error al eliminar el registro del vehiculo")
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
                                value={infoNuevoVehiculo.marca}
                                onChange={(e) => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, marca: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevoVehiculo.modelo}
                                onChange={(e) => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, modelo: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevoVehiculo.generacion}
                                onChange={(e) => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, generacion: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevoVehiculo.serie}
                                onChange={(e) => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, serie: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevoVehiculo.equipamiento}
                                onChange={(e) => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, equipamiento: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevoVehiculo.modificacion}
                                onChange={(e) => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, modificacion: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevoVehiculo.descripcion}
                                onChange={(e) => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, descripcion: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevoVehiculo.observaciones}
                                onChange={(e) => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, observaciones: e.target.value })} />
                        </td>


                    </>
                ) : (
                    <>
                        <td>{vehiculos.marca}</td>
                        <td>{vehiculos.modelo}</td>
                        <td>{vehiculos.generacion}</td>
                        <td>{vehiculos.serie}</td>
                        <td>{vehiculos.equipamiento}</td>
                        <td>{vehiculos.modificacion}</td>
                        <td>{vehiculos.descripcion}</td>
                        <td>{vehiculos.observaciones}</td>
                        
                    </>
                )}

            <td>
                {edit ? (
                    <>
                        <Tooltip title="Confirmar edición">
                            <i onClick={() => actualizarVehiculo()} className="fas fa-check" />
                        </Tooltip>
                        <Tooltip title="Cancelar edición">
                            <i onClick={() => actualizarVehiculo(false)} className="fas fa-ban" />
                        </Tooltip>
                    </>
                ) : (
                    <>
                        <Tooltip title="Editar Registro del Vehiculo">
                            <i onClick={() => setEdit(!edit)} className="fas fa-pencil-alt" />
                        </Tooltip>

                        <Tooltip title="Eliminar Registro del Vehiculo">
                            <i onClick={() => setOpenDialog(true)} className="fas fa-trash" />
                        </Tooltip>
                    </>
                )}

                <Dialog open={openDialog}>
                    <div className="PopupDialog">
                        <h4>¿Confirma la eliminación de este registro?</h4>
                        <button className="ConfirmDialog ConfYes" onClick={() => EliminarVehiculo()}>Si</button>
                        <button className="ConfirmDialog ConfNo" onClick={() => setOpenDialog(false)}>No</button>
                    </div>
                </Dialog>

            </td>


        </tr>
        </PrivateComponent>
        

    )
}


export default ListarVehiculos;
