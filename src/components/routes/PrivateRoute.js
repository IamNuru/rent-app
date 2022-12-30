import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useGetAuthUserQuery } from '../../features/api/userApiService';
import SuspenseFallback from '../SuspenseFallback';

const PrivateRoute = ({ redirectPath = '/login' }) => {
    const location = useLocation();
    //const token = window.localStorage.getItem('token');
    const { isSuccess, data, isLoading } = useGetAuthUserQuery();


    if (isLoading){
        return <SuspenseFallback />
    }

    if (isSuccess && data?.user) {
       return <Outlet />
    } else {
        return <Navigate to={redirectPath} state={{ from: location }} replace />;
    }


};

export default PrivateRoute