import React from 'react'
import NavbarPrivado from '../components/NavbarPrivado';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import '../Pages/styles/dashboard.css';

const dashboard = () => {
    return (
        <>
            <NavbarPrivado />
                <div className="flex">
                    <Sidebar/>
                    <div className="content">
                        dashboard
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default dashboard;