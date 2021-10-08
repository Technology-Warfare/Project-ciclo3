import React from 'react'
// import { Link } from 'react-router-dom'

import '../Pages/styles/admv.css';

const RegistrarVenta = () => {
    return (
        <div className="registrar-venta">


            <div className="card-group">
                <div className="card">
                    <div className ="card-body">
                        <span className="input-group-text">ID venta</span>
                        <div className="form-floating">
                            <input type="email" class="form-control" id="inIdVenta" />
                            <label for="inIdVenta" class="form-label">TWMV
                            </label>
                        </div>
                   
                    </div>
                </div>
                
                <div className="card">
                    <div className ="card-body">
                        <div className="form-floating">
                            <select className="form-select" id="inIdAutomovil">
                                <option selected>Seleccione</option>
                                <option value="1">TMM1</option>
                                <option value="2">TMM2</option>
                                <option value="3">TMM3</option>
                                <option value="4">TMM4</option>
                                <option value="5">TMM5</option>
                                <option value="6">TMM6</option>
                            </select>
                            <label className="form-label" for="inIdAutomovil">ID Automovil</label>
                        </div>
                    
                    </div>
                </div>
            </div>


            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Datos cliente</h5>
                        <div className="form-floating">
                            <input type="text" aria-label="First name" className="form-control" id="inputName" />
                            <label for="inputName" className="form-label">Nombres</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" aria-label="Last name" className="form-control" id="inputLastName" />
                            <label for="inputLastName" className="form-label">Apellidos</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="inputEmail" />
                            <label for="inputEmail" className="form-label">Email</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="celular" />
                            <label for="celular" className="form-label">Celular</label>
                        </div>

                    </div>
                </div>
               
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Datos Vendedor</h5>
                        <div className="form-floating">
                            <input type="text" aria-label="First name" className="form-control" id="inputName" />
                            <label for="inputName" className="form-label">Nombres</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" aria-label="Last name" className="form-control" id="inputLastName" />
                            <label for="inputLastName" className="form-label">Apellidos</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="inputEmail" />
                            <label for="inputEmail" className="form-label">Email</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="celular" />
                            <label for="celular" className="form-label">Celular</label>
                        </div>

                    </div>
                </div>
            </div>

            <h4 className="h4">Detalles de la venta </h4>
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <div className="form-floating">
                            <input type="text" aria-label="First name" className="form-control" id="inputName" />
                            <label for="inputName" className="form-label">Precios $</label>
                        </div>
                        <div className="form-floating">
                            <select className="form-select" id="inEstado">
                                <option selected>Seleccione</option>
                                <option value="1">Creacion</option>
                                <option value="2">Embalaje</option>
                                <option value="3">Despacho</option>
                                <option value="4">Ruta</option>
                                <option value="5">Ubicación</option>
                                <option value="6">Recepción</option>
                            </select>
                            <label className="form-label" for="inEstado">Estado Venta</label>
                        </div>
                        <div className="form-floating">
                            <select className="form-select" id="inIdAutomovil">
                            <option selected>Seleccione</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">mas de 9</option>
                        </select>
                            <label className="form-label" for="inIdAutomovil">Cantidad</label>
                        </div>
                        

                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div className="form-floating">

                            
                            <textarea className="form-control TextHeight" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <label for="exampleFormControlTextarea1" className="form-label">Descripcion detallada</label>

                           
                        </div>
                        <div className="form-floating">

                            
                            <textarea className="form-control TextHeight" id="exampleFormControlTextarea2" rows="3"></textarea>
                            <label for="exampleFormControlTextarea2" className="form-label">Observaciones generales</label>

                            
                        </div>
                        

                    </div>
                </div>
            </div>

            
                
                    
                
                
            
           
            
           
            
        </div>
    )
}

export default RegistrarVenta
