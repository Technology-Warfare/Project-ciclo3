import React from "react";

import Footer from "../components/Footer"
import './styles/ventas.css';
import NavbarPrivado from "../components/NavbarPrivado";
import Sidebar from "../components/Sidebar";


import '../Pages/styles/admv.css';

import ListarVenta from '../components/ListarVenta.js';
import RegistrarVenta from '../components/RegistrarVenta';




const ventas = () => {
    return (
        <React.Fragment>
            <NavbarPrivado />
            <div className="flex">
                <Sidebar />
                <div className="content-ventas">
                    
                    <h1 className="title">MODULO ADMINISTRADOR DE VENTAS</h1>

                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">REGISTRO</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">LISTAR/BUSCAR</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">

                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <RegistrarVenta />
                        </div>
                        <div className="tab-pane fade colorPaneVt" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            
                        </div>
                    </div>

                </div>
            </div>    
            <Footer/>    
        </React.Fragment>
    );
}

    export default ventas;
