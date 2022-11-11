import React from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'





const GoogleAuth = () => {

    const navigate = useNavigate();


    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    let res = JSON.parse(query.get("response"));
    console.log(res)

    const submit = () => {
        if (res.isSuccess === true) {
            navigate('/dashboard')
            return true;
        } else if (res.type === 3) {
            navigate(`/new-device/${res.email}/${res.id}`)
        }
    }

    useEffect(() => {
        submit()
    });


    return (
        <>

        </>
    )
}
export default GoogleAuth