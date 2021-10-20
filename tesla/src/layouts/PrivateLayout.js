import React from 'react';

import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import PrivateRoute from '../components/PrivateRoute';
import '../Pages/styles/PrivateLayout.css';

const PrivateLayout = ({children}) => {

    return (
        <PrivateRoute>
            <div className="flex">
                <Sidebar />
                <main>
                    {children}
                </main>
            </div>
            <Footer /> 
        </PrivateRoute>
        
    )
}

export default PrivateLayout;
