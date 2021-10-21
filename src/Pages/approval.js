import React from "react";
import Footer from "../components/Footer";
import './styles/home.css';
import logo from './img/logo.png';
import { Link } from "react-router-dom";


const approval = () => {
    return(
        <React.Fragment>
            <div className='appr'> 
            <Link className="navbar-brand" to="/">
                <h3 className='h'><img src={logo} alt="logo" width="100"/>Technology Warfare</h3>
            </Link>   
                Registro creado exitosamente. 
                <div>Gracias por hacer parte de Technology Warfare.</div>
                En las próximas horas será aceptado como usuario de la plataforma.
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default approval;