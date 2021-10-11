import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages/styles/sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className='mt-4'>
                <li>
                    <Link to="/" style={{ textDecoration: 'none' }}><div className='liu'><button type="button" class="ButtonSidebar">Home</button></div></Link>
                </li>
                
                <li>                   
                    <Link to="/dashboard/ventas" style={{ textDecoration: 'none' }}><div className='liu' > <button type="button" class="ButtonSidebar">Ventas</button></div></Link>  
                </li>
                <li>
                    <Link to="/dashboard/vehiculos" style={{ textDecoration: 'none' }}><div className='liu'><button type="button" class="ButtonSidebar">Vehiculos
                    </button></div></Link>
                </li>
                <li>
                    <Link to="/dashboard/usuarios" style={{ textDecoration: 'none' }}><div className='liu'><button type="button" class="ButtonSidebar">Usuarios </button></div></Link>
                </li>
                <li>
                    <Link to="/dashboard/" style={{ textDecoration: 'none' }}><div className='liu' ><button type="button" class="ButtonSidebar">Dashboard</button></div></Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar