import React, { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const DatosBack = () => {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/usuarios') 
        .then(result => {
            setDatos(result.data)
        })
        .catch(console.error)
    }, []);

    return datos
}

const Table = () => {

    const datos = DatosBack()

    return (
        <>
            <div className="table-responsive">
                <table className="table table-sm table-hover">
                    <thead className="table-active">
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo documento</th>
                            <th>Número</th>
                            <th>Edad</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map(item => (
                            <tr key={item.id}>
                                <td>{item.nombre + " " + item.apellido}</td>
                                <td>{item.documento}</td>
                                <td>{item.numerodocumento}</td>
                                <td>{item.edad}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;
