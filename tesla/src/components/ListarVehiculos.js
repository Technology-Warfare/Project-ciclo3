import React from 'react'
import { Link } from 'react-router-dom'
import DatosVehiculo from './DatosVehiculo'
import '../Pages/styles/ListarVehiculos.css';

const ListarVehiculos = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light SearchPosition">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button class ="btn btn-outline-success" type ="submit">Buscar</button>
                    </form>
                </div>
            </nav>
            <div className="row">

                <div className="col-2">

                    <div className="list-group" id="list-tab" role="tablist">

                        <Link className="list-group-item list-group-item-action active" id="ID1-list" data-bs-toggle="list" to="#ID1" role="tab" aria-controls="ID1">TWM!001 </Link>

                        <Link className="list-group-item list-group-item-action" id="ID2-list" data-bs-toggle="list" to="#ID2" role="tab" aria-controls="ID2">TWM!002 </Link>

                        <Link className="list-group-item list-group-item-action" id="ID3-list" data-bs-toggle="list" to="#ID3" role="tab" aria-controls="ID3">TWM!003</Link>

                        <Link className="list-group-item list-group-item-action" id="ID4-list" data-bs-toggle="list" to="#ID4" role="tab" aria-controls="ID4">TWM!004</Link>

                        <Link className="list-group-item list-group-item-action" id="ID5-list" data-bs-toggle="list" to="#ID5" role="tab" aria-controls="ID5">TWM!005</Link>

                    </div>

                </div>

                <div className="col-10">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="ID1" role="tabpanel" aria-labelledby="ID1-list">
                            
                            <div className="numeroRegistro">
                                <p class="card-text numero">1</p>
                            </div>
                            <DatosVehiculo />
                        </div>

                        <div className="tab-pane fade" id="ID2" role="tabpanel" aria-labelledby="ID2-list">
                            
                            <div className="numeroRegistro">
                                <p class="card-text numero">2</p>
                            </div>
                            <DatosVehiculo />
                        </div>

                        <div className="tab-pane fade" id="ID3" role="tabpanel" aria-labelledby="ID3-list">
                           
                            <div className="numeroRegistro">
                                <p class="card-text numero">3</p>
                            </div>
                            <DatosVehiculo />
                        </div>

                        <div className="tab-pane fade" id="ID4" role="tabpanel" aria-labelledby="ID4-list">
                            
                            <div className="numeroRegistro">
                                <p class="card-text numero">4</p>
                            </div>
                            <DatosVehiculo />
                        </div>

                        <div className="tab-pane fade" id="ID5" role="tabpanel" aria-labelledby="ID5-list">
                            
                            <div className="numeroRegistro">
                                <p class="card-text numero">5</p>
                            </div>
                            <DatosVehiculo />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListarVehiculos
