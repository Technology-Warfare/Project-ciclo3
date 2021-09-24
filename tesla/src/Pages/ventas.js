import React from "react";
import Navbar from "../components/Navbar";
import Admv from "../components/Admv";
import Footer from "../components/Footer"
import './styles/ventas.css';
const Adminvtas = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Admv />    
            <Footer/>        
        </React.Fragment>
    );
}

export default Adminvtas;
