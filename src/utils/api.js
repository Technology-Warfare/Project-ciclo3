import axios from 'axios';

export const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerUsuarios = async (successCallback, errorCallback) => {
    const options = { method: 'GET', 
    url: 'https://whispering-plains-86813.herokuapp.com/usuarios',
    headers:{
    Authorization : getToken() 
    }, 
  };
  await axios.request(options)
  .then(successCallback)
  .catch(errorCallback);
};

export const obtenerDatosUsuarios = async (successCallback, errorCallback) => {
  const options = { method: 'GET', 
  url: 'https://whispering-plains-86813.herokuapp.com/usuarios/self',
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
    url: 'https://whispering-plains-86813.herokuapp.com/vehiculos',
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
    url: 'https://whispering-plains-86813.herokuapp.com/ventas',
    headers:{
      Authorization : getToken() 
    },
  };
  await axios.request(options)
  .then(successCallback)
  .catch(errorCallback);
};


  