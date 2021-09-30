import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages/styles/sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/dashboard/ventas" style={{ textDecoration: 'none'}}><div className='liu'>Administración de Ventas</div></Link>
                </li>
                <li>
                    <Link to="/dashboard/vehiculos" style={{ textDecoration: 'none'}}><div className='liu'>Administración de Vehiculos</div></Link>
                </li>
                <li>
                    <Link to="/dashboard/usuarios" style={{ textDecoration: 'none'}}><div className='liu'>Administración de Usuarios</div></Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar