import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import '../Pages/styles/home.css';
import modelx from "../Pages/img/ModelX/modelx.jpg";
import x from "../Pages/img/ModelX/x.jpg";
import xx from "../Pages/img/ModelX/xx.jpg";
import xxx from "../Pages/img/ModelX/xxx.jpg";


const ModelX = () => {
    return (
        <>
        <div className='contenedorImagen'><img src={modelx} alt= "img1"/></div>
        <div className='section4 center'>
        El Tesla Model X es un SUV completamente eléctrico, del segmento E, fabricado por Tesla desde 2016, con enfoque Premium y con posibilidad de acomodar hasta siete personas. Actualmente se comercializa la primera generación. El Tesla Model X se caracteriza por su elevada potencia, ofreciendo una versión con hasta 1.020 CV de potencia que hace un 0-100 km/h en 2,6 segundos, así como por contar con una gran batería de iones de litio que le proporciona una autonomía eléctrica de hasta 580 kilómetros. El Tesla Model X se fabrica en la planta de Tesla en Fremont, California.
        </div>
        <h2><div className='center paddingh'>Caraterísticas del Tesla Model X</div></h2>
        <ul className='ul1'>
            <li className='center'><img className='img'src={x} alt= "img1"/></li>
            <li className='center'><img className='img'src={xx} alt= "img1"/></li>
            <li className='center'><img className='img'src={xxx} alt= "img1"/></li>
        </ul> 
        <ul className='ul'>
            <li className='center'><h5 className='h5'>Carrocería</h5><div >SUV Grande</div></li>
            <li className='center'><h5 className='h5'>Potencia</h5><div>670 - 1020 cv</div></li>
            <li className='center'><h5 className='h5'>Plazas</h5><div>7</div></li>
            <li className='center'><h5 className='h5'>Consumo</h5><div>I/100km</div></li>
            <li className='center'><h5 className='h5'>Velocidad Máxima</h5><div>250km/h</div></li>
            <li className='center'><h5 className='h5'>Valoracion en el mercado</h5>
                <div className="center">
                    <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
                    </Stack> 
                </div>
            </li>
        </ul>    
        </>
    )
}


export default ModelX