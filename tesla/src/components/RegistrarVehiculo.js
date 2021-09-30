import React from 'react'

const RegistrarVehiculo = () => {
    return (
        <div>
            <div className="form">
                <div class="input-group mb-3">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text">ID vehiculo</span>
                        <div className="form-floating">
                            <input type="email" class="form-control" id="inIdVehiculo" />
                            <label for="inIdVehiculo" class="form-label">TMM
                            </label>
                        </div>
                        <label className="input-group-text" for="tipo">Tipo</label>
                        <select className="form-select" id="tipo">
                            <option selected>Seleccione</option>
                            <option value="1">Electrico</option>
                        </select>
                        <label className="input-group-text" for="marca">Marca</label>
                        <select className="form-select" id="marca">
                            <option selected>Seleccione</option>
                            <option value="1">Tesla</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="fForm">
                <div className="form">
                    <div className="input-group">
                        <label className="input-group-text" for="modelo">Modelo</label>
                        <select className="form-select" id="modelo">
                            <option selected>Seleccione</option>
                            <option value="1">Model S</option>
                            <option value="1">Model 3</option>
                            <option value="1">Model X</option>
                            <option value="1">Model Y</option>
                            <option value="1">Solar Roof</option>
                            <option value="1">Solar Panels</option>
                        </select>
                    </div>
                </div>
                <div className="form">
                    <div className="input-group">
                        <label className="input-group-text" for="generacion">Generación</label>
                        <select className="form-select" id="generacion">
                            <option selected>Seleccione</option>
                            <option value="1">1ra generación [2017 - 2021]</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="fForm">
                <div className="form">
                    <div class="input-group mb-3">
                        <label className="input-group-text" for="serie">Serie</label>
                        <select className="form-select" id="serie">
                            <option selected>Seleccione</option>
                            <option value="1">Sedan</option>
                        </select>
                    </div>
                </div>
                <div className="form">
                    <div className="input-group flex-nowrap">
                        <label className="input-group-text" for="modificacion">Modificación</label>
                        <select className="form-select" id="modificacion">
                            <option selected>Seleccione</option>
                            <option value="1">190kw (258 cv) tracción, transmisión automática</option>
                            <option value="2">258kw (351 cv) tracción, transmisión automática</option>
                            <option value="3">262 cv transmisión automática</option>
                            <option value="4">340 kVt (462 cv) tracción, transmisión automática</option>
                            <option value="5">340kw (462 cv a) tracción, transmisión automática</option>
                            <option value="6">AT (341 kVt) 4WD</option>
                        </select>
                    </div>
                </div>
                <div className="form">
                    <div className="input-group flex-nowrap">
                        <label className="input-group-text" for="equipamento">Equipamento</label>
                        <select className="form-select" id="equipamento">
                            <option selected>Seleccione</option>
                            <option value="1">Long Range</option>
                            <option value="2">Performance</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="fForm">
                <div className="form">
                    <label for="descripcion" className="form-label">Descripcion detallada</label>
                    <textarea class="form-control" id="descripcion" rows="3"></textarea>
                </div>
                <div className="form">
                    <label for="observaciones" className="form-label">Observaciones generales</label>
                    <textarea class="form-control" id="observaciones" rows="3"></textarea>
                </div>
            </div>

            
        </div>
    )
}

export default RegistrarVehiculo
