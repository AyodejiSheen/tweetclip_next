import Logo from '../../assets/media/logo.png'
import { useContext, useEffect } from 'react'
import UiContext from '../../context/UI/context'
import { Outlet, useNavigate } from 'react-router-dom'
import { Theme } from '../../components/theme'
import { ProfileNav } from '../../components/profileNav'
import AuthContext from '../../context/auth/context'
import { Loading } from 'notiflix'
import { Artboard } from './artboard'
import { LinkImport } from '../../components/linkImport'
import ArtBoardContext from '../../context/artboard/context'
import { Controls } from './controls'
import { AllProjects } from './allProject'


export const NewProject = () => {

    let { isDark, show, showItem } = useContext(UiContext)
    const navigate = useNavigate();


    const { loadUsersDetails, loading, isLoading, user } = useContext(AuthContext)

    const { getAllArtboards } = useContext(ArtBoardContext)

    useEffect(() => {
        // loadUsersDetails()
        Loading.remove();
        getAllArtboards();
        // eslint-disable-next-line
    }, [])




    return (
        <>
            <section className='flex flex-col items-center lg:flex-row p-5 lg:p-10 bg-neutral-50 dark:bg-slate-900 '>

                <div className='w-full lg:fixed lg:w-72 xl:w-1/4 px-8 inset-y-16 lg:mt-16 lg:h-auto dark:bg-slate-800 py-10 bg-slate-100 rounded-xl lg:rounded-2xl xl:rounded-[1.8rem] flex order-2 lg:order-1 overflow-y-scroll'>
                    <div className='w-full'>
                        <Controls />
                    </div>
                </div>

                <div className='lg:w-2/3 xl:flex-1 lg:ml-80 xl:ml-[28%] my-8 lg:my-20 order-1 lg:order-2 w-full mt-16 md:mt-2'>
                    <Artboard />
                </div>
            </section>

        </>
    )
}