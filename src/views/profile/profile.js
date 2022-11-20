import { useContext, useEffect, useState } from "react"
import UiContext from "../../context/UI/context"
import { Link, useNavigate } from "react-router-dom"
import { Overview } from "./overview"
import { EditProfile } from "./editProfile"
import { Plan } from "./plan"
import { Security } from "./security"
import { Devices } from "./devices"
import AuthContext from "../../context/auth/context"
import PlanContext from "../../context/plans/context"





export const Profile = () => {

    let { navTabs, showNavTabs } = useContext(UiContext)
    const navigate = useNavigate();


    const { isLoading, user } = useContext(AuthContext);
    let { getPlans, plans } = useContext(PlanContext)


    useEffect(() => {
        getPlans()
    }, [])

    return (
        <>

            {
                !isLoading && user !== null ?

                    <section className='lg:flex items-center lg:flex-row p-5 lg:p-10 bg-neutral-50 dark:bg-slate-900 gap-y-6 lg:gap-y-0'>

                        <div className='lg:fixed lg:w-72 xl:w-1/4 px-8 inset-y-12 mt-16 md:mt-20 h-max  lg:h-auto dark:bg-slate-800 bg-slate-100 rounded-xl lg:rounded-2xl xl:rounded-[1.8rem] flex py-10'>

                            <div className='flex justify-between space-y-12 flex-col h-full w-full'>
                                <div>
                                    <button onClick={() => navigate(-1)} className="font-semibold bg-slate-300 px-6 py-2 rounded-full text-xs md:text-sm"> <i class="lni lni-arrow-left"></i> Back</button>
                                    <span>{user !== null}</span>
                                </div>

                                <div className="md:flex justify-center items-end gap-6 md:gap-16 space-y-8 lg:block">

                                    <div>
                                        {
                                            !isLoading && user.displayPic !== null ? (
                                                <img src={`${user.displayPic.imageUrl}`} className="mx-auto rounded-full w-36" alt='img' />
                                            ) : (
                                                <div className='mx-auto rounded-full flex items-center justify-center w-36 h-36 bg-blue-500 text-white text-6xl font-medium'>{user.email.charAt(0).toUpperCase()}</div>
                                            )
                                        }
                                    </div>

                                    <div className="text-center space-y-1.5">
                                        <h2 className="text-2xl md:text-3xl font-bold dark:text-slate-200">{user.displayName}</h2>
                                        <p className="text-sm dark:text-slate-400 break-words">{user.email}</p>

                                        <div>
                                            <button className="text-xs font-bold bg-emerald-200 text-green-600 dark:text-green-400 hover:dark:bg-green-700 dark:bg-emerald-900 px-5 py-2 rounded-lg hover:bg-green-500 dark:hover:text-white hover:text-white">Upgrade to pro</button>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-full mx-auto text-center">
                                    <button className="space-x-2 mx-auto xl:w-80 border-2 dark:border-slate-800  md:text-lg dark:text-slate-300 text-center px-7 md:px-10 py-2.5 lg:py-3.5 rounded-2xl bg-blue-500 text-white font-semibold hover:bg-blue-700">
                                        <i className="lni lni-cloud-upload"></i>
                                        <span className="font-semibold text-xs lg:text-sm">View Saved Projects</span>
                                    </button>
                                </div>
                            </div>
                        </div>



                        <div className='lg:w-2/3 xl:flex-1 lg:ml-80 xl:ml-[28%] my-8 lg:my-20  space-y-6'>
                            <div className=' gap-4 flex overflow-x-scroll overflow-hidden border-y py-2.5 dark:border-slate-600'>
                                <div onClick={() => showNavTabs("overview")} className={`cursor-pointer border-r-2 dark:border-slate-600 dark:text-slate-300  px-10 py-3 flex items-center justify-center space-x-2 text-sm md:text-base ${navTabs === "overview" ? "bg-blue-600 border-0 text-white dark:text-white" : ""}`}>
                                    <i className="lni lni-save"></i>
                                    <p>Overview</p>
                                </div>
                                <div onClick={() => showNavTabs("editProfile")} className={`cursor-pointer border-r-2 dark:border-slate-600 dark:text-slate-300  px-10 py-3 flex items-center justify-center  flex-none space-x-2 text-sm md:text-base ${navTabs === "editProfile" ? "bg-blue-600 border-0 text-white dark:text-white" : ""}`}>
                                    <i className="lni lni-cloud-download"></i>
                                    <p>Edit Profile</p>
                                </div>
                                <div onClick={() => showNavTabs("plan")} className={`cursor-pointer border-r-2 dark:border-slate-600 dark:text-slate-300  px-10 py-3 flex items-center justify-center space-x-2 text-sm md:text-base ${navTabs === "plan" ? "bg-blue-600 border-0 text-white dark:text-white" : ""}`}>
                                    <i className="lni lni-cloud-download"></i>
                                    <p>Plan</p>
                                </div>

                                <div onClick={() => showNavTabs("security")} className={`cursor-pointer border-r-2 dark:border-slate-600 dark:text-slate-300  px-10 py-3 flex items-center justify-center space-x-2 text-sm md:text-base ${navTabs === "security" ? "bg-blue-600 border-0 text-white dark:text-white" : ""}`}>
                                    <i className="lni lni-cloud-download"></i>
                                    <p>Security</p>
                                </div>

                                <div onClick={() => showNavTabs("activeDevice")} className={`cursor-pointer border-r-2 dark:border-slate-600 dark:text-slate-300  px-10 py-3 flex items-center justify-center  space-x-2 flex-none text-sm md:text-base ${navTabs === "activeDevice" ? "bg-blue-600 border-0 text-white dark:text-white" : ""}`}>
                                    <i className="lni lni-cloud-download"></i>
                                    <p>Active Device</p>
                                </div>
                            </div>

                            <div className={`rounded-2xl border-slate-300 border-2 dark:border-slate-600 px-5 md:px-8 py-6`}>

                                {
                                    navTabs === "overview" && (
                                        <div data-aos="fade-up">
                                            <Overview />
                                        </div>
                                    )
                                }

                                {
                                    navTabs === "editProfile" && (
                                        <div data-aos="fade-up">
                                            <EditProfile />
                                        </div>
                                    )
                                }

                                {
                                    navTabs === "plan" && (
                                        <div data-aos="fade-up">
                                            <Plan/>
                                        </div>
                                    )
                                }

                                {
                                    navTabs === "security" && (
                                        <div data-aos="fade-up">
                                            <Security />
                                        </div>
                                    )
                                }


                                {
                                    navTabs === "activeDevice" && (
                                        <div data-aos="fade-up">
                                            <Devices />
                                        </div>
                                    )
                                }


                                <div className="mt-8" data-aos="zoom-in">
                                    <div className=" border-2 border-dotted p-4 md:p-7 rounded-xl bg-yellow-50 dark:bg-orange-700 border-yellow-600 dark:bg-opacity-20">
                                        <div className="flex gap-6 md:items-center">
                                            <div className="text-yellow-400">
                                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                    <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor"></rect>
                                                    <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor"></rect>
                                                </svg>
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="md:text-lg text-slate-600 font-semibold dark:text-slate-300">We need your attention!</h3>
                                                <p className='font-semibold text-slate-400 text-xs md:text-sm'>Your payment was declined. To start using tools, please <Link to="/" className='text-sky-600'> Add Payment Method.</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </section>


                    :

                    <p>Welcome home</p>
            }

        </>
    )
}