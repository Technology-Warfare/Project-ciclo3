import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import NavbarPrivado from '../components/NavbarPrivado';
import '../Pages/styles/vehiculos.css';
import RegistrarVehiculo from '../components/RegistrarVehiculo';
import ListarVehiculos from '../components/ListarVehiculos';

const Vehiculos = () => {
    
    const { isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <>
            <NavbarPrivado />
            <div className="flex">
                <div className="content-vehiculos">
                    <h1 className="title">MODULO ADMINISTRADOR DE VEHICULOS</h1>

                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">LISTAR/BUSCAR</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">REGISTRO</button>
                        </li>
                    </ul>
                    <div className="tab-content sizeCont" id="pills-tabContent" >

                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <ListarVehiculos />
                        </div>
                        <div className="tab-pane fade colorPane" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            {/*<nav className="navbar navbar-light bg-light SearchPosition">
                                <div className="container-fluid">
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                                    </form>
                                </div>
                            </nav>*/}
                            
                            <RegistrarVehiculo />
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Vehiculos;
