import { useContext, useEffect } from 'react'
import UiContext from '../../context/UI/context'
import AuthContext from '../../context/auth/context'
import { Loading } from 'notiflix'
import { AllProjects } from './allProject'
import ArtBoardContext from '../../context/artboard/context'




export const DashHome = () => {

    let { showItem } = useContext(UiContext)
    const { loading } = useContext(AuthContext)
    const { allArtboards } = useContext(ArtBoardContext)

    useEffect(() => {
        Loading.remove();
        // eslint-disable-next-line
    }, [])


    return (
        <>

            {
                loading ?


                    <section className='lg:flex items-center lg:flex-row p-5 lg:p-10 bg-neutral-50 dark:bg-slate-900 gap-y-6 lg:gap-y-0'>

                        <div className='lg:fixed lg:w-72 xl:w-1/4 px-8 inset-y-16 mt-16 md:mt-20 h-96 lg:h-auto dark:bg-slate-800  bg-slate-100 rounded-xl lg:rounded-2xl xl:rounded-[1.8rem] flex'>
                            <div className='m-auto space-y-6 flex flex-col justify-center'>
                                <div className='mx-auto rounded-full flex items-center justify-center w-36 h-36 lg:w-24 lg:h-24 xl:w-36 xl:h-36 bg-blue-500 text-white text-6xl font-medium lg:text-3xl'><i class="lni lni-download"></i></div>

                                <div className='mx-auto'>
                                    <button onClick={() => showItem('import')} className="mx-auto  font-medium bg-emerald-200 text-green-600 dark:text-green-400 hover:dark:bg-green-700 dark:bg-emerald-900 px-5 py-2 rounded-lg hover:bg-green-500 dark:hover:text-white hover:text-white lg:text-sm xl:text-base">Import Link</button>
                                </div>
                            </div>
                        </div>

                        <div className='lg:flex-1 lg:ml-80 xl:ml-[28%] my-8 lg:my-20'>
                            {
                                allArtboards === null ? (<p className='text-center'>You have no project yet please import a link to create one</p>) : (<AllProjects />)
                            }
                        </div>
                    </section>

                    :

                    Loading.standard()
            }



        </>
    )
}
