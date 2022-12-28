import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = ({ redirectPath = '/login' }) => {
    const location = useLocation();
    const token = window.localStorage.getItem('token');
    //const { isSuccess, data, isLoading, isError, error } = useGetAuthUserQuery();


    if (token) {
       return <Outlet />
    } else {
        return <Navigate to={redirectPath} state={{ from: location }} replace />;
    }


};

export default PrivateRoute