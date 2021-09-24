import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import BasicTabs from "../components/TabMenu";

import './styles/home.css';

const home = () => {
    return(
        <React.Fragment>
            <Navbar />
            <BasicTabs />
            <div className='mainContainer'>    
               
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default home;