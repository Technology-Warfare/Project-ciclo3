import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages/styles/sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/dashboard/ventas"><div className='liu'>Admin ventas</div></Link>
                </li>
                <li>
                    <Link to="/dashboard/vehiculos"><div className='liu'>Admin vehiculos</div></Link>
                </li>
                <li>
                    <Link to="/dashboard/usuarios"><div className='liu'>Usuarios</div></Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar