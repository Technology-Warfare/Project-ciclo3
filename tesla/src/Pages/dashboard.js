import React from 'react'
import NavbarPrivado from '../components/NavbarPrivado';
import Sidebar from '../components/Sidebar';
import '../Pages/styles/dashboard.css';

const dashboard = () => {
    return (
        <>
            <NavbarPrivado />
                <div className="flex">
                    <Sidebar />
                    <div className="content">
                        dashboard
                    </div>
                </div>
            
        </>
    )
}

export default dashboard;