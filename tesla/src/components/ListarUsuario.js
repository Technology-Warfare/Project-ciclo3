import React from 'react'
import { Link } from 'react-router-dom'

const ListarUsuario = () => {
    return (
        <div className="listar-usuario">
            <div className="search">
                <form class="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <h2 className="title mt-3">
                Lista de usuarios
            </h2>

            <table className="table">
                <tr className="ids">
                    <td>Nombre</td>
                    <td>ID</td>
                    <td>opcion</td>
                </tr>
                <tr>
                    <td>Jorge Carrascal</td>
                    <td>1158896632</td>
                    <td><Link to="/dashboard/usuarios/info">Ver</Link></td>
                </tr>
                <tr>
                    <td>Andrés Restrepo</td>
                    <td>29806148</td>
                    <td><Link to="/dashboard/usuarios/info">Ver</Link></td>
                </tr>
                <tr>
                    <td>Carlos Betancur</td>
                    <td>60528896</td>
                    <td><Link to="/dashboard/usuarios/info">Ver</Link></td>
                </tr>
            </table>
        </div>
    )
}

export default ListarUsuario
