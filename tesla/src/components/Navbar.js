import React from "react";
import '../Pages/styles/navbar.css';
import logo from '../Pages/img/logo.png';
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';

const Navbar = () => {
    
    const  responseGoogle  =  ( respuesta )  =>  {
        console.log ( respuesta.profileObj.name ) ;
        if (respuesta){
            window.location="/ventas";
        }
    }

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
                                    <li className="nav-item">
                                        <div className="login">
                                        <GoogleLogin
                                            clientId="132477546024-ph4fr4rrpdvpmcd444s7tr9kj5lbnbrj.apps.googleusercontent.com"
                                            buttonText = "Login" 
                                            onSuccess = { responseGoogle } 
                                            onFailure = { responseGoogle } 
                                            CookiePolicy = { 'single_host_origin' }
                                        />
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