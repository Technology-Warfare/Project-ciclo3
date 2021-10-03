import React from "react";

import Admv from "../components/Admv";
import Footer from "../components/Footer"
import './styles/ventas.css';
import NavbarPrivado from "../components/NavbarPrivado";
import Sidebar from "../components/Sidebar";

const Adminvtas = () => {
    return (
        <React.Fragment>
            <NavbarPrivado />
            <div className="flex">
                <Sidebar />
                <div className="content-ventas">
                    <Admv />
                </div>
            </div>    
            <Footer/>    
        </React.Fragment>
    );
}

export default Adminvtas;
