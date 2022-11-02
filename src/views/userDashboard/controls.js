import { useContext } from "react"
import UiContext from "../../context/UI/context"
import { Color } from "./color/color"
import { Icons } from "./icon/icon"
import { Layout } from "./layout/layout"
import { Slogan } from "./slogan/slogan"
import { Text } from "./text/text"


export const Controls = () => {

    let { showItem, show } = useContext(UiContext)

    return (
        <>

            <div className='space-y-4'>
                <div>
                    <div onClick={() => showItem('color')} className='cursor-pointer px-6 border-2 dark:border-slate-600 text-lg flex justify-between font-light dark:text-slate-300 text-center py-5 w-full rounded-lg'>
                        <p className="font-medium">Color</p>
                        <p><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={show === 'color' ? "rotate-90 transition duration-300" : "transition duration-300"}>
                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
                        </svg></p>
                    </div>
                    {
                        show === "color" && (
                            <div className="">
                                <Color />
                            </div>
                        )
                    }
                </div>


                <div>
                    <div onClick={() => showItem('text')} className='cursor-pointer px-6 border-2 dark:border-slate-600 text-lg flex justify-between font-light dark:text-slate-300 text-center py-5 w-full rounded-lg'>
                        <p className="font-medium">Text</p>
                        <p><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={show === 'text' ? "rotate-90 transition duration-300" : "transition duration-300"}>
                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
                        </svg></p>
                    </div>
                    {
                        show === "text" && (
                            <div className="">
                                <Text />
                            </div>
                        )
                    }
                </div>

                <div>
                    <div onClick={() => showItem('slogan')} className='cursor-pointer px-6 border-2 dark:border-slate-600 text-lg flex justify-between font-light dark:text-slate-300 text-center py-5 w-full rounded-lg'>
                        <p className="font-medium">Slogan</p>
                        <p><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={show === 'slogan' ? "rotate-90 transition duration-300" : "transition duration-300"}>
                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
                        </svg></p>
                    </div>
                    {
                        show === "slogan" && (
                            <div className="">
                                <Slogan />
                            </div>
                        )
                    }
                </div>

                <div>
                    <div onClick={() => showItem('icon')} className='cursor-pointer px-6 border-2 dark:border-slate-600 text-lg flex justify-between font-light dark:text-slate-300 text-center py-5 w-full rounded-lg'>
                        <p className="font-medium">Icon</p>
                        <p><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={show === 'icon' ? "rotate-90 transition duration-300" : "transition duration-300"}>
                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
                        </svg></p>
                    </div>
                    {
                        show === "icon" && (
                            <div className="">
                                <Icons />
                            </div>
                        )
                    }
                </div>

                <div>
                    <div onClick={() => showItem('layout')} className='cursor-pointer px-6 border-2 dark:border-slate-600 text-lg flex justify-between font-light dark:text-slate-300 text-center py-5 w-full rounded-lg'>
                        <p className="font-medium">Layout</p>
                        <p><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={show === 'layout' ? "rotate-90 transition duration-300" : "transition duration-300"}>
                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
                        </svg></p>
                    </div>
                    {
                        show === "layout" && (
                            <div className="">
                                <Layout />
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="bottom-20 fixed hidden lg:block">
                <button className="space-x-2 w-96 border-2 dark:border-slate-600 text-lg dark:text-slate-300 text-center py-5 rounded-lg bg-blue-500 text-white font-semibold">
                    <i className="lni lni-cloud-upload"></i>
                    <span className="font-semibold">Export Project</span>
                </button>
            </div>

        </>
    )
}