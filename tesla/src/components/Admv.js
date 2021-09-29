import React from 'react'
import { Link } from 'react-router-dom'

import '../Pages/styles/admv.css';

const admv = () => {
    return (
        <div>
            <h1 className="title">MODULO ADMINISTRADOR DE VENTAS</h1>

            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Registrar venta</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Listar/Buscar</button>
                </li>                
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                    <div className="form">

                        <div class="input-group mb-3">
                            
                            <div className="input-group flex-nowrap">
                                <span className="input-group-text">ID venta</span>
                                <div className="form-floating">
                                    <input type="email" class="form-control" id="inIdVenta" />
                                    <label for="inIdVenta" class="form-label">TWMV</label>
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
                                <label className="input-group-text" for="inIdCliente">ID cliente</label>
                                <select className="form-select" id="inIdCliente">
                                    <option selected>Seleccione</option>
                                    <option value="1">TW-#-000001</option>
                                    <option value="2">TW-#-000002</option>
                                    <option value="3">TW-#-000003</option>
                                    <option value="4">TW-#-000004</option>
                                    <option value="5">TW-#-000005</option>
                                    <option value="6">TW-#-000006</option>
                                    <option value="7">TW-#-000007</option>
                                    <option value="8">TW-#-000008</option>
                                    <option value="9">TW-#-000009</option>
                                </select>
                            </div>
                            
                        </div>

                        <h4 className='h4'>Datos del cliente </h4> 
                        <div className="input-group">             
                            <span className="input-group-text">Nombres y apellidos</span>
                            <input type="text" aria-label="First name" className="form-control"/>
                            <input type="text" aria-label="Last name" className ="form-control"/>
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
                        <h4>Datos del Vendedor </h4>
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
                        <h4>Detalles de la venta </h4>
                        <div className="input-group">
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
                        
                        <label for="exampleFormControlTextarea1" className="form-label">Descripcion detallada</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <label for="exampleFormControlTextarea1" className="form-label">Observaciones generales</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                        <div class="input-group mb-3">

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
                                <span className="input-group-text">Precio</span>
                                <div className="form-floating">
                                    <input type="email" class="form-control" id="inIdVenta" />
                                    <label for="inIdVenta" class="form-label">$</label>
                                </div>
                            </div>

                        </div>




                    </div>

                    

                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                   
                   
                   
                    <div className="row">
                        
                        <div className="col">
                            
                            <div className="list-group" id="list-tab" role="tablist">
                                
                                <Link className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" to="#list-home" role="tab" aria-controls="list-home">TWM!001 </Link>
                                <Link className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" to="#list-profile" role="tab" aria-controls="list-profile">TWM!002 </Link>
                                <Link className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" to="#list-messages" role="tab" aria-controls="list-messages">TWM!003</Link>
                                <Link className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" to="#list-settings" role="tab" aria-controls="list-settings">TWM!004</Link>
                                <Link className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" to="#list-settings" role="tab" aria-controls="list-settings">TWM!005</Link>
                                
                            </div>
                            
                        </div>
                        
                        <div className="col">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Some placeholder content in a paragraph relating to "Home". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</div>
                                <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Some placeholder content in a paragraph relating to "Home". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</div>
                                <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Some placeholder content in a paragraph relating to "Home". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</div>
                                <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">Some placeholder content in a paragraph relating to "Home". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</div>
                            </div>
                        </div>
                    </div>
                

                </div>
                
            </div>



            
            


        </div>
    )
}

export default admv
