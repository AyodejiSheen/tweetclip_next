import { Outlet } from "react-router-dom"
import { useContext, useEffect } from 'react'
import { Loading } from "notiflix"
import AuthContext from "../../context/auth/context"




export const Artboard = () => {

    const { loadUsersDetails } = useContext(AuthContext)

    useEffect(() => {
        setTimeout(() => {
            loadUsersDetails()
            Loading.remove();
        }, 2000)
    }, [])



    return (
        <>

            <Outlet />

        </>
    )
}