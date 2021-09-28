import React from 'react'

import NavbarPrivado from '../components/NavbarPrivado';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../Pages/styles/vehiculos.css';

const vehiculos = () => {
    return (
        <React.Fragment>
            <NavbarPrivado />
            <div className="flex">
                <Sidebar />
                <div className="content-vehiculos">
                    vehiculos
                </div>
            </div>
            <Footer/>        
        </React.Fragment>
    );
}

export default vehiculos
