import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'





const GoogleAuth = () => {


    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    let res = JSON.parse(query.get("response"));

    useEffect(() => {
        console.log(res);
    }, [res]);


    return (
        <>

        </>
    )
}
export default GoogleAuth