import React from 'react'
import { Link } from 'react-router-dom'

import '../Pages/styles/admv.css';

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
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Editar</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                    
               Aqui registramos la venta



                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                   
                   Aqui listamos y buscamos la venta, cada registro tendra un boton que abrira un popup para eliminar registro

                   
                    <div className="row">
                        
                        <div className="col">
                            
                            <div className="list-group" id="list-tab" role="tablist">
                                
                                <Link className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" to="#list-home" role="tab" aria-controls="list-home">TWM!001 </Link>
                                <Link className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" to="#list-profile" role="tab" aria-controls="list-profile">TWM!002 </Link>
                                <Link className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" to="#list-messages" role="tab" aria-controls="list-messages">TWM!003</Link>
                                <Link className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" to="#list-settings" role="tab" aria-controls="list-settings">TWM!004</Link>
                                <Link className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" to="#list-settings" role="tab" aria-controls="list-settings">TWM!005</Link>
                                
                            </div>
                            
                        </div>
                        
                        <div className="col">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Some placeholder content in a paragraph relating to "Home". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</div>
                                <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Some placeholder content in a paragraph relating to "Home". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</div>
                                <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Some placeholder content in a paragraph relating to "Home". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</div>
                                <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">Some placeholder content in a paragraph relating to "Home". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</div>
                            </div>
                        </div>
                    </div>
                

                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                    Aqui editamos la venta


                </div>
            </div>



            
            


        </div>
    )
}

export default admv
