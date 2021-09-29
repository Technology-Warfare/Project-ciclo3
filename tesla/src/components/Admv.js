import React from 'react'
import { Link } from 'react-router-dom'

import '../Pages/styles/admv.css';
import modelS from "../Pages/img/ModelS/models.jpg";
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
                                    <option value="1">C#000001</option>
                                    <option value="2">C#000002</option>
                                    <option value="3">C#000003</option>
                                    <option value="4">C#000004</option>
                                    <option value="5">C#000005</option>
                                    <option value="6">C#000006</option>
                                    <option value="7">C#000007</option>
                                    <option value="8">C#000008</option>
                                    <option value="9">C#000009</option>
                                </select>
                            </div>
                            
                        </div>
                    </div>
                <div className="fForm">
                    <div className="form">
                        <h4 className="h4">Datos del cliente </h4>
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
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                   
                   
                   
                    <div className="row">
                        
                        <div className="col-1">
                            
                            <div className="list-group" id="list-tab" role="tablist">
                                
                                <Link className="list-group-item list-group-item-action active" id="ID1-list" data-bs-toggle="list" to="#ID1" role="tab" aria-controls="ID1">TWM!001 </Link>

                                <Link className="list-group-item list-group-item-action" id="ID2-list" data-bs-toggle="list" to="#ID2" role="tab" aria-controls="ID2">TWM!002 </Link>

                                <Link className="list-group-item list-group-item-action" id="ID3-list" data-bs-toggle="list" to="#ID3" role="tab" aria-controls="ID3">TWM!003</Link>

                                <Link className="list-group-item list-group-item-action" id="ID4-list" data-bs-toggle="list" to="#ID4" role="tab" aria-controls="ID4">TWM!004</Link>

                                <Link className="list-group-item list-group-item-action" id="ID5-list" data-bs-toggle="list" to="#ID5" role="tab" aria-controls="ID5">TWM!005</Link>
                                
                            </div>
                            
                        </div>
                        
                        <div className="col-11">
                            <div className="tab-content" id="nav-tabContent">

                                <div className="tab-pane fade show active" id="ID1" role="tabpanel" aria-labelledby="ID1-list">
                                    
                                    <div className="fForm">
                                        <div className="Form">
                                            <div className="cardData">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Referencia
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">Plaid
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Modelo
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">S
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Cantidad
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">1
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Valor
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label>$45'000.000
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        
                                            <div class="card">
                                                <div class ="card-body">
                                                    <label className="input-group-text">Descripción
                                                    </label>
                                                    <p class ="card-text">El cliente quiere el modelo S en color Beige, paneles digitales, interfaz Onion, con acceso a motor de juegos 3D</p>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div className="Form imgVenta">
                                            <div class="card bg-dark text-white imgAd">
                                                <img src={modelS} alt="img1" />
                                                <div class="card-img-overlay">
                                                    <p class="card-text numero">1</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="Form">
                                            <div className="cardData">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">ID Automovil
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">TWM!005
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">ID Cliente
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">C#000004
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Estado
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">Despacho
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <label className="input-group-text">Observaciones
                                                            </label>
                                                            <p class="card-text">Entregar al centro de distribución</p>
                                                        </div>
                                                    </div>


                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Fecha compra
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">23/09/2021
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Fecha de pago
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">31/12/2021
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            

                                        </div>
                                
                                
                                    </div>
                                    


                                
                                    <div className="fForm">
                                        <div className="form">
                                            <div className="tit1">
                                                <div className="lblTit1">
                                                <span className="input-group-text">Vendedor</span>
                                                </div>
                                                <div>
                                                    <label className="padName">Juan Alberto Jimenez
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="form-floating dat">
                                                    <label className="form-control">Juanji93@gmail.com
                                                    </label>
                                                    <input type="email" className="form-control" id="inputEmail" />
                                                    <label for="inputEmail" className="form-label">Email</label>
                                                </div>
                                                <div className="form-floating dat">
                                                    <label className="form-control">3157415468
                                                    </label>
                                                    <input type="text" className="form-control" id="celular" />
                                                    <label for="celular" className="form-label">Celular</label>
                                                </div>

                                            </div>



                                        </div>
                                        <div className="form">
                                            <div className="tit1">
                                                <div className="lblTit1">
                                                    <span className="input-group-text">Cliente</span>
                                                </div>
                                                <div>
                                                    <label className="padName">Juan Carlos Zambrano
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="form-floating dat">
                                                    <label className="form-control">JuanCZambrano@gmail.com
                                                    </label>
                                                    <input type="email" className="form-control" id="inputEmail" />
                                                    <label for="inputEmail" className="form-label">Email</label>
                                                </div>
                                                <div className="form-floating dat">
                                                    <label className="form-control">3183457962
                                                    </label>
                                                    <input type="text" className="form-control" id="celular" />
                                                    <label for="celular" className="form-label">Celular</label>
                                                </div>

                                            </div>

                                        </div>
                                    </div>






                                    
                                    
                                </div>
                                
                                <div className="tab-pane fade" id="ID2" role="tabpanel" aria-labelledby="ID2-list">

                                    <div className="fForm">
                                        <div className="Form">
                                            <div className="cardData">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Referencia
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">Plaid
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Modelo
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">S
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Cantidad
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">1
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Valor
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label>$45'000.000
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="card">
                                                <div class="card-body">
                                                    <label className="input-group-text">Descripción
                                                    </label>
                                                    <p class="card-text">El cliente quiere el modelo S en color Beige, paneles digitales, interfaz Onion, con acceso a motor de juegos 3D</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="Form imgVenta">
                                            <div class="card bg-dark text-white imgAd">
                                                <img src={modelS} alt="img1" />
                                                <div class="card-img-overlay">
                                                    <p class="card-text numero">2</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="Form">
                                            <div className="cardData">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">ID Automovil
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">TWM!005
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">ID Cliente
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">C#000004
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Estado
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">Despacho
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <label className="input-group-text">Observaciones
                                                            </label>
                                                            <p class="card-text">Entregar al centro de distribución</p>
                                                        </div>
                                                    </div>


                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Fecha compra
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">23/09/2021
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Fecha de pago
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">31/12/2021
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>



                                        </div>


                                    </div>




                                    <div className="fForm">
                                        <div className="form">
                                            <div className="tit1">
                                                <div className="lblTit1">
                                                    <span className="input-group-text">Vendedor</span>
                                                </div>
                                                <div>
                                                    <label className="padName">Juan Alberto Jimenez
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="form-floating dat">
                                                    <label className="form-control">Juanji93@gmail.com
                                                    </label>
                                                    <input type="email" className="form-control" id="inputEmail" />
                                                    <label for="inputEmail" className="form-label">Email</label>
                                                </div>
                                                <div className="form-floating dat">
                                                    <label className="form-control">3157415468
                                                    </label>
                                                    <input type="text" className="form-control" id="celular" />
                                                    <label for="celular" className="form-label">Celular</label>
                                                </div>

                                            </div>



                                        </div>
                                        <div className="form">
                                            <div className="tit1">
                                                <div className="lblTit1">
                                                    <span className="input-group-text">Cliente</span>
                                                </div>
                                                <div>
                                                    <label className="padName">Juan Carlos Zambrano
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="form-floating dat">
                                                    <label className="form-control">JuanCZambrano@gmail.com
                                                    </label>
                                                    <input type="email" className="form-control" id="inputEmail" />
                                                    <label for="inputEmail" className="form-label">Email</label>
                                                </div>
                                                <div className="form-floating dat">
                                                    <label className="form-control">3183457962
                                                    </label>
                                                    <input type="text" className="form-control" id="celular" />
                                                    <label for="celular" className="form-label">Celular</label>
                                                </div>

                                            </div>

                                        </div>
                                    </div>





                                </div>
                                
                                <div className="tab-pane fade" id="ID3" role="tabpanel" aria-labelledby="ID3-list">
                                    <div className="fForm">
                                        <div className="Form">
                                            <div className="cardData">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Referencia
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">Plaid
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Modelo
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">S
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Cantidad
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">1
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Valor
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label>$45'000.000
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="card">
                                                <div class="card-body">
                                                    <label className="input-group-text">Descripción
                                                    </label>
                                                    <p class="card-text">El cliente quiere el modelo S en color Beige, paneles digitales, interfaz Onion, con acceso a motor de juegos 3D</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="Form imgVenta">
                                            <div class="card bg-dark text-white imgAd">
                                                <img src={modelS} alt="img1" />
                                                <div class="card-img-overlay">
                                                    <p class="card-text numero">3</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="Form">
                                            <div className="cardData">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">ID Automovil
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">TWM!005
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">ID Cliente
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">C#000004
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Estado
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">Despacho
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <label className="input-group-text">Observaciones
                                                            </label>
                                                            <p class="card-text">Entregar al centro de distribución</p>
                                                        </div>
                                                    </div>


                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Fecha compra
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">23/09/2021
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Fecha de pago
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">31/12/2021
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>



                                        </div>


                                    </div>




                                    <div className="fForm">
                                        <div className="form">
                                            <div className="tit1">
                                                <div className="lblTit1">
                                                    <span className="input-group-text">Vendedor</span>
                                                </div>
                                                <div>
                                                    <label className="padName">Juan Alberto Jimenez
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="form-floating dat">
                                                    <label className="form-control">Juanji93@gmail.com
                                                    </label>
                                                    <input type="email" className="form-control" id="inputEmail" />
                                                    <label for="inputEmail" className="form-label">Email</label>
                                                </div>
                                                <div className="form-floating dat">
                                                    <label className="form-control">3157415468
                                                    </label>
                                                    <input type="text" className="form-control" id="celular" />
                                                    <label for="celular" className="form-label">Celular</label>
                                                </div>

                                            </div>



                                        </div>
                                        <div className="form">
                                            <div className="tit1">
                                                <div className="lblTit1">
                                                    <span className="input-group-text">Cliente</span>
                                                </div>
                                                <div>
                                                    <label className="padName">Juan Carlos Zambrano
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="form-floating dat">
                                                    <label className="form-control">JuanCZambrano@gmail.com
                                                    </label>
                                                    <input type="email" className="form-control" id="inputEmail" />
                                                    <label for="inputEmail" className="form-label">Email</label>
                                                </div>
                                                <div className="form-floating dat">
                                                    <label className="form-control">3183457962
                                                    </label>
                                                    <input type="text" className="form-control" id="celular" />
                                                    <label for="celular" className="form-label">Celular</label>
                                                </div>

                                            </div>

                                        </div>
                                    </div>





                                </div>
                               
                                <div className="tab-pane fade" id="ID4" role="tabpanel" aria-labelledby="ID4-list">
                                    <div className="fForm">
                                        <div className="Form">
                                            <div className="cardData">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Referencia
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">Plaid
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Modelo
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">S
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Cantidad
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">1
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Valor
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label>$45'000.000
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="card">
                                                <div class="card-body">
                                                    <label className="input-group-text">Descripción
                                                    </label>
                                                    <p class="card-text">El cliente quiere el modelo S en color Beige, paneles digitales, interfaz Onion, con acceso a motor de juegos 3D</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="Form imgVenta">
                                            <div class="card bg-dark text-white imgAd">
                                                <img src={modelS} alt="img1" />
                                                <div class="card-img-overlay">
                                                    <p class="card-text numero">4</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="Form">
                                            <div className="cardData">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">ID Automovil
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">TWM!005
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">ID Cliente
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">C#000004
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Estado
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">Despacho
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <label className="input-group-text">Observaciones
                                                            </label>
                                                            <p class="card-text">Entregar al centro de distribución</p>
                                                        </div>
                                                    </div>


                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Fecha compra
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">23/09/2021
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Fecha de pago
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">31/12/2021
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>



                                        </div>


                                    </div>




                                    <div className="fForm">
                                        <div className="form">
                                            <div className="tit1">
                                                <div className="lblTit1">
                                                    <span className="input-group-text">Vendedor</span>
                                                </div>
                                                <div>
                                                    <label className="padName">Juan Alberto Jimenez
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="form-floating dat">
                                                    <label className="form-control">Juanji93@gmail.com
                                                    </label>
                                                    <input type="email" className="form-control" id="inputEmail" />
                                                    <label for="inputEmail" className="form-label">Email</label>
                                                </div>
                                                <div className="form-floating dat">
                                                    <label className="form-control">3157415468
                                                    </label>
                                                    <input type="text" className="form-control" id="celular" />
                                                    <label for="celular" className="form-label">Celular</label>
                                                </div>

                                            </div>



                                        </div>
                                        <div className="form">
                                            <div className="tit1">
                                                <div className="lblTit1">
                                                    <span className="input-group-text">Cliente</span>
                                                </div>
                                                <div>
                                                    <label className="padName">Juan Carlos Zambrano
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="form-floating dat">
                                                    <label className="form-control">JuanCZambrano@gmail.com
                                                    </label>
                                                    <input type="email" className="form-control" id="inputEmail" />
                                                    <label for="inputEmail" className="form-label">Email</label>
                                                </div>
                                                <div className="form-floating dat">
                                                    <label className="form-control">3183457962
                                                    </label>
                                                    <input type="text" className="form-control" id="celular" />
                                                    <label for="celular" className="form-label">Celular</label>
                                                </div>

                                            </div>

                                        </div>
                                    </div>





                                </div>
                            
                                <div className="tab-pane fade" id="ID5" role="tabpanel" aria-labelledby="ID5-list">
                                    <div className="fForm">
                                        <div className="Form">
                                            <div className="cardData">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Referencia
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">Plaid
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Modelo
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">S
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Cantidad
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">1
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Valor
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label>$45'000.000
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="card">
                                                <div class="card-body">
                                                    <label className="input-group-text">Descripción
                                                    </label>
                                                    <p class="card-text">El cliente quiere el modelo S en color Beige, paneles digitales, interfaz Onion, con acceso a motor de juegos 3D</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="Form imgVenta">
                                            <div class="card bg-dark text-white imgAd">
                                                <img src={modelS} alt="img1" />
                                                <div class="card-img-overlay">
                                                    <p class="card-text numero">5</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="Form">
                                            <div className="cardData">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">ID Automovil
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">TWM!005
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">ID Cliente
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">C#000004
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Estado
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">Despacho
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <label className="input-group-text">Observaciones
                                                            </label>
                                                            <p class="card-text">Entregar al centro de distribución</p>
                                                        </div>
                                                    </div>


                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Fecha compra
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">23/09/2021
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="tit">
                                                            <div className="lblTit1">
                                                                <label className="input-group-text">Fecha de pago
                                                                </label>
                                                            </div>
                                                            <div className="lblTit2">
                                                                <label className="lblTit">31/12/2021
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>



                                        </div>


                                    </div>




                                    <div className="fForm">
                                        <div className="form">
                                            <div className="tit1">
                                                <div className="lblTit1">
                                                    <span className="input-group-text">Vendedor</span>
                                                </div>
                                                <div>
                                                    <label className="padName">Juan Alberto Jimenez
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="form-floating dat">
                                                    <label className="form-control">Juanji93@gmail.com
                                                    </label>
                                                    <input type="email" className="form-control" id="inputEmail" />
                                                    <label for="inputEmail" className="form-label">Email</label>
                                                </div>
                                                <div className="form-floating dat">
                                                    <label className="form-control">3157415468
                                                    </label>
                                                    <input type="text" className="form-control" id="celular" />
                                                    <label for="celular" className="form-label">Celular</label>
                                                </div>

                                            </div>



                                        </div>
                                        <div className="form">
                                            <div className="tit1">
                                                <div className="lblTit1">
                                                    <span className="input-group-text">Cliente</span>
                                                </div>
                                                <div>
                                                    <label className="padName">Juan Carlos Zambrano
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="form-floating dat">
                                                    <label className="form-control">JuanCZambrano@gmail.com
                                                    </label>
                                                    <input type="email" className="form-control" id="inputEmail" />
                                                    <label for="inputEmail" className="form-label">Email</label>
                                                </div>
                                                <div className="form-floating dat">
                                                    <label className="form-control">3183457962
                                                    </label>
                                                    <input type="text" className="form-control" id="celular" />
                                                    <label for="celular" className="form-label">Celular</label>
                                                </div>

                                            </div>

                                        </div>
                                    </div>





                                </div>

                            </div>
                        </div>
                    </div>
                

                </div>
                
            </div>



            
            


        </div>
    )
}

export default admv
