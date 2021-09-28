import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages/styles/sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/dashboard/ventas">Admin ventas</Link>
                </li>
                <li>
                    <Link to="/dashboard/vehiculos">Admin vehiculos</Link>
                </li>
                <li>
                    <Link to="/dashboard/usuarios">Usuarios</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar