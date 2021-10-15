import React from 'react'

import NavbarPrivado from '../components/NavbarPrivado';
import '../Pages/styles/usuarios.css';
import RegistrarUsuario from '../components/RegistrarUsuario';
import ListarUsuario from '../components/ListarUsuario';

const Usuarios = () => {

    return (
    <>
            <NavbarPrivado />
            <div className="flex">
                <div className="content-usuarios">
                    <h1 className="title">
                        Usuarios
                    </h1>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">LISTAR/BUSCAR</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">REGISTRAR</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><ListarUsuario></ListarUsuario></div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><RegistrarUsuario></RegistrarUsuario></div>
                    </div>
                </div>
            </div>     
        </> 
        )
    
}

export default Usuarios;
