import React from 'react'
// import { Link } from 'react-router-dom'

import '../Pages/styles/admv.css';

const RegistrarVenta = () => {
    return (
        <div className="registrar-venta">
            <div className="form">
                <div class="input-group mb-3">
                    <div className="input-group">
                        <span className="input-group-text">ID venta</span>
                        <div className="form-floating">
                            <input type="email" class="form-control" id="inIdVenta" />
                            <label for="inIdVenta" class="form-label">TWMV
                            </label>
                        </div>
                        <label className="input-group-text" for="inIdAutomovil">ID Automovil</label>
                        <select className="form-select" id="inIdAutomovil">
                            <option selected>Seleccione</option>
                            <option value="1">TMM1</option>
                            <option value="2">TMM2</option>
                            <option value="3">TMM3</option>
                            <option value="4">TMM4</option>
                            <option value="5">TMM5</option>
                            <option value="6">TMM6</option>
                        </select>
                       
                    </div>
                </div>
            </div>
            <div className="fForm">
                <div className="form">
                    <h4 className="h4">Datos del cliente </h4>
                    <div className="input-group">
                        <span className="input-group-text">Nombres y apellidos</span>
                        <input type="text" aria-label="First name" className="form-control" />
                        <input type="text" aria-label="Last name" className="form-control" />
                    </div>
                    <div className="input-group">
                        <div className="form-floating dat">
                            <input type="email" className="form-control" id="inputEmail" />
                            <label for="inputEmail" className="form-label">Email</label>
                        </div>
                        <div className="form-floating dat">
                            <input type="text" className="form-control" id="celular" />
                            <label for="celular" className="form-label">Celular</label>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <h4 className="h4">Datos del Vendedor </h4>
                    <div className="input-group">
                        <span className="input-group-text">Nombres y apellidos</span>
                        <input type="text" aria-label="First name" class="form-control" />
                        <input type="text" aria-label="Last name" class="form-control" />
                    </div>
                    <div className="input-group">
                        <div className="form-floating dat">
                            <input type="email" className="form-control" id="inputEmail2" />
                            <label for="inputEmail2" className="form-label">Email</label>
                        </div>
                        <div className="form-floating dat">
                            <input type="text" className="form-control" id="celular2" />
                            <label for="celular2" className="form-label">Celular</label>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="h4">Detalles de la venta </h4>
            <div className="fForm">
                <div className="form">
                    <div class="input-group mb-3">
                        <label className="input-group-text" for="inIdVenta">Precio $</label>
                        <input type="email" class="form-control" id="inIdVenta" />
                    </div>
                </div>
                <div className="form">
                    <div className="input-group flex-nowrap">
                        <label className="input-group-text" for="inEstado">Estado Venta</label>
                        <select className="form-select" id="inEstado">
                            <option selected>Seleccione</option>
                            <option value="1">Creacion</option>
                            <option value="2">Embalaje</option>
                            <option value="3">Despacho</option>
                            <option value="4">Ruta</option>
                            <option value="5">Ubicación</option>
                            <option value="6">Recepción</option>
                        </select>
                    </div>
                </div>
                <div className="form">
                    <div className="input-group flex-nowrap">
                        <label className="input-group-text" for="inIdAutomovil">Cantidad</label>
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
                    </div>
                </div>
            </div>
            <div className="fForm">
                <div className="form">
                    <label for="exampleFormControlTextarea1" className="form-label">Descripcion detallada</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form">
                    <label for="exampleFormControlTextarea1" className="form-label">Observaciones generales</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </div>
    )
}

export default RegistrarVenta
