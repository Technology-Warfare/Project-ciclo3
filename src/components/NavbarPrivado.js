import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import '../Pages/styles/navbar.css';
import logo from '../Pages/img/logo.png';
import { Link } from "react-router-dom";

const NavbarPrivado = () => {

    const { logout, user } = useAuth0();

    const cerrarSesion = () => {
        logout({ returnTo: window.location.origin });
        localStorage.setItem('token', null);
    }

    return (
        <>
            <header>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                    <div className="container-fluid border">
                        <nav className="navbar navbar-light">
                            <Link className="navbar-brand" to="/">
                            <h3 className='h'><img src={logo} alt="logo" width="80"/>Technology Warfare</h3>
                            </Link>
                        </nav>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <div className="ubicacion2 ">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0  ">
                                    <li className="entra">
                                        {user ? (
                                            <>
                                            <img src={user.picture} className="picture" alt={user.name}/>
                                            {user.name}
                                            </>
                                        ):(
                                            <p>Bienvenido</p>
                                        )}
                                    </li>
                                    <li className="nav-item border2">
                                        <button className="btn btn-outline-primary" onClick={() => cerrarSesion()}>
                                            Log Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavbarPrivado;
