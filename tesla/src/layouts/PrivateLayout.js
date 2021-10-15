import React from 'react';

import Sidebar from '../components/Sidebar';
import PrivateRoute from '../components/PrivateRoute';
import Footer from '../components/Footer';

const PrivateLayout = ({children}) => {
    return (
        <>
        <PrivateRoute>
            <div className="flex">
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
            <Footer />  
        </PrivateRoute>
        </>
    )
}

export default PrivateLayout;
