import React from 'react'

import NavbarPrivado from '../components/NavbarPrivado';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../Pages/styles/vehiculos.css';
import RegistrarVehiculo from '../components/RegistrarVehiculo';
import ListarVehiculos from '../components/ListarVehiculos';

const vehiculos = () => {
    return (
        <React.Fragment>
            <NavbarPrivado />
            <div className="flex">
                <Sidebar />
                <div className="content-vehiculos">
                    <h1 className="title">Módulo Administrador de Vehículos</h1>

                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">REGISTRO</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">LISTAR/BUSCAR</button>
                        </li>
                    </ul>
                    <div className="tab-content sizeCont" id="pills-tabContent" >

                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <RegistrarVehiculo />
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
                            <ListarVehiculos />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>        
        </React.Fragment>
    );
}

export default vehiculos
