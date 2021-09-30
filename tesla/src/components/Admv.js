import React from 'react'
// import { Link } from 'react-router-dom'

import '../Pages/styles/admv.css';
import '../components/ListarVenta.js';

//import modelS from "../Pages/img/ModelS/models.jpg";
import ListarVenta from '../components/ListarVenta.js';
import RegistrarVenta from './RegistrarVenta';
const admv = () => {
    return (
        <div>
            <h1 className="title">MODULO ADMINISTRADOR DE VENTAS</h1>

            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Registrar venta</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Listar/Buscar</button>
                </li>                
            </ul>
            <div className="tab-content" id="pills-tabContent">

                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                   <RegistrarVenta />
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <ListarVenta />
                </div>
            </div>
        </div>
    )
}

export default admv
