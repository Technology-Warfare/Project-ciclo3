import React from 'react'

import '../Pages/styles/navbar.css';
import logo from '../Pages/img/logo.png';
import { Link } from "react-router-dom";

const NavbarPrivado = () => {
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
                            <div className="ubicacion2">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/">logout</Link>
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
