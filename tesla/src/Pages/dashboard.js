import React from 'react'
import NavbarPrivado from '../components/NavbarPrivado';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import '../Pages/styles/dashboard.css';

import fotoDashboard1 from "../Pages/img/ModelS/models2.jpg";
import fotoDashboard2 from "../Pages/img/ModelX/modelx2.jpg";
import fotoDashboard3 from "../Pages/img/ModelY/y.jpg";

const dashboard = () => {
    return (
        <>
            <NavbarPrivado />
                <div className="flex">
                    <Sidebar/>
                    <div className="content justify-content-between">
                    <div><h4 className='FloatLeft mb-5'>Pepito Juarez</h4></div>
                    

                    <div id="carouselExampleControls" class="carousel slide Carusel" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active paddingImg">
                                <img src={fotoDashboard1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item paddingImg">
                                <img src={fotoDashboard2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item paddingImg">
                                <img src={fotoDashboard3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="ColorBar mb-3">
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
                                
                        </div>
                        
                        <div className="card DisplayBlock pt-0 mb-3">
                                <button className='rounded ButtonSize'>Editar Info</button>
                        </div>
                        
                    </div>
                    
                    
                </div>
                
                
            <Footer/>
        </>
    )
}

export default dashboard;