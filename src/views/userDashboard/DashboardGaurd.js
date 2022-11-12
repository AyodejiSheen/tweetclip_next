import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";
import AuthContext from '../../context/auth/context';

const DashboardGuard = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext)
    return (
        !isAuthenticated ? <Navigate to="/dashboard" /> : children
    )
}

export default DashboardGuard