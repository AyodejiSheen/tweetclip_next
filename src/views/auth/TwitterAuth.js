

import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'





const TwitterAuth = () => {


    const navigate = useNavigate();


    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    let res = JSON.parse(query.get("response"));

    const submit = () => {
        if (res.isSuccess === true) {
            navigate('/dashboard')
            return true;
        } else if (res.type === 3) {
            navigate('/new-device')
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
export default TwitterAuth