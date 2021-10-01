import React from 'react'
import NavbarPrivado from '../components/NavbarPrivado'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const infouser = () => {
    return (
        <React.Fragment>
            <NavbarPrivado />
            <div className="flex">
                <Sidebar />
                <div className="content-usuarios">
                    <h1 className="title">
                        Usuarios
                    </h1>
                    informacion del usuario seleccionado
                </div>
            </div>
            <Footer/>        
        </React.Fragment>
    )
}

export default infouser
