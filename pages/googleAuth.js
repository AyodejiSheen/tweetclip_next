import React, { useContext } from 'react'
import { useEffect } from 'react';
import AuthContext from '../context/auth/context';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';






const GoogleAuth = () => {

    let { otherAuth } = useContext(AuthContext)

    const searchParams = useSearchParams();
    const router = useRouter();

    function useQuery() {
        return searchParams;
    }

    let query = useQuery();

    let res = JSON.parse(query.get("response"));

    const submit = () => {
        localStorage.setItem('ctoken', res.token)
        if (res.isSuccess === true) {
            otherAuth(res.token)
            return true;
        } else if (res.type === 3) {
            router.push(`/new-device/${res.email}/${res.device}`)
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