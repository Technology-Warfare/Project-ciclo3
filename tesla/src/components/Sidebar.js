import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages/styles/sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className='mt-4'>
                
                <li className='mt-4'>
                   
                    <Link to="/dashboard/ventas" style={{ textDecoration: 'none' }}><div className='liu'> <button type="button" class="btn btn-dark ButtonSidebar">Ventas</button></div></Link>
                    
                </li>
                <li>
                    
                    <Link to="/dashboard/vehiculos" style={{ textDecoration: 'none' }}><div className='liu'><button type="button" class="btn btn-dark ButtonSidebar">Vehiculos
                    </button></div></Link>
                    
                </li>
                <li>
                    
                    <Link to="/dashboard/usuarios" style={{ textDecoration: 'none' }}><div className='liu'><button type="button" class="btn btn-dark ButtonSidebar">Usuarios </button></div></Link>
                   
                </li>
                <li>
                    
                    <Link to="/dashboard/" style={{ textDecoration: 'none' }}><div className='liu'><button type="button" class="btn btn-dark ButtonSidebar">Darchboard</button></div></Link>
                    
                </li>
            </ul>
        </div>
    )
}

export default Sidebar