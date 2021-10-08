import axios from 'axios';

/*export const obtenerUsuarios = async (setUsuarios) => {
    const options = { method: 'GET', url: 'http://localhost:5000/usuarios' };
    await axios
      .request(options)
      .then(function (response) {
        setUsuarios(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    };*/

export const crearUsuario = async (setUsuarios) =>{
    const options = { method:'POST', url: 'http://localhost:5000/usuarios/nuevo' };
    await axios
        .request(options)
        .then(function (response){
            setUsuarios(response.data);
        })
        .catch(function (error){
            console.error(error);
        });
};

  