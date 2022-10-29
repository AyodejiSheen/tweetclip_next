import React from 'react'
import { useLocation } from 'react-router-dom'





const GoogleAuth = () => {


    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    
    let query = useQuery();

    console.log(JSON.parse(query.get("response")));

    return (
        <>

        </>
    )
}
export default GoogleAuth