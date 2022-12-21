import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({ redirectPath = '/login' }) => {
    const authState = useSelector((state) => state.auth);
    const location = useLocation();
    const token = window.localStorage.getItem('token');

    if(token ){
        if(authState.isAuthenticated){
            return <Outlet />;
        }else{
            return <Navigate to={redirectPath} state={{ from: location }} replace />;
        }
    }else{
        return <Navigate to={redirectPath} state={{ from: location }} replace />;
    }


    /* if (!authState.isAuthenticated) {
        return <Navigate to={redirectPath} state={{ from: location }} replace />;
    } */

};

export default PrivateRoute