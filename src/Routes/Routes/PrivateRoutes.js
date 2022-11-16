import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(authContext);
    const location = useLocation();
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (user) {
        return children

    }
    return <Navigate state={{ from: location }} replace></Navigate>


};

export default PrivateRoutes;