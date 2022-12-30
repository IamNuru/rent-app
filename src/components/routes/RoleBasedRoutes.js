import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useGetAuthUserQuery } from '../../features/api/userApiService';


const RoleBasedRoutes = ({ redirectPath = '/login', allowedRoles }) => {
    const location = useLocation();

    const { data } = useGetAuthUserQuery();


    return allowedRoles?.includes(data?.user?.type)
        ? <Outlet />
        :
        <Navigate to="/not-allowed" state={{ from: location }} replace />
};

export default RoleBasedRoutes;