import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { obtenerDatosUsuarios } from '../utils/api';
import { useUser } from '../context/user';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();
    const  { setUserData } = useUser();

    useEffect(() => {
        const fetchAuth0Token = async() => {
            const accessToken = await getAccessTokenSilently({
                audience: `api-autenticacion-technology-warfare`,
            });
            localStorage.setItem('token', accessToken);
            console.log(accessToken);
            await obtenerDatosUsuarios(
                (res) => {
                    console.log('response datos usuarios', res);
                    setUserData(res.data);
                },
                (error) => {
                  console.error('Salio un error:', error);
                }
            );
            
        };
        if (isAuthenticated){
            fetchAuth0Token();
        }
    }, [isAuthenticated, getAccessTokenSilently, setUserData])

    if (isLoading) return <div>loading...</div>

    if(!isAuthenticated){
        return loginWithRedirect()
    }

    return isAuthenticated ? (
    <>{children}</>
    ):(
    <div>No estas autorizado.</div>
    )
};

export default PrivateRoute;
