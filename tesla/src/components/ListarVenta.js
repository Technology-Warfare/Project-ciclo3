import React from 'react'
import { Link } from 'react-router-dom'

import '../Pages/styles/admv.css';

import modelS from "../Pages/img/ModelS/models.jpg";

const ListarVenta = () => {
    return (
        <div>
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
    )
}

export default ListarVenta
