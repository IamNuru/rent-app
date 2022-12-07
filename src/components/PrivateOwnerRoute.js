import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateOwnerRoute = ({ redirectPath = '/login' }) => {
    const authState = useSelector((state) => state.auth);
    const location = useLocation();

    if (authState.user.type !=='owner') {
        return <Navigate to='/not-allowed' state={{from : location }} replace />;
    }

    return <Outlet />;
};

export default PrivateOwnerRoute