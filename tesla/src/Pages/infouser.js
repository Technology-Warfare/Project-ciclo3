import React from 'react'
import NavbarPrivado from '../components/NavbarPrivado'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../Pages/styles/usuarios.css';
import { Link } from 'react-router-dom';

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
                    <h3 className="title mt-5">
                        Informe del usuario
                    </h3>
                    <div className="info-user mt-5">
                        Nombre: Nombre completo usuario<br/>
                        Apellido: Apellido del usuario<br/>
                        edad: edad del usuario <br/>
                        tipo documento: tipo documento del usuario <br/>
                        numero documento: numero documento usuario <br/>
                        email: email usuario <br/>
                    </div>
                    <div className="link">
                        <Link to="/dashboard/usuarios">Regresar</Link>
                    </div>
                    
                </div>
            </div>
            <Footer/>        
        </React.Fragment>
    )
}

export default infouser
