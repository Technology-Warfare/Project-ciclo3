import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import BasicTabs from "../components/TabMenu";

import './styles/home.css';

const home = () => {
    return(
        <React.Fragment>
            <Navbar />
            <div className='mainContainer'>
                <BasicTabs />
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default home;