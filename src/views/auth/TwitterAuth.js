

import React from 'react'
import { useLocation } from 'react-router-dom'





const TwitterAuth = () => {


    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    let res = JSON.parse(query.get("response"));

    console.log(res)
    


    return (
        <>

        </>
    )
}
export default TwitterAuth