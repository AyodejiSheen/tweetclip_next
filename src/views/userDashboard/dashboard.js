import { Loading } from "notiflix"
import { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
import AuthContext from "../../context/auth/context"




export const Dashboard = () => {

    const { loadUsersDetails, isLoading, user } = useContext(AuthContext)


    useEffect(() => {
        setTimeout(() => {
            loadUsersDetails()
            console.log(user)
            Loading.remove();
        }, 2000)
    }, [])


    return (
        <>


            {
                !isLoading ? <Outlet /> : Loading.standard()
            }


        </>
    )
}