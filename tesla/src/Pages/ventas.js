import React from "react";

import Admv from "../components/Admv";
import Footer from "../components/Footer"
import './styles/ventas.css';
import NavbarPrivado from "../components/NavbarPrivado";

const Adminvtas = () => {
    return (
        <React.Fragment>
            <NavbarPrivado />
            <div className="mainContainer">
              <Admv />  
            </div>
            <Footer/>        
        </React.Fragment>
    );
}

export default Adminvtas;
