import React from 'react'

import NavbarPrivado from '../components/NavbarPrivado';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../Pages/styles/usuarios.css';

const usuarios = () => {
    return (
        <React.Fragment>
            <NavbarPrivado />
            <div className="flex">
                <Sidebar />
                <div className="content-usuarios">
                    usuarios
                </div>
            </div>
            <Footer/>        
        </React.Fragment>
    );
}

export default usuarios
