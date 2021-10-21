import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import './styles/ventas.css';
import NavbarPrivado from "../components/NavbarPrivado";


import '../Pages/styles/admv.css';

import ListarVenta from '../components/ListarVenta.js';
import RegistrarVenta from '../components/RegistrarVenta';




const Ventas = () => {

    const { isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return(
    <>
            <NavbarPrivado />
            <div className="flex">
                <div className="content-ventas">
                    
                    <h1 className="title">MODULO ADMINISTRADOR DE VENTAS</h1>

                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">LISTAR/BUSCAR</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">REGISTRO</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">

                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">                            
                            <ListarVenta />
                        </div>
                        <div className="tab-pane fade colorPaneVt" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                            {/*<nav class="navbar navbar-light bg-light searchPosition">
                                <div class="container-fluid">
                                    <form class="d-flex">
                                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                                    </form>
                                </div>
                            </nav>*/}

                            <RegistrarVenta />
                        </div>
                    </div>

                </div>
            </div>     
        </>
        )
}

    export default Ventas;
