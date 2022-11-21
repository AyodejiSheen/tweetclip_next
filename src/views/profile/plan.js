import { useContext, useState } from "react"
import PlanContext from "../../context/plans/context"
import { Loading } from 'notiflix'
import UiContext from "../../context/UI/context"


export const Plan = () => {

    const [details, setDetails] = useState('startup')
    const [planType, setPlanType] = useState('monthly')


    let { allPlans, loadingPlan, userSubscribe } = useContext(PlanContext)

    let { setAlert, alert } = useContext(UiContext)


    const handlePlanType = (value) => {
        setPlanType(value)
    }


    const handleChange = (value) => {
        setDetails(value)
    }


    const createTrans = (id) => {
        setAlert({ msg: null, type: "loading" })
        userSubscribe(id);
    }







    return (
        <>
            {
                loadingPlan ?

                    <section className=" dark:bg-slate-900 ">
                        <div className="border-b-2 border-slate-300 dark:border-slate-600 pb-3">
                            <div className="text-center space-y-3">
                                <h2 className="text-2xl text-slate-800 dark:text-slate-300 font-bold">Upgrade a Plan</h2>
                                <p className="text-slate-500">If you need more info, please check <span className="font-bold text-blue-600">Pricing Guidelines.</span></p>
                            </div>
                        </div>

                        <section className="space-y-7 my-3">
                            <div className="flex w-max mx-auto rounded-xl dark:border-slate-600 p-2 border">
                                <div>
                                    <button onClick={() => handlePlanType("monthly")} className={`text-sm lg:text-base dark:hover:text-slate-200 dark:hover:font-medium py-3 px-6 rounded-xl dark:text-slate-500  ${planType === "monthly" ? "dark:bg-slate-700 bg-slate-200 dark:text-white" : ""}`}>Monthly</button>
                                </div>

                                <div>
                                    <button onClick={() => handlePlanType('yearly')} className={`text-sm lg:text-base dark:hover:text-slate-200 dark:hover:font-medium py-3 px-6 rounded-xl dark:text-slate-500  ${planType === "yearly" ? "dark:bg-slate-700 bg-slate-200 dark:text-white" : ""}`}>Annually</button>
                                </div>
                            </div>


                            {/* {
                                planType === "monthly" ? (
                                    <div className="xl:flex gap-12 space-y-5 xl:space-y-0" >
                                        <div className="xl:w-1/2 space-y-4">
                                            {
                                        allPlans.map((each) => {
                                            return (

                                                <div onClick={() => handleChange("startup")} className={`cursor-pointer hover:border-transparent transition-all duration-500 border-dotted  dark:border-slate-700 border-2 p-6 border-slate-300 rounded-xl flex items-center flex-wrap justify-between ${details === "startup" ? "text-white bg-blue-500 border-transparent dark:border-transparent" : ""}`}>
                                                    <div className="flex items-center gap-6">
                                                        <div className={`rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-slate-200 dark:bg-slate-700 ${details === "startup" ? "bg-white dark:bg-white" : ""}`}> </div>
                                                        <div>
                                                            <h5 className="font-semibold text-lg lg:text-xl dark:text-slate-200">{each.name.toUpperCase()}</h5>
                                                            <p className="text-xs lg:text-sm font-medium dark:text-slate-600">{each.description}</p>
                                                        </div>
                                                    </div>
                                                    <div className="items-end">
                                                        <h2 className="font-bold text-2xl lg:text-5xl dark:text-slate-200"> <sub className={`text-xs lg:text-sm text-slate-400  ${details === "startup" ? "text-slate-200" : ""}`}>$</sub> {each.prices[1].unit_amount}<sub className={`text-xs lg:text-sm text-slate-400  ${details === "startup" ? "text-slate-200 " : ""}`}>/ Mon</sub></h2>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                            <div onClick={() => handleChange("advanced")} className={`cursor-pointer hover:border-transparent transition-all duration-500 border-dotted  dark:border-slate-700 border-2 p-6 border-slate-300 rounded-xl flex items-center flex-wrap justify-between ${details === "advanced" ? "text-white bg-blue-500 border-transparent dark:border-transparent" : ""}`}>
                                                <div className="flex items-center gap-6">
                                                    <div className={`rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-slate-200 dark:bg-slate-700 ${details === "advanced" ? "bg-white dark:bg-white" : ""}`}> </div>
                                                    <div>
                                                        <h5 className="font-semibold text-lg lg:text-xl dark:text-slate-200">Advanced</h5>
                                                        <p className="text-xs lg:text-sm font-medium dark:text-slate-600">Best for 100+ </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h2 className="font-bold text-2xl lg:text-5xl dark:text-slate-200"> <sub className={`text-xs lg:text-sm text-slate-400  ${details === "advanced" ? "text-slate-200" : ""}`}>$</sub> 399<sub className={`text-xs lg:text-sm text-slate-400  ${details === "advanced" ? "text-slate-200 " : ""}`}>/ Mon</sub></h2>
                                                </div>
                                            </div>

                                            <div onClick={() => handleChange("custom")} className={`cursor-pointer hover:border-transparent transition-all duration-500 border-dotted  dark:border-slate-700 border-2 p-6 border-slate-300 rounded-xl flex items-center flex-wrap justify-between ${details === "custom" ? "text-white bg-blue-500 border-transparent dark:border-transparent" : ""}`}>
                                                <div className="flex items-center gap-6">
                                                    <div className={`rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-slate-200 dark:bg-slate-700 ${details === "custom" ? "bg-white dark:bg-white" : ""}`}> </div>
                                                    <div>
                                                        <h5 className="font-semibold text-lg lg:text-xl dark:text-slate-200">Custom</h5>
                                                        <p className="text-xs lg:text-sm font-medium dark:text-slate-600">Request a custom license</p>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <button className="bg-emerald-700 text-white text-xs md:text-base font-medium rounded-lg mt-4 px-6 py-2.5 md:mt-0 md:px-6 md:py-2">Contact Us</button>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="xl:w-1/2  bg-slate-100 dark:bg-slate-700 p-6 md:p-12 rounded-2xl">

                                            {
                                                details === "startup" ? (

                                                    <div className="space-y-5">
                                                        <div>
                                                            <h2 className="text-lg md:text-2xl text-slate-800 dark:text-slate-300 font-semibold">What's in Startup Plan?</h2>
                                                            <p className="text-xs md:text-base text-slate-500">Optimal for 10+ team size and new startup </p>
                                                        </div>

                                                        <div className="space-y-4">
                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold  text-sm md:text-base ">Up to 30 Project Integrations</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold  text-sm md:text-base ">Analytics Module</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold  text-sm md:text-base ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold text-sm md:text-base  ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>

                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold text-sm md:text-base  ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                ) : details === "advanced" ? (
                                                    <div className="space-y-5">
                                                        <div>
                                                            <h2 className="text-lg md:text-2xl text-slate-800 dark:text-slate-300 font-semibold">What's in Advanced Plan?</h2>
                                                            <p className="text-xs md:text-base text-slate-500">Optimal for 10+ team size and new startup </p>
                                                        </div>

                                                        <div className="space-y-4">
                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold  text-sm md:text-base ">Up to 30 Project Integrations</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold  text-sm md:text-base ">Analytics Module</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold  text-sm md:text-base ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold text-sm md:text-base  ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>

                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold text-sm md:text-base  ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="space-y-5">
                                                        <div>
                                                            <h2 className="text-2xl text-slate-800 dark:text-slate-300 font-semibold">What's in Enterprise Plan?</h2>
                                                            <p className="text-slate-500">Optimal for 10+ team size and new startup </p>
                                                        </div>

                                                        <div className="space-y-4">
                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold   ">Up to 30 Project Integrations</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold   ">Analytics Module</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold   ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold   ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>

                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold   ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )

                                            }

                                            <div className="flex justify-end">
                                                <button className="bg-blue-500 px-6 md:py-3 py-2.5 rounded-xl text-white font-semibold mt-8">Upgrade Plan</button>
                                            </div>










                                        </div>
                                    </div>
                                ) : (
                                    <div className="xl:flex gap-12 space-y-5 xl:space-y-0" >
                                        <div className="xl:w-1/2 space-y-4">
                                            <div onClick={() => handleChange("startup")} className={`cursor-pointer hover:border-transparent transition-all duration-500 border-dotted  dark:border-slate-700 border-2 p-6 border-slate-300 rounded-xl flex items-center flex-wrap justify-between ${details === "startup" ? "text-white bg-blue-500 border-transparent dark:border-transparent" : ""}`}>
                                                <div className="flex items-center gap-6">
                                                    <div className={`rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-slate-200 dark:bg-slate-700 ${details === "startup" ? "bg-white dark:bg-white" : ""}`}> </div>
                                                    <div>
                                                        <h5 className="font-semibold text-lg lg:text-xl dark:text-slate-200">Startup</h5>
                                                        <p className="text-xs lg:text-sm font-medium dark:text-slate-600">Best for startups</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h2 className="font-bold text-2xl lg:text-5xl dark:text-slate-200"> <sub className={`text-xs lg:text-sm text-slate-400  ${details === "startup" ? "text-slate-200" : ""}`}>$</sub> 399<sub className={`text-xs lg:text-sm text-slate-400  ${details === "startup" ? "text-slate-200 " : ""}`}>/ Yr</sub></h2>
                                                </div>
                                            </div>

                                            <div onClick={() => handleChange("advanced")} className={`cursor-pointer hover:border-transparent transition-all duration-500 border-dotted  dark:border-slate-700 border-2 p-6 border-slate-300 rounded-xl flex items-center flex-wrap justify-between ${details === "advanced" ? "text-white bg-blue-500 border-transparent dark:border-transparent" : ""}`}>
                                                <div className="flex items-center gap-6">
                                                    <div className={`rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-slate-200 dark:bg-slate-700 ${details === "advanced" ? "bg-white dark:bg-white" : ""}`}> </div>
                                                    <div>
                                                        <h5 className="font-semibold text-lg lg:text-xl dark:text-slate-200">Advanced</h5>
                                                        <p className="text-xs lg:text-sm font-medium dark:text-slate-600">Best for 100+ </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h2 className="font-bold text-2xl lg:text-5xl dark:text-slate-200"> <sub className={`text-xs lg:text-sm text-slate-400  ${details === "advanced" ? "text-slate-200" : ""}`}>$</sub> 3999<sub className={`text-xs lg:text-sm text-slate-400  ${details === "advanced" ? "text-slate-200 " : ""}`}>/ Yr</sub></h2>
                                                </div>
                                            </div>


                                            <div onClick={() => handleChange("enterprise")} className={`cursor-pointer hover:border-transparent border-dotted border-spacing-7 dark:border-slate-700 border-2 p-6 border-slate-300 rounded-xl flex items-center  flex-wrap justify-between ${details === "enterprise" ? "text-white bg-blue-500 border-transparent dark:border-transparent" : ""}`}>
                                        <div className="flex items-center gap-6">
                                            <div className={`rounded-full h-8 w-8 bg-slate-200 dark:bg-slate-700 ${details === "enterprise" ? "bg-white dark:bg-white" : ""}`}> </div>
                                            <div>
                                                <div className="flex gap-4">
                                                    <h5 className="font-semibold text-xl dark:text-slate-200">Enterprise</h5>
                                                    <div>
                                                        <button className="text-xs font-bold bg-emerald-100 text-green-600 dark:text-green-400  dark:bg-emerald-900 px-5 py-2 rounded-lg">Popular</button>
                                                    </div>
                                                </div>
                                                <p className="text-sm font-medium dark:text-slate-600">Best for 1000+ </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-5xl dark:text-slate-200"> <sub className={`text-sm text-slate-400  ${details === "enterprise" ? "text-slate-200" : ""}`}>$</sub> 999<sub className={`text-sm text-slate-400  ${details === "enterprise" ? "text-slate-200" : ""}`}>/ Mon</sub></h2>
                                        </div>
                                    </div>


                                            <div onClick={() => handleChange("custom")} className={`cursor-pointer hover:border-transparent transition-all duration-500 border-dotted  dark:border-slate-700 border-2 p-6 border-slate-300 rounded-xl flex items-center flex-wrap justify-between ${details === "custom" ? "text-white bg-blue-500 border-transparent dark:border-transparent" : ""}`}>
                                                <div className="flex items-center gap-6">
                                                    <div className={`rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-slate-200 dark:bg-slate-700 ${details === "custom" ? "bg-white dark:bg-white" : ""}`}> </div>
                                                    <div>
                                                        <h5 className="font-semibold text-lg lg:text-xl dark:text-slate-200">Custom</h5>
                                                        <p className="text-xs lg:text-sm font-medium dark:text-slate-600">Request a custon license</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="bg-emerald-700 text-white font-medium text-xs md:text-base rounded-lg mt-4 px-6 py-2.5 md:mt-0 md:px-6 md:py-2">Contact Us</button>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="xl:w-1/2  bg-slate-100 dark:bg-slate-700 p-6 md:p-12 rounded-2xl">

                                            {
                                                details === "startup" ? (
                                                    <div className="space-y-5">
                                                        <div>
                                                            <h2 className="text-lg md:text-2xl text-slate-800 dark:text-slate-300 font-semibold">What's in Startup Plan?</h2>
                                                            <p className="text-xs md:text-base text-slate-500">Optimal for 10+ team size and new startup </p>
                                                        </div>

                                                        <div className="space-y-4">
                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold  text-sm md:text-base ">Up to 30 Project Integrations</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold  text-sm md:text-base ">Analytics Module</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold  text-sm md:text-base ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold text-sm md:text-base  ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>

                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold text-sm md:text-base  ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : details === "advanced" ? (
                                                    <div className="space-y-5">
                                                        <div>
                                                            <h2 className="text-lg md:text-2xl text-slate-800 dark:text-slate-300 font-semibold">What's in Advanced Plan?</h2>
                                                            <p className="text-xs md:text-base text-slate-500">Optimal for 10+ team size and new startup </p>
                                                        </div>

                                                        <div className="space-y-4">
                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold  text-sm md:text-base ">Up to 30 Project Integrations</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold  text-sm md:text-base ">Analytics Module</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold  text-sm md:text-base ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold text-sm md:text-base  ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>

                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold text-sm md:text-base  ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="space-y-5">
                                                        <div>
                                                            <h2 className="text-2xl text-slate-800 dark:text-slate-300 font-semibold">What's in Enterprise Plan?</h2>
                                                            <p className="text-slate-500">Optimal for 10+ team size and new startup </p>
                                                        </div>

                                                        <div className="space-y-4">
                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold   ">Up to 30 Project Integrations</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold   ">Analytics Module</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold   ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>


                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold   ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>

                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <p className="dark:text-slate-400 font-semibold   ">Up to 10 Active Users</p>
                                                                </div>
                                                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )

                                            }

                                            <div className="flex justify-end">
                                                <button className="bg-blue-500 px-6 py-3 rounded-xl text-white font-semibold mt-8">Upgrade Plan</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } */}


                            {
                                allPlans.map((each) => {
                                    return (

                                        planType === "monthly" ? (
                                            <div key={each.index} index={each.index} className="xl:flex gap-12 space-y-5 xl:space-y-0">
                                                <div className="xl:w-1/2 space-y-4">
                                                    <div onClick={() => handleChange("startup")} className={`cursor-pointer hover:border-transparent transition-all duration-500 border-dotted  dark:border-slate-700 border-2 p-6 border-slate-300 rounded-xl flex items-center flex-wrap justify-between ${details === "startup" ? "text-white bg-blue-500 border-transparent dark:border-transparent" : ""}`}>
                                                        <div className="flex items-center gap-6">
                                                            <div className={`rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-slate-200 dark:bg-slate-700 ${details === "startup" ? "bg-white dark:bg-white" : ""}`}> </div>
                                                            <div>
                                                                <h5 className="font-semibold text-lg lg:text-xl dark:text-slate-200">{each.name.toUpperCase()}</h5>
                                                                <p className="text-xs lg:text-sm font-medium dark:text-slate-600">{each.description}</p>
                                                            </div>
                                                        </div>
                                                        <div className="items-end">
                                                            <h2 className="font-bold text-2xl lg:text-5xl dark:text-slate-200"> <sub className={`text-xs lg:text-sm text-slate-400  ${details === "startup" ? "text-slate-200" : ""}`}>$</sub> {each.prices[each.index].unit_amount}<sub className={`text-xs lg:text-sm text-slate-400  ${details === "startup" ? "text-slate-200 " : ""}`}>/ Mon</sub></h2>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="xl:w-1/2  bg-slate-100 dark:bg-slate-700 p-6 md:p-12 rounded-2xl">
                                                    <div className="space-y-5">
                                                        <div>
                                                            <h2 className="text-lg md:text-2xl text-slate-800 dark:text-slate-300 font-semibold">What's in {each.name}?</h2>
                                                        </div>
                                                        {
                                                            each.plansToFeatures.map((feat) => {
                                                                return (
                                                                    <div className="space-y-4">
                                                                        <div className="flex justify-between">
                                                                            <div>
                                                                                <p className="dark:text-slate-400 font-semibold  text-sm md:text-base ">- {feat.feature.name}</p>
                                                                            </div>
                                                                            <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                                <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                                                            </svg></div>
                                                                        </div>

                                                                        <div className="flex justify-end">
                                                                            <button disabled={alert.type === "loading"}
                                                                                onClick={() => createTrans(each.prices[1].id)}
                                                                                className="block w-full p-4  mt-6 text-sm font-semibold text-center text-white transition-colors duration-150 bg-blue-500 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue" type='submit'
                                                                            >
                                                                                {alert.type === "loading" ? (
                                                                                    <div className="flex gap-1.5 items-center justify-center">
                                                                                        Loading...
                                                                                        <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                                                                        </svg>
                                                                                    </div>
                                                                                ) : (
                                                                                    <p>Subscribe Now</p>
                                                                                )}
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>

                                            </div>
                                        )

                                    )
                                })
                            }




                        </section>
                    </section>

                    :

                    Loading.standard()
            }

        </>
    )
}