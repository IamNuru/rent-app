import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const RoleBasedRoutes = ({ redirectPath = '/login', allowedRoles }) => {
    const authState = useSelector((state) => state.auth)
    const location = useLocation();



    return allowedRoles?.includes(authState?.user?.type)
        ? <Outlet />
        :
        <Navigate to="/not-allowed" state={{ from: location }} replace />
};

export default RoleBasedRoutes;