import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import MetodoDePago from '../pages/metodoDePago.jsx';


const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;