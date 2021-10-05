import React from 'react'
import { Link } from 'react-router-dom'
import DatosVehiculo from './DatosVehiculo'
import '../Pages/styles/vehiculos.css';

const ListarVehiculos = () => {
    return (
        <div>
            
            <div className="row">

                <div className="DataCol pt-5 p-1">

                    <div className="list-group pt-4" id="list-tab" role="tablist">

                        <Link className="list-group-item list-group-item-action active" id="ID1-list" data-bs-toggle="list" to="#ID1" role="tab" aria-controls="ID1">TWM!001 </Link>

                        <Link className="list-group-item list-group-item-action" id="ID2-list" data-bs-toggle="list" to="#ID2" role="tab" aria-controls="ID2">TWM!002 </Link>

                        <Link className="list-group-item list-group-item-action" id="ID3-list" data-bs-toggle="list" to="#ID3" role="tab" aria-controls="ID3">TWM!003</Link>

                        <Link className="list-group-item list-group-item-action" id="ID4-list" data-bs-toggle="list" to="#ID4" role="tab" aria-controls="ID4">TWM!004</Link>

                        <Link className="list-group-item list-group-item-action" id="ID5-list" data-bs-toggle="list" to="#ID5" role="tab" aria-controls="ID5">TWM!005</Link>

                    </div>

                </div>

                <div className="DataContent">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="ID1" role="tabpanel" aria-labelledby="ID1-list">
                            <DatosVehiculo />
                            <div className="numeroRegistro2">
                            </div>
                            
                        </div>

                        <div className="tab-pane fade" id="ID2" role="tabpanel" aria-labelledby="ID2-list">
                            <DatosVehiculo />
                            <div className="numeroRegistro2">
                                <p class="card-text numero">2</p>
                            </div>
                            
                        </div>

                        <div className="tab-pane fade" id="ID3" role="tabpanel" aria-labelledby="ID3-list">
                            <DatosVehiculo />
                            <div className="numeroRegistro2">
                                <p class="card-text numero">3</p>
                            </div>
                            
                        </div>

                        <div className="tab-pane fade" id="ID4" role="tabpanel" aria-labelledby="ID4-list">
                            <DatosVehiculo />
                            <div className="numeroRegistro2">
                                <p class="card-text numero">4</p>
                            </div>
                            
                        </div>

                        <div className="tab-pane fade" id="ID5" role="tabpanel" aria-labelledby="ID5-list">
                            <DatosVehiculo />
                            <div className="numeroRegistro2">
                                <p class="card-text numero">5</p>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListarVehiculos
