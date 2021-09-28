import React from 'react'
import '../Pages/styles/home.css';
import models from "../Pages/img/ModelS/sss.jpg";
import ss from "../Pages/img/ModelS/ss.jpg";
import sss from "../Pages/img/ModelS/s.jpg";
import ssss from "../Pages/img/ModelS/ssss.jpg";

const ModelS = () => {
    return (
        <>
             <div className='contenedorImagen'><img src={models} alt= "img1"/></div>
             <div className='section center'>
                 El Tesla Model S es una berlina de lujo completamente eléctrica, del segmento E fabricada por Tesla desde 2012. Aunque se trata de un producto veterano, ha sufrido ligeras actualizaciones con el paso de los años. El Tesla Model S tiene cinco plazas distribuidas en dos filas de asientos, pero opcionalmente se puede equipar con siete plazas gracias a una tercera fila con dos asientos para niños. El Tesla Model S se produce en la planta de fabricación que Tesla tiene en Fremont, California (Estados Unidos).
             </div>
             <h2><div className='center paddingh'>Caraterísticas del Tesla Model S</div></h2>
             <ul className='ul1'>
                 <li className='center'><img className='img'src={ss} alt= "img1"/></li>
                 <li className='center'><img className='img'src={ssss} alt= "img1"/></li>
                 <li className='center'><img className='img'src={sss} alt= "img1"/></li>
             </ul> 
             <ul className='ul'>
                 <li className='center'><h5 className='h5'>Carrocería</h5><div >Berlina</div></li>
                 <li className='center'><h5 className='h5'>Potencia</h5><div>670 - 1020 cv</div></li>
                 <li className='center'><h5 className='h5'> Plazas</h5><div> 5 </div></li>
                 <li className='center'><h5 className='h5'>Consumo</h5><div>I/100km</div></li>
                 <li className='center'><h5 className='h5'>Velocidad Máxima</h5><div>322km/h</div></li>
             </ul>
      
        </>
    )
}

export default ModelS