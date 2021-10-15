import React, { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import obtenerUsuarios from '../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip, Dialog } from '@mui/material';
import { nanoid } from 'nanoid';

const ListarUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchUsuarios = async () => {
            setLoading(true);
            await obtenerUsuarios(
              (response) => {
                console.log('la respuesta que se recibio fue', response);
                setUsuarios(response.data);
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
            fetchUsuarios();
          }
        }, [ejecutarConsulta]);
      
        useEffect(() => {
          //obtener lista de vehículos desde el backend
            setEjecutarConsulta(true);
        }, []);

    return (
        <div>
            <TablaUsuarios loading={loading} listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />
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

const TablaUsuarios = ({ loading, listaUsuarios, setEjecutarConsulta }) => {
    const [busqueda, setBusqueda] = useState('');
    const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);
    useEffect(() => {
        console.log('busqueda', busqueda);
        console.log("Lista original", listaUsuarios);
        setUsuariosFiltrados(
            listaUsuarios && listaUsuarios.filter(elemento => {
                console.log("elemento", elemento);
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
        );
    }, [busqueda, listaUsuarios]);

    //const form = useRef(null)
    useEffect(() => {
        console.log("Este es el listado de usaurios en el componente de tabla", listaUsuarios);
    }, [listaUsuarios])

    const refresh = (e) => {
        e.preventDefault();
        window.location="/dashboard/usuarios";
    }


    return (
        <>
            <div class="container-fluid">
                <form class="d-flex">
                    <input
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        class="form-control me-2"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <button className="btn btn-outline-primary refresh mt-5 mb-5" onClick={refresh}>Refresh<i className="fas fa-sync-alt"></i></button>
            </div>
            <div className="table-responsive">
                <table className="table table-sm table-hover">
                    <thead className="table-active">
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo documento</th>
                            <th>Número</th>
                            <th>Edad</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            usuariosFiltrados.map(
                                (usuarios) => {
                                    return <FilaUsuario key={nanoid()} usuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />;
                                }
                            )
                        }
                    </tbody>
                </table>                
            </div>
        </>
        
    );
};

const FilaUsuario = ({ usuarios, setEjecutarConsulta }) => {
    console.log('Usuarios: ', usuarios);
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
        nombre : usuarios.nombre,
        apellido : usuarios.apellido,
        edad : usuarios.edad,
        email : usuarios.email,
        documento : usuarios.documento,
        numerodocumento : usuarios.numerodocumento,
        cargo: usuarios.cargo
    })

    const actualizarUsuario = async () => {
        console.log(infoNuevoUsuario);
        //enviar la info al backend

        const options = {
            method: 'PATCH',
            url: 'http://localhost:5000/usuarios/editar',
            headers: { 'Content-Type': 'application/json' },
            data: { ...infoNuevoUsuario, id: usuarios._id  }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('usuario modificado con exito')
            setEdit(false);
            setEjecutarConsulta(true);
        }).catch(function (error) {
            toast.error('Error en la actualizacion del registro del usuario')
            console.error(error);
        });
    };

    const EliminarUsuario = async () => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/usuarios/eliminar',
            headers: { 'Content-Type': 'application/json' },
            data: { id: usuarios._id }
        };

        await axios.request(options).then(function (response) {
            toast.success("Registro del usuario eliminado satisfactoriamente")
            console.log(response.data);
            setEjecutarConsulta(true);
            window.location="/dashboard/usuarios";
        }).catch(function (error) {
            toast.error("Error al eliminar el registro del usuario")
            console.error(error);
            window.location="/dashboard/usuarios";
        });
        setOpenDialog(false);

    }

    return (
        <tr>
            {
                edit ? (
                    <>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevoUsuario.nombre}
                                onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, nombre: e.target.value })} />
                        
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevoUsuario.apellido}
                                onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, apellido: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevoUsuario.documento}
                                onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, documento: e.target.value })}
                                disabled />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevoUsuario.numerodocumento}
                                onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, numerodocumento: e.target.value })}
                                disabled />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevoUsuario.edad}
                                onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, edad: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="email"
                                className="InputSize"
                                value={infoNuevoUsuario.email}
                                onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, email: e.target.value })} />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="InputSize"
                                value={infoNuevoUsuario.cargo}
                                onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, cargo: e.target.value })} />
                        </td>
                    </>
                ) : (
                    <>
                        <td>{usuarios.nombre}  {usuarios.apellido}</td>
                        <td>{usuarios.documento}</td>
                        <td>{usuarios.numerodocumento}</td>
                        <td>{usuarios.edad}</td>
                        <td>{usuarios.email}</td>
                        <td>{usuarios.cargo}</td>
                    </>
                )}

            <td>
                {edit ? (
                    <>
                        <Tooltip title="Confirmar edición">
                            <i onClick={() => actualizarUsuario()} className="fas fa-check" />
                        </Tooltip>
                        <Tooltip title="Cancelar edición">
                            <i onClick={() => actualizarUsuario(false)} className="fas fa-ban" />
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
                        <button className="ConfirmDialog ConfYes" onClick={() => EliminarUsuario()}>Si</button>
                        <button className="ConfirmDialog ConfNo" onClick={() => setOpenDialog(false)}>No</button>
                    </div>
                </Dialog>

            </td>


        </tr>

    )
}


export default ListarUsuarios;
