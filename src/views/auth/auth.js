import Logo from '../../assets/media/logo.png'
import { Outlet } from 'react-router-dom'








export const Auth = () => {
    return (
        <>

            <section className='bg-gray-100 flex flex-wrap min-h-screen w-screen m-0 p-8 justify-center'>

                <div className='lg:m-auto my-6'>
                    <div className='space-y-3'>
                        <div>
                            <img src={Logo} className="w-56 md:w-60 m-auto lg:m-0" alt='logo' />
                        </div>
                        <div>
                            <p className='font-medium md:text-center text-sm  md:text-base'>Branding tools designed for your business</p>
                        </div>
                    </div>
                </div>

                <div className='m-auto bg-white  p-8 md:p-14 2xl:p-20 xl:py-16 xl:px-24 rounded-2xl space-y-8 xl:space-y-5 2xl:space-y-8 w-full md:w-4/5 lg:w-7/12  xl:w-1/2 lg:scale-90 2xl:scale-100 2xl:w-1/3' >
                    <Outlet />
                </div>

            </section>

        </>
    )
}