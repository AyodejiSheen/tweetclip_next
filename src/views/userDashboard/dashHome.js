import Logo from '../../assets/media/logo.png'
import { useContext, useEffect } from 'react'
import UiContext from '../../context/UI/context'
import { Outlet } from 'react-router-dom'
import { Theme } from '../../components/theme'
import { ProfileNav } from '../../components/profileNav'
import AuthContext from '../../context/auth/context'
import { Loading } from 'notiflix'
import { Artboard } from './artboard'
import { LinkImport } from '../../components/linkImport'
import ArtBoardContext from '../../context/artboard/context'
import { Controls } from './controls'




export const DashHome = () => {

    let { isDark, show, showItem } = useContext(UiContext)


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

            {/* {
                loading ? */}


                    <section className='flex flex-col lg:flex-row p-5 lg:p-10 items-start bg-neutral-50 dark:bg-slate-900 gap-y-6 lg:gap-y-0'>
                        <div className='fixed w-1/4 px-8 inset-y-24 dark:bg-slate-800  bg-neutral-100 rounded-xl lg:rounded-[1.8rem] h-full'>
                            <Controls />
                        </div>

                        <div className=''>
                            {
                                show === "import" && (
                                    <LinkImport />
                                )
                            }
                            <Artboard />
                        </div>
                    </section>

                    {/* :

                    Loading.standard()
            } */}



        </>
    )
}
