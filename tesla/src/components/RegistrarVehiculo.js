import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Button } from '@mui/material';
import PrivateComponent from './PrivateComponent';

const RegistrarVehiculo = () => {

    const [vehiculos, setVehiculos] = useState({
        marca:'',
        modelo:'',
        generacion:'',
        serie:'',
        modificacion:'',
        equipamiento:'',
        descripcion:'',
        observaciones:''
    })

    const handleChange = (event) => {
        setVehiculos({
            ...vehiculos,
            [event.target.name]:event.target.value
        })
    };

    const handleSubmit = async (e) => {
        console.log(vehiculos.marca+" "+vehiculos.modelo+" "+vehiculos.generacion+" "+vehiculos.serie+" "+vehiculos.modificacion+" "+vehiculos.descripcion+" "+
        vehiculos.equipamiento+" "+vehiculos.observaciones)
        e.preventDefault();
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/vehiculos/nuevo',
            headers: { 'Content-Type': 'application/json' },
            data:{
                marca : vehiculos.marca,
                modelo: vehiculos.modelo,
                generacion : vehiculos.generacion,
                serie : vehiculos.serie,
                modificacion : vehiculos.modificacion,
                equipamiento : vehiculos.equipamiento,
                descripcion : vehiculos.descripcion,
                observaciones : vehiculos.observaciones
            },
        };
        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success('Vehículo agregado con éxito');
                window.location="/dashboard/vehiculos";
            })
            .catch(function (error) {
                console.error(error);
                toast.error('Error creando un vehículo');
            });
    }

    return (
        <div>
            <PrivateComponent roleList={['administrador', 'vendedor']}>
                <form onSubmit={handleSubmit}>
            <div className="form">
                <div class="input-group mb-3">
                    <div className="input-group flex-nowrap">
                        <label className="input-group-text" for="marca">Marca</label>
                        <select onChange={handleChange} name="marca" className="form-select" id="marca">
                            <option selected>Seleccione</option>
                            <option value="Tesla">Tesla</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="fForm">
                <div className="form">
                    <div className="input-group">
                        <label className="input-group-text" for="modelo">Modelo</label>
                        <select onChange={handleChange} name="modelo" className="form-select" id="modelo">
                            <option selected>Seleccione</option>
                            <option value="Model S">Model S</option>
                            <option value="Model 3">Model 3</option>
                            <option value="Model X">Model X</option>
                            <option value="Model Y">Model Y</option>
                        </select>
                    </div>
                </div>
                <div className="form">
                    <div className="input-group">
                        <label className="input-group-text" for="generacion">Generación</label>
                        <select onChange={handleChange} name="generacion" className="form-select" id="generacion">
                            <option selected>Seleccione</option>
                            <option value="1ra generación [2015 - 2021]">1ra generación [2012 - 2020]</option>
                            <option value="1ra generación [2015 - 2021]">1ra generación [2015 - 2021]</option>
                            <option value="1ra generación [2017 - 2021]">1ra generación [2017 - 2021]</option>
                        </select>
                        
                    </div>
                </div>
            </div>
            <div className="fForm">
                <div className="form">
                    <div class="input-group mb-3">
                        <label className="input-group-text" for="serie">Serie</label>
                        <select onChange={handleChange} name="serie" className="form-select" id="serie">
                            <option selected>Seleccione</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Crossover">Crossover</option>
                            <option value="Liftbek">Liftbek</option>
                        </select>
                    </div>
                </div>
                <div className="form">
                    <div className="input-group flex-nowrap">
                        <label className="input-group-text" for="modificacion">Modificación</label>
                        <select onChange={handleChange} name="modificacion" className="form-select" id="modificacion">
                            <option selected>Seleccione</option>
                            <option value="190kw (258 cv) tracción, transmisión automática">190kw (258 cv) tracción, transmisión automática</option>
                            <option value="258kw (351 cv) tracción, transmisión automática">258kw (351 cv) tracción, transmisión automática</option>
                            <option value="262 cv transmisión automática">262 cv transmisión automática</option>
                            <option value="340 kVt (462 cv) tracción, transmisión automática">340 kVt (462 cv) tracción, transmisión automática</option>
                            <option value="340kw (462 cv a) tracción, transmisión automática">340kw (462 cv a) tracción, transmisión automática</option>
                            <option value="AT (341 kVt) 4WD">AT (341 kVt) 4WD</option>
                            <option value="AT 4WD (333 cv)">AT 4WD (333 cv)</option>
                            <option value="AT (271 cv)">AT (271 cv)</option>
                            <option value="60 (306 cv)">60 (306 cv)</option>
                        </select>
                    </div>
                </div>
                <div className="form">
                    <div className="input-group flex-nowrap">
                        <label className="input-group-text" for="equipamento">Equipamento</label>
                        <select onChange={handleChange} name="equipamiento" className="form-select" id="equipamento">
                            <option selected>Seleccione</option>
                            <option value="----------------">----------------</option>
                            <option value="Long Range">Long Range</option>
                            <option value="Performance">Performance</option>
                            <option value="Model Y">Model Y</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="fForm">
                <div className="form">
                    <label for="descripcion" className="form-label">Descripcion detallada</label>
                    <textarea onChange={handleChange} name="descripcion" type="text" class="form-control" id="descripcion" rows="3"></textarea>
                </div>
                <div className="form">
                    <label for="observaciones" className="form-label">Observaciones generales</label>
                    <textarea onChange={handleChange} name="observaciones" type="text" class="form-control" id="observaciones" rows="3"></textarea>
                </div>
            </div>
            <Button type="submit" className="button mt-3 mb-5" variant="contained">Submit</Button>
            <ToastContainer
                position="bottom-center"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
            />
            </form>
            </PrivateComponent>
            
        </div>
    )
}

export default RegistrarVehiculo
