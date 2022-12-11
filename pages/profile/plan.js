import { useContext, useState } from "react"
import PlanContext from "../../context/plans/context"
import UiContext from "../../context/UI/context"
import Head from "next/head"
import AuthContext from "../../context/auth/context"
import { useRouter } from "next/router"


export const Plan = () => {

    const [details, setDetails] = useState('startup')
    const [planType, setPlanType] = useState('monthly')

    const router = useRouter();

    let { allPlans, loadingPlan, userSubscribe } = useContext(PlanContext)
    let { setAlert, alert } = useContext(UiContext)
    let { isAuthenticated } = useContext(AuthContext)


    const handlePlanType = (value) => {
        setPlanType(value)
    }


    const handleChange = (value) => {
        setDetails(value)
    }


    const createTrans = (id) => {
        if (!isAuthenticated) {
            router.push('login')
        } else {
            setAlert({ msg: null, type: "loading" })
            userSubscribe(id);
        }
    }







    return (
        <>

            {/* <Head>
                <title>Plan</title>
            </Head> */}



            {
                loadingPlan ?

                    <section className=" dark:bg-slate-900 ">
                        <section className="space-y-7 my-3">

                            <section className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">

                                {
                                    allPlans.map((eachplan, i) => {
                                        console.log(i, eachplan.name)
                                        return (
                                            <div key={i} className="shadow-xl dark:border-slate-600 rounded-xl p-6 space-y-5">
                                                <h2 className={`text-white font-semibold text-center p-3 rounded-md ${i === 1 ? 'bg-yellow-300 text-black' : 'bg-blue-600'}`}>{eachplan.name.toUpperCase()}</h2>

                                                {
                                                    eachplan.plansToFeatures.map((eachfeature) => {
                                                        return (
                                                            <div className="rounded-lg dark:border-slate-600 p-5 space-y-4">
                                                                <p className="text-center border-b pb-4 font-medium">Features</p>
                                                                <div className="flex gap-3  ">
                                                                    <p><i class="lni lni-checkmark-circle"></i></p>
                                                                    <p>{eachfeature.feature.name}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                                <div className="grid grid-cols-2 gap-3 text-sm font-medium items-center justify-items-stretch text-center">
                                                    {
                                                        eachplan.prices.map((price) => {
                                                            return (

                                                                <div className="rounded-full items-center cursor-pointer bg-blue-600 text-white py-5 font-semibold px-6" onClick={() => createTrans(price.id)}>
                                                                    {price.unit_amount} {price.currency} /<span>{price.recurring === 2 ? "Year" : price.recurring === 1 ? "Month" : ""}</span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </section>
                        </section>
                    </section>

                    :

                    <p className="text-center">Loading...</p>
            }

        </>
    )
}