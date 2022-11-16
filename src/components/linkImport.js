// import dp from '../../assets/dp.png'

import { useContext } from "react"
import UiContext from "../context/UI/context"



export const LinkImport = (props) => {


    let { showItem } = useContext(UiContext)




    return (
        <>

            <div className="absolute top-0 left-0" >
                <div className="inset-0 fixed bg-slate-800 w-screen z-50 h-[100vh] bg-opacity-70 flex items-center px-3">

                    <div data-aos="fade-down"  data-aos-duration="600"  data-aos-easing="ease-in-out" className="rounded-lg space-y-4 bg-white dark:bg-slate-700 mx-auto w-full lg:w-2/3 2xl:w-1/2 py-3">
                        <div className="flex justify-between items-center  2xl:px-8  border-b dark:border-slate-600 py-4  px-4 md:px-6">
                            <div>
                                <h2 className="text-sm 2xl:text-xl font-bold dark:text-slate-400">Import Tweet Link</h2>
                            </div>

                            <div>
                                <button onClick={() => showItem('import')} className="text-lg 2xl:text-2xl dark:text-slate-300"><i class="lni lni-close"></i></button>
                            </div>
                        </div>

                        <div className='2xl:px-8  py-7  px-4 md:px-6 space-y-4'>
                            <div className="flex gap-4 items-start">
                                <div className='flex-1'>
                                    <div className="flex justify-center flex-1 ">
                                        <input className="w-full pl-8 py-6 text-sm text-gray-700 dark:text-slate-300 bg-gray-100 dark:bg-slate-500 border-0 rounded-md dark:focus:shadow-outline-gray  focus:placeholder-gray-500 focus:bg-white focus:border-orange-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Paste tweet link..." />

                                    </div>
                                </div>
                            </div>

                            <div className='py-4 flex items-center justify-end'>
                                <div className=''>
                                    <button className="flex gap-3 items-center w-full bg-blue-500 py-4 px-6 rounded-lg text-white shadow-lg dark:shadow-slate-700 shadow-blue-500 hover:bg-blue-700 transition-all duration-500">
                                        <i class="lni lni-download"></i>
                                        <span className="font-semibold">Import Link</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}