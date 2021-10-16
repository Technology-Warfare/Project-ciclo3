import axios from 'axios';

export const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerUsuarios = async (successCallback, errorCallback) => {
    const options = { method: 'GET', 
    url: 'http://localhost:5000/usuarios',
    headers:{
    Authorization : getToken() 
    }, 
  };
  await axios.request(options)
  .then(successCallback)
  .catch(errorCallback);
};

export const obtenerVehiculos = async (successCallback, errorCallback) => {
    const options = { method: 'GET', 
    url: 'http://localhost:5000/vehiculos',
    headers:{
      Authorization : getToken() 
      },
    };
    await axios.request(options)
    .then(successCallback)
    .catch(errorCallback);
    };

export const obtenerVentas = async (successCallback, errorCallback) => {
  const options = { method: 'GET', 
    url: 'http://localhost:5000/ventas',
    headers:{
      Authorization : getToken() 
    },
  };
  await axios.request(options)
  .then(successCallback)
  .catch(errorCallback);
};


  