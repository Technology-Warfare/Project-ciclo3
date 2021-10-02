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
                    <div className="content justify-content-between d-flex flex-column pb-5">
                        <div className='title'><h3>Nombre del Usuario</h3></div>
                        <div className='pt-5 pb-4'><h6>Email :</h6> pepitojuarez@gmail.com</div>
                        <div className='pb-4'><h6>Edad :</h6> 20 años</div>
                        <div className='pb-5'><h6>Celular :</h6> 3006587689</div>
                        <button className='rounded '>Editar Info</button>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default dashboard;