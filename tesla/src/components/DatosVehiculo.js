import React from 'react'

import modelS from "../Pages/img/ModelS/models.jpg";

const DatosVehiculo = () => {
    return (
        <div>

            <div className="fForm">
                <div className="Form">
                    <div className="cardData">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="tit">
                                    <div className="lblTit1">
                                        <label className="input-group-text">Tipo
                                        </label>
                                    </div>
                                    <div className="lblTit2">
                                        <label className="lblTit">Eléctrico
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="tit">
                                    <div className="lblTit1">
                                        <label className="input-group-text">Marca
                                        </label>
                                    </div>
                                    <div className="lblTit2">
                                        <label className="lblTit">Tesla
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
                                        <label className="input-group-text">Generación
                                        </label>
                                    </div>
                                    <div className="lblTit2">
                                        <label>1ra [2017 - 2021]
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
                            <p class="card-text">190 kw (258 cv) Transmisión automática, deportivo aerodinámico</p>
                        </div>
                    </div>

                    
                </div>
                

                <div className="Form">
                    <div className="cardData">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="tit">
                                    <div className="">
                                        <label className="input-group-text">Modificación
                                        </label>
                                    </div>
                                    <div className="">
                                        <label className="lblTit">190kw (258 cv) Transmisión automática
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="tit">
                                    <div className="lblTit1">
                                        <label className="input-group-text">Serie
                                        </label>
                                    </div>
                                    <div className="lblTit2">
                                        <label className="lblTit">Sedan
                                        </label>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="tit">
                                    <div className="lblTit1">
                                        <label className="input-group-text">Equipamento
                                        </label>
                                    </div>
                                    <div className="lblTit2">
                                        <label className="lblTit">Long Range
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <div class="card">
                                <div class="card-body">
                                    <label className="input-group-text">Observaciones
                                    </label>
                                    <p class="card-text">Modelo para exhibición</p>
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

                <div className="Form imgVenta">
                    <div class="card bg-dark text-white imgAd">
                        <img src={modelS} alt="img1" />
                    </div>
                </div>


            </div>
            <div className="fForm">
                <div className="card form">
                    <div class="card-body">
                        <div className="cardData">
                            <div className="tit">
                                <div className="lblTit1">
                                    <label className="input-group-text">Cantidad
                                    </label>
                                </div>
                                <div className="lblTit2">
                                    <label className="lblTit">250
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card form">
                    <div class="card-body">
                        <div className="cardData">
                            <div className="tit">
                                <div className="lblTit1">
                                    <label className="input-group-text">Vr. Unitario
                                    </label>
                                </div>
                                <div className="lblTit2">
                                    <label className="lblTit">24'000.000
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card form">
                    <div class="card-body">
                        <div className="cardData">
                            <div className="tit">
                                <div className="lblTit1">
                                    <label className="input-group-text">Vr. Total
                                </label>
                                </div>
                                <div className="lblTit2">
                                    <label className="lblTit">$ 6.000.000.000
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                    <div className="boxButtons">
                    <button type="button" class="btn btn-success sizeButtons">Editar Registro</button>

                    <button type="button" class="btn btn-danger sizeButtons">Eliminar Registro</button>
                    </div>
                


            </div>

           


        </div>

    )
}

export default DatosVehiculo
