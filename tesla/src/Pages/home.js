import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import BasicTabs from "../components/TabMenu";

import './styles/home.css';
import fotoindex1 from "../Pages/img/fotoindex1.png";

const home = () => {
    return(
        <React.Fragment>
            <Navbar />
            <div>    
                <section className='section'>
                    En Technology Warfare apoyamos la transición del mundo hacia la energía sustentable, es por ello que somos una sucursal que te brinda la posibilidad de comprar carros de la marca Tesla en Colombia. ¿Qué esperas para obtener el tuyo?
                </section>
                <div className='contenedorImagen'><img src={fotoindex1} alt= "img1"/></div>
                <section className='section2 '>
                    <div className='caracteristicas'>Estamos diseñando y fabricando un ecosistema completo de energía y transporte que está totalmente integrado verticalmente.</div>
                    <div className='caracteristicas2'>Buscamos el mayor beneficio ambiental posible desarrollando capacidades de fabricación avanzadas para todas las generaciones.</div>
                </section>
                <BasicTabs />
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default home;