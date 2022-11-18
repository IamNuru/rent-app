import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({ redirectPath = '/' }) => {
    const authState = useSelector((state) => state.auth);

    if (!authState.isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute