import Logo from '../../assets/media/logo.png'
import { useContext, useEffect } from 'react'
import UiContext from '../../context/UI/context'
import { Outlet } from 'react-router-dom'
import { Theme } from '../../components/theme'
import { ProfileNav } from '../../components/profileNav'
import AuthContext from '../../context/auth/context'
import { LinkImport } from '../../components/linkImport'
import ArtBoardContext from '../../context/artboard/context'





export const DashboardNav = () => {


    let { isDark, show, showItem } = useContext(UiContext)
    const { loadUsersDetails, isLoading, user } = useContext(AuthContext)
    const { getAllProjects } = useContext(ArtBoardContext)

    useEffect(() => {
        loadUsersDetails();
        getAllProjects();
    }, [isLoading])

    return (
        <>

            <div className={isDark === 'dark' ? 'dark' : ""}>
                <section className='bg-neutral-50 dark:bg-slate-900 h-screen'>

                    <div className='flex justify-between items-center px-4 md:px-6 lg:px-12 2xl:px-32 fixed w-full h-16 md:h-20 lg:h-24 py-3 lg:py-4 bg-neutral-100 dark:bg-slate-900 lg:gap-16 z-50'>
                        <div className='lg:w-1/5 xl:w-1/4'>
                            <img src={Logo} className="w-32 object-contain xl:w-64 md:w-44" alt='tweeclip-logo' />
                        </div>

                        <div className='lg:w-4/5 xl:w-2/3'>
                            <div className='flex justify-between items-center'>
                                <div className='hidden lg:flex gap-2 justify-center '>
                                    <div className='cursor-pointer border-2 dark:border-slate-600 dark:text-slate-300 px-6 xl:px-10 py-3 flex items-center justify-center rounded-xl space-x-2 text-sm  xl:text-base'>
                                        <i className="lni lni-save"></i>
                                        <p>Save</p>
                                    </div>

                                    <div onClick={() => showItem('import')} className='cursor-pointer border-2 dark:border-slate-600 dark:text-slate-300 px-6 xl:px-10 py-3 flex items-center justify-center rounded-xl space-x-2 text-sm  xl:text-base'>
                                        <i className="lni lni-cloud-download"></i>
                                        <p>Import</p>
                                    </div>

                                    <div className='cursor-pointer lg:hidden border-2 dark:border-slate-600 dark:text-slate-300 px-6 xl:px-10 py-3 flex items-center justify-center rounded-xl space-x-2 text-sm  xl:text-base '>
                                        <i className="lni lni-cloud-upload"></i>
                                        <p>Export</p>
                                    </div>
                                </div>

                                <div className='flex gap-2  md:gap-6  items-center'>
                                    <div className="flex  items-center flex-1 ">
                                        <div className="relative w-32 md:w-80 lg:w-64 focus-within:text-sky-500">
                                            <div className="absolute inset-y-0 flex items-center pl-3">
                                                <svg className="w-4 h-4 dark:text-slate-300" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <input className="w-full pl-8 pr-2 py-2 h-10 md:h-14  text-xs md:text-sm text-gray-700 placeholder-gray-600 bg-white-100 border-0 rounded-xl dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-slate-700 dark:text-slate-300 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Search for projects" aria-label="Search" />
                                        </div>
                                    </div>

                                    <div className='relative'>
                                        <Theme />
                                    </div>

                                    <div>
                                        {
                                            !isLoading && user.displayPic !== null ?
                                                <img src={`${user.displayPic.imageUrl}`} className=" cursor-pointer w-10 lg:w-14 rounded-xl" alt='img' onClick={() => showItem('profile')} />
                                                : !isLoading ?
                                                    <div className='cursor-pointer text-white bg-blue-500 dark:text-slate-300  w-10 h-10 lg:h-14 lg:w-14 flex items-center justify-center hover:text-blue-400 rounded-xl hover:dark:text-blue-400 text-2xl font-bold' onClick={() => showItem('profile')} >{user.email.charAt(0).toUpperCase()}</div> : ""
                                        }

                                        {
                                            show === "profile" && (
                                                <ProfileNav />
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        {
                            show === "import" && (
                                <LinkImport />
                            )
                        }

                        <Outlet />
                    </div>

                </section>
            </div>

        </>
    )
}