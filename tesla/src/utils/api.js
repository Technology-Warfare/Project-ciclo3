import axios from 'axios';

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

const obtenerUsuarios = async (setDatos) => {
    const options = { method: 'GET', 
    url: 'http://localhost:5000/usuarios',
    headers:{
    Authorization : getToken(), }, 
  };
  await axios.request(options)
  .then(function (response){
    setDatos(response.data); 
  })
  .catch(function (error) {
    console.error(error);
  });
};

export const obtenerVehiculos = async (setDatos) => {
    const options = { method: 'GET', 
    url: 'http://localhost:5000/vehiculos' };
    await axios
        .request(options)
        .then(function (response) {
            setDatos(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
    };

export default obtenerUsuarios;

  