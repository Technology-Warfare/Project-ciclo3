import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({children}) => {
    const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    
    useEffect(() => {
        const fetchAuth0Token = async () => {
            const accesToken = await getAccessTokenSilently({
                audience: `api-autenticaion-technowarfare`,
            });
            localStorage.setItem('token', accesToken);
            console.log(accesToken);
        };
        if (isAuthenticated) {
            fetchAuth0Token();
          }
    }, []);

    if (isLoading) {
        <div>Loading...</div>
    }
    
      return <>{children}</>;
};

export default PrivateRoute;
