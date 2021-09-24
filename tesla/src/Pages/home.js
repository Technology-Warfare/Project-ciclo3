import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fotoindex1 from "./img/fotoindex1.png";
import './styles/home.css';

const home = () => {
    return(
        <React.Fragment>
            <Navbar />
            <div className='mainContainer'>
               <section className='section'>
                   BUENAAAAS
               </section>
               <div className='contenedorImagen'><img src={fotoindex1} alt= "img1"/></div>
               <section className='section2 contenedor'>
                   <div className='caracteristicas'>Estamos diseñando y fabricando un ecosistema completo de energía y transporte que está totalmente integrado verticalmente.</div>
                   <div className='caracteristicas2'>Buscamos el mayor beneficio ambiental posible desarrollando capacidades de fabricación avanzadas.</div>
               </section>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default home;