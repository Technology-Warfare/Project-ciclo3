import React from 'react'
import '../Pages/styles/home.css';
import modely from "../Pages/img/ModelY/y.jpg";
import yy from "../Pages/img/ModelY/yy.jpg";
import yyy from "../Pages/img/ModelY/yyy.jpg";
import yyyy from "../Pages/img/ModelY/yyyy.jpg";


const ModelT = () => {
    return (
        <>
        <div className='contenedorImagen'><img src={modely} alt= "img1"/></div>    
        <div className='section center'>
        El Tesla Model Y es un SUV compacto y 100% eléctrico, del segmento D, fabricado por Tesla. Se trata de la versión crossover del Tesla Model 3, con quien comparte tecnología, plataforma, mecánicas y un 75% de los componentes. El Tesla Model Y se presentó en marzo de 2019, aunque no llegó a España hasta 2021. El precio del Tesla Model Y parte desde 56.980 euros, un precio bastante más contenido que los 97.000 euros de partida del Tesla Model X. El Tesla Model Y se caracteriza por sus 7 plazas y por contar con una gran batería de iones de litio que le proporciona una autonomía eléctrica de entre 480 y 540 kilómetros, dependiendo de la versión. El Tesla Model Y se fabrica en las instalaciones de Tesla en California, así como en una nueva fábrica en Shanghái (China).</div>
        <h2><div className='center paddingh'>Caraterísticas del Tesla Model X</div></h2>
        <ul className='ul1'>
            <li className='center'><img className='img'src={yy} alt= "img1"/></li>
            <li className='center'><img className='img'src={yyy} alt= "img1"/></li>
            <li className='center'><img className='img'src={yyyy} alt= "img1"/></li>
        </ul> 
        <ul className='ul'>
            <li className='center'><h5 className='h5'>Carrocería</h5><div >SUV Mediano</div></li>
            <li className='center'><h5 className='h5'>Potencia</h5><div>476 - 490 cv</div></li>
            <li className='center'><h5 className='h5'>Plazas</h5><div>7</div></li>
            <li className='center'><h5 className='h5'>Consumo</h5><div>I/100km</div></li>
            <li className='center'><h5 className='h5'>Velocidad Máxima</h5><div>193km/h</div></li>
        </ul> 
        </> 
    )
}


export default ModelT
