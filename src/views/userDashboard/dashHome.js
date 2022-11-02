import Logo from '../../assets/media/logo.png'
import dp from '../../assets/media/dp.png'
import { useContext } from 'react'
import UiContext from '../../context/UI/context'
import { Outlet } from 'react-router-dom'
import { Theme } from '../../components/theme'
import ArtBoardContext from '../../context/artboard/context'
import { ProfileNav } from '../../components/profileNav'




export const DashHome = () => {

    let { isDark, show, showItem } = useContext(UiContext)

    let {color} = useContext(ArtBoardContext)

    console.log("color: ",  color)


    return (
        <>
            <div className={isDark === 'dark' ? 'dark' : ""}>

                <section className='flex flex-col lg:flex-row p-5 lg:p-10 lg:h-screen items-start bg-neutral-50 dark:bg-slate-900 gap-y-6 lg:gap-y-0'>
                    <div className=' lg:mt-0 w-full lg:w-1/4 lg:fixed overflow-y-scroll dark:bg-slate-800  bg-neutral-100 rounded-xl lg:rounded-[1.8rem] lg:h-[92%] inset-10 lg:py-8 lg:px-12 p-6 order-2 lg:order-1 lg:space-y-14 space-y-10 '>
                        <div>
                            <img src={Logo} className="w-64" alt='imga' />
                        </div>

                        <div>
                            <Outlet />
                        </div>
                    </div>


                    <div className='w-full lg:flex-1 lg:ml-[28%]  h-[100%] lg:inset-10 rounded-[3rem] order-1 lg:order-2 space-y-7 '>
                        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-6 lg:gap-y-0'>
                            <div className='flex gap-2 order-2 lg:order-1 justify-center '>
                                <div className='border-2 dark:border-slate-600 dark:text-slate-300 px-6 md:px-10 py-3 flex items-center justify-center rounded-xl space-x-2 text-sm md:text-base '>
                                    <i className="lni lni-save"></i>
                                    <p>Save</p>
                                </div>
                                <div className='border-2 dark:border-slate-600 dark:text-slate-300 px-6 md:px-10 py-3 flex items-center justify-center rounded-xl space-x-2 text-sm md:text-base '>
                                    <i className="lni lni-cloud-download"></i>
                                    <p>Import</p>
                                </div>
                                <div className='lg:hidden border-2 dark:border-slate-600 dark:text-slate-300 px-6 md:px-10 py-3 flex items-center justify-center rounded-xl space-x-2 text-sm md:text-base '>
                                    <i className="lni lni-cloud-upload"></i>
                                    <p>Export</p>
                                </div>
                            </div>

                            <div className='flex gap-4 lg:gap-6 order-1 lg:order-2 items-center'>
                                {/* search bar */}
                                <div className="flex  items-center flex-1 ">
                                    <div className="relative lg:w-64  focus-within:text-sky-500">
                                        <div className="absolute inset-y-0 flex items-center pl-3">
                                            <svg className="w-4 h-4 dark:text-slate-300" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input className="w-full pl-8 pr-2 py-2 h-14 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-xl dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-slate-700 dark:text-slate-300 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Search for projects" aria-label="Search" />
                                    </div>
                                </div>

                                {/* notifications */}
                                <div className='border-2 w-10 h-10 lg:h-14 lg:w-14 flex items-center justify-center rounded-xl dark:border-slate-600 dark:text-slate-300'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z" fill="currentColor"></path>
                                        <path d="M19 15V18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V15C6.1 15 7 14.1 7 13V10C7 7.6 8.7 5.6 11 5.1V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V5.1C15.3 5.6 17 7.6 17 10V13C17 14.1 17.9 15 19 15ZM11 10C11 9.4 11.4 9 12 9C12.6 9 13 8.6 13 8C13 7.4 12.6 7 12 7C10.3 7 9 8.3 9 10C9 10.6 9.4 11 10 11C10.6 11 11 10.6 11 10Z" fill="currentColor"></path>
                                    </svg>
                                </div>

                                {/* dark mode */}
                                <div className='relative'>
                                    <div onClick={() => showItem("darkMode")} className='cursor-pointer border-2 dark:border-slate-600 dark:text-slate-300  w-10 h-10 lg:h-14 lg:w-14 flex items-center justify-center hover:text-blue-400 rounded-xl hover:dark:text-blue-400'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z" fill="currentColor"></path>
                                            <path d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z" fill="currentColor"></path>
                                            <path d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z" fill="currentColor"></path>
                                            <path d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z" fill="currentColor"></path>
                                        </svg>
                                    </div>

                                    {
                                        show === "darkMode" && (
                                            <Theme/>
                                        )
                                    }

                                </div>

                                {/* profile pics */}
                                <div>
                                    <img src={dp} className="w-12 lg:w-14 rounded-xl" alt='img' onClick={() => showItem('profile')} />

                                    {
                                        show === "profile" && (
                                            <ProfileNav/>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={`flex justify-center items-center h-96 lg:h-[90%] rounded-2xl`} style={{backgroundColor:`${color}`}}>
                            <h1 className='text-4xl text-white font-extrabold text-center'>This is the Artboard</h1>
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}

