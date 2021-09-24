import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const home = () => {
    return(
        <React.Fragment>
            <Navbar />
            <div className='mainContainer'>
                esta es la pagina de inicio
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default home;