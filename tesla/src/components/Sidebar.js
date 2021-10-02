import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages/styles/sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className='mt-4'>
                <block className=' h5'>Interfaz de navegación</block>
                <li className='mt-4'>
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