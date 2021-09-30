import React from "react";
import '../Pages/styles/navbar.css';
import logo from '../Pages/img/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {

    return(
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
                            <div className="ubicacion">
                                <form class="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                            <div className="ubicacion2">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item border2">
                                        <div className="login">
                                        <Link to="/login" style={{ textDecoration: 'none'}}><div className='border3'>Login</div></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;