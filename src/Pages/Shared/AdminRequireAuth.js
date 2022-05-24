import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from './Loading/Loading';
const AdminRequireAuth = ({children}) => {
    let location = useLocation();
    let [admin,adminloading] = useAdmin()
    const [user, loading] = useAuthState(auth)
    if (loading||adminloading) {
        return <Loading></Loading>
    }
    
    if (!admin ||!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    // if (user) {
    //     return <Navigate to="/" state={{ from: location }} replace />
    // }
   
    return children
};

export default AdminRequireAuth;