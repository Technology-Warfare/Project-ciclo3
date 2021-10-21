import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages/styles/sidebar.css';
import PrivateComponent from './PrivateComponent';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className='mt-4'>
                <li>
                    <Link to="/" style={{ textDecoration: 'none' }}><div className='liu'><button type="button" class="ButtonSidebar"><i className="fas fa-house-user"></i>Home </button></div></Link>
                </li>
                <PrivateComponent roleList={['administrador', 'vendedor']}>
                   <li>                   
                        <Link to="/dashboard/ventas" style={{ textDecoration: 'none' }}><div className='liu' > <button type="button" class="ButtonSidebar"><i className="fas fa-handshake"></i>Ventas</button></div></Link>  
                    </li> 
                </PrivateComponent>
                <PrivateComponent roleList={['administrador', 'vendedor']}>
                   <li>
                        <Link to="/dashboard/vehiculos" style={{ textDecoration: 'none' }}><div className='liu'><button type="button" class="ButtonSidebar"><i className="fas fa-car"></i>Vehiculos
                        </button></div></Link>
                    </li> 
                </PrivateComponent>
                <PrivateComponent roleList={['administrador']}>
                   <li>
                        <Link to="/dashboard/usuarios" style={{ textDecoration: 'none' }}><div className='liu'><button type="button" class="ButtonSidebar"><i className="fas fa-users"></i>Usuarios </button></div></Link>
                    </li> 
                </PrivateComponent>
                
                <li>
                    <Link to="/dashboard/" style={{ textDecoration: 'none' }}><div className='liu' ><button type="button" class="ButtonSidebar"><i className="fas fa-window-maximize"></i>Dashboard</button></div></Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar