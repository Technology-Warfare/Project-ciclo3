import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchAuth0Token = async() => {
            const accessToken = await getAccessTokenSilently({
                audience: `api-autenticacion-technology-warfare`,
            });
            localStorage.setItem('token', accessToken);
            console.log(accessToken);
        };
        if (isAuthenticated){
            fetchAuth0Token();
        }
    }, [isAuthenticated, getAccessTokenSilently])

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
