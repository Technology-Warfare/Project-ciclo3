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
                    <div className="content justify-content-between d-flex  pb-5 displayFlexContent">
                        <div className="ColorBar">
                        <div className='title card DisplayBlock Titulo'><h4 className="h4">Pepito Juarez</h4></div>
                            <div className='card DisplayBlock'>
                                <div className="FloatLeft">
                                    <h6>Email:</h6> 
                                </div>
                                <div className="FloatRight">
                                    pepitojuarez@gmail.com
                                </div>
                            </div>
                            <div className='card DisplayBlock'>
                                <div className="FloatLeft">
                                    <h6>Edad:</h6>
                                </div>
                                <div className="FloatRight">
                                    20 años
                                </div>
                            </div>
                            <div className='card DisplayBlock'>
                                <div className="FloatLeft">
                                    <h6>Celular:</h6>
                                </div>
                                <div className="FloatRight">
                                    3006587689
                                </div>                         
                            </div>
                        <div className="card DisplayBlock">
                            <button className='rounded ButtonSize'>Editar Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default dashboard;