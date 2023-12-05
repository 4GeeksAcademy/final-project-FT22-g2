import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ redirectPath = '/', children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to={redirectPath} replace />
    }

    return children
}

export default PrivateRoute;


