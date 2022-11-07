import { useContext } from "react"
import UiContext from "../../context/UI/context"
import dp from '../../assets/media/dp.png'
import { Link, useNavigate } from "react-router-dom"
import { Theme } from "../../components/theme"
import { Overview } from "./overview"
import { EditProfile } from "./editProfile"
import { Plan } from "./plan"



export const Profile = () => {

    let { isDark, navTabs, showNavTabs } = useContext(UiContext)

    const navigate = useNavigate();


    return (
        <>

            <div className={isDark === 'dark' ? 'dark' : ""}>

                <section className='flex flex-col lg:flex-row gap-10 p-5 xl:p-10 lg:h-screen  bg-neutral-50 dark:bg-slate-900 gap-y-6 lg:gap-y-0'>
                    <div className='w-full lg:w-1/3 2xl:w-1/4  dark:bg-slate-800  bg-neutral-100 rounded-xl lg:rounded-[1.8rem] lg:py-8 lg:px-12 p-6'>
                        <div className="flex justify-between flex-col h-full gap-6">
                            <div className="flex justify-between items-center">
                                <div>
                                    <button onClick={() => navigate(-1)} className="font-semibold bg-slate-300 px-6 py-2 rounded-full text-sm"> <i class="lni lni-arrow-left"></i> Back</button>
                                </div>
                                <div>
                                    <Theme />
                                </div>
                            </div>

                            <div className="flex justify-center items-end gap-6 md:gap-10 space-y-8 lg:block">
                                <div>
                                    <img src={dp} className="mx-auto rounded-full w-48" alt="img" />
                                </div>
                                <div className="text-center space-y-1.5">
                                    <h2 className="text-2xl md:text-3xl font-bold dark:text-slate-200">Max Smith</h2>
                                    <p className="text-sm dark:text-slate-400">maxsmith009@gmail</p>

                                    <div>
                                        <button className="text-xs font-bold bg-emerald-200 text-green-600 dark:text-green-400 hover:dark:bg-green-700 dark:bg-emerald-900 px-5 py-2 rounded-lg hover:bg-green-500 dark:hover:text-white hover:text-white">Upgrade to pro</button>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mx-auto text-center">
                                <button className="space-x-2 mx-auto xl:w-80 border-2 dark:border-slate-800 text-lg dark:text-slate-300 text-center px-10 py-3 lg:py-5 rounded-2xl bg-blue-500 text-white font-semibold">
                                    <i className="lni lni-cloud-upload"></i>
                                    <span className="font-semibold text-sm">View Saved Projects</span>
                                </button>
                            </div>
                        </div>

                    </div>


                    <div className='w-full lg:w-2/3 2xl:w-3/4  rounded-[3rem] space-y-7 '>

                        <div className='flex gap-4 order-2 lg:order-1 justify-start overflow-x-scroll'>
                            <div onClick={() => showNavTabs("overview")} className={`cursor-pointer border-2 dark:border-slate-600 dark:text-slate-300  px-10 py-3 flex items-center justify-center rounded-xl space-x-2 text-sm md:text-base ${navTabs === "overview" ? "bg-blue-600 border-0 text-white dark:text-white" : ""}`}>
                                <i className="lni lni-save"></i>
                                <p>Overview</p>
                            </div>
                            <div onClick={() => showNavTabs("editProfile")} className={`cursor-pointer border-2 dark:border-slate-600 dark:text-slate-300  px-10 py-3 flex items-center justify-center rounded-xl flex-none space-x-2 text-sm md:text-base ${navTabs === "editProfile" ? "bg-blue-600 border-0 text-white dark:text-white" : ""}`}>
                                <i className="lni lni-cloud-download"></i>
                                <p>Edit Profile</p>
                            </div>
                            <div onClick={() => showNavTabs("plan")} className={`cursor-pointer border-2 dark:border-slate-600 dark:text-slate-300  px-10 py-3 flex items-center justify-center rounded-xl space-x-2 text-sm md:text-base ${navTabs === "plan" ? "bg-blue-600 border-0 text-white dark:text-white" : ""}`}>
                                <i className="lni lni-cloud-download"></i>
                                <p>Plan</p>
                            </div>

                            <div onClick={() => showNavTabs("security")} className={`cursor-pointer border-2 dark:border-slate-600 dark:text-slate-300  px-10 py-3 flex items-center justify-center rounded-xl space-x-2 text-sm md:text-base ${navTabs === "security" ? "bg-blue-600 border-0 text-white dark:text-white" : ""}`}>
                                <i className="lni lni-cloud-download"></i>
                                <p>Security</p>
                            </div>

                            <div onClick={() => showNavTabs("activeDevice")} className={`cursor-pointer border-2 dark:border-slate-600 dark:text-slate-300  px-10 py-3 flex items-center justify-center rounded-xl space-x-2 flex-none text-sm md:text-base ${navTabs === "activeDevice" ? "bg-blue-600 border-0 text-white dark:text-white" : ""}`}>
                                <i className="lni lni-cloud-download"></i>
                                <p>Active Device</p>
                            </div>
                        </div>

                        <div className={`rounded-2xl border-slate-300 border-2 dark:border-slate-600 p-8`}>

                            {
                                navTabs === "overview" && (
                                    <Overview />
                                )
                            }

                            {
                                navTabs === "editProfile" && (
                                    <EditProfile />
                                )
                            }


                            {
                                navTabs === "plan" && (
                                    <Plan />
                                )
                            }

                            <div className="mt-8">
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

            </div >

        </>
    )
}