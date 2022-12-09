import Image from "next/image";
import Logo from '../assets/media/logo.png'
import gif from '../assets/media/video.gif'

import user1 from '../assets/media/user1.webp'
import user2 from '../assets/media/user2.webp'
import user3 from '../assets/media/user3.webp'
import user4 from '../assets/media/user4.webp'
import user5 from '../assets/media/user5.webp'
import Head from "next/head";

const HomePage = () => {
    return (
        <>

            <Head>
                <title>tweetclips</title>
            </Head>


            <section>
                <nav className="px-4 bg-white py-4 md:py-6 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <a href="#" className="flex items-center">
                            <Image src={Logo} className="w-56 md:w-60 m-auto lg:m-0" alt='logo' priority />
                        </a>
                        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>

                        <div className="hidden duration-500 w-full lg:block lg:w-auto " id="navbar-dropdown">
                            <ul className="flex flex-col py-4 px-8 mt-6 border border-gray-100 rounded-lg bg-slate-50 lg:flex-row lg:space-x-8 md:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700 space-y-4 lg:space-y-0 items-center">
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Testimonial </a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                </li>
                                <div>
                                    <button className="text-blue-600 border-2 border-blue-600 font-semibold rounded-full px-6 py-2">Try Now</button>
                                </div>

                                <div>
                                    <button className="text-white bg-blue-600 font-semibold rounded-full px-6 py-2.5">Sign in</button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

            <section className="bg-gradient-to-r from-cyan-600 to-blue-600 h-max py-24 ">
                <div className="container mx-auto md:flex justify-between items-center px-4 md:px-0 space-y-14 md:space-y-0">
                    <div className="md:w-1/2 text-white space-y-8">
                        <h3 className="text-4xl md:text-7xl font-bold">Automatically convert your tweets into videos</h3>
                        <p className="text-lg md:text-2xl">Growth hack your Twitter following by repurposing your content as Instagram Reels, TikTok, and Youtube Shorts</p>
                        <button className="w-56 bg-white text-blue-600 h-16 rounded-full font-medium text-lg">Get Started</button>
                    </div>

                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <Image src={gif} alt="create_video" className="rounded-full w-80 h-80 md:w-[40rem] md:h-[40rem] " />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-100">
                <div className="container mx-auto space-y-14 px-4">
                    <h3 className="text-center text-3xl md:text-4xl font-semibold">Trusted by our beloved users including:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center ">
                        <div><Image src={user1} className="rounded-full w-56 mx-auto" alt="tweetclip user" data-aos="fade-in"/></div>
                        <div><Image src={user2} className="rounded-full w-56 mx-auto" alt="tweetclip user" data-aos="fade-in"/></div>
                        <div><Image src={user3} className="rounded-full w-56 mx-auto" alt="tweetclip user" data-aos="fade-in"/></div>
                        <div><Image src={user4} className="rounded-full w-56 mx-auto" alt="tweetclip user" data-aos="fade-in"/></div>
                        <div><Image src={user5} className="rounded-full w-56 mx-auto " alt="tweetclip user" data-aos="fade-in"/></div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-24">
                <div className="flex justify-between items-center ">
                    <div className="w-1/2 px-32">
                        <h3 className="text-6xl font-semibold">Grow your Personal Brand FAST across all platforms</h3>
                    </div>

                    <div className="w-1/2 grid grid-cols-2 gap-24 justify-center">
                        <div className="space-y-2 w-64">
                            <p className="text-4xl text-blue-600"><i className="lni lni-volume-high"></i></p>
                            <h3 className="text-2xl font-semibold">Repurpose</h3>
                            <p className="font-medium text-lg">Repurpose your Best Tweets as Videos</p>
                        </div>

                        <div className="space-y-2 w-64">
                            <p className="text-4xl text-blue-600"><i className="lni lni-volume-high"></i></p>
                            <h3 className="text-2xl font-semibold">Optimize</h3>
                            <p className="font-medium text-lg">Repurpose your Best Tweets as Videos</p>
                        </div>

                        <div className="space-y-2 w-64">
                            <p className="text-4xl text-blue-600"><i className="lni lni-volume-high"></i></p>
                            <h3 className="text-2xl font-semibold">Growth Hack</h3>
                            <p className="font-medium text-lg">Repurpose your Best Tweets as Videos</p>
                        </div>

                        <div className="space-y-2 w-64">
                            <p className="text-4xl text-blue-600"><i className="lni lni-volume-high"></i></p>
                            <h3 className="text-2xl font-semibold">Awareness</h3>
                            <p className="font-medium text-lg">Repurpose your Best Tweets as Videos</p>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
};


export default HomePage;