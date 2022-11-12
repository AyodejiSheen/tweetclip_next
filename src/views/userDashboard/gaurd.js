import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";
import AuthContext from '../../context/auth/context';

const DashboardGuard = ({ children }) => {

    const { isAuthenticated, isLoading } = useContext(AuthContext)

    console.log(isAuthenticated)
    console.log(isLoading)

    return (
        !isAuthenticated && !isLoading ? <Navigate to="/login" /> : children
    )
}

export default DashboardGuard