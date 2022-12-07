import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({ redirectPath = '/login' }) => {
    const authState = useSelector((state) => state.auth);
    const location = useLocation();

    

    if (!authState.isAuthenticated) {
        return <Navigate to={redirectPath} state={{from : location }} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute