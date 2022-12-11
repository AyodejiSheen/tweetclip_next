import Image from "next/image";
import Logo from '../assets/media/logo.png'
import gif from '../assets/media/video.gif'

import user1 from '../assets/media/user1.webp'
import user2 from '../assets/media/user2.webp'
import user3 from '../assets/media/user3.webp'
import user4 from '../assets/media/user4.webp'
import user5 from '../assets/media/user5.webp'
import Head from "next/head";
import Link from "next/link";

import dp from '../assets/media/dp.png'
import { Plan } from "./profile/plan";
import { useContext, useEffect } from "react";
import PlanContext from "../context/plans/context";




const HomePage = () => {

    let { getPlans, allPlans } = useContext(PlanContext)

    useEffect(() => {
        getPlans()
        console.log(allPlans)
    }, [])


    return (
        <>

            <Head>
                <title>tweetclips</title>
            </Head>


            <section>
                <nav className="px-4 bg-white py-4 md:py-6 border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed w-full z-50 h-[4.5rem] md:h-20 lg:h-24 top-0 shadow">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <a href="#" className="flex items-center">
                            <Image src={Logo} className="w-44 md:w-60 m-auto lg:m-0" alt='logo' priority />
                        </a>
                        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>

                        <div className="hidden duration-500 w-full lg:block lg:w-auto mt-4 md:mt-0" id="navbar-dropdown">
                            <ul className="flex flex-col py-8 md:py-10 lg:py-4 md:px-8 mt-6  border border-gray-100 rounded-lg bg-slate-50 shadow-xl md:shadow-none lg:flex-row lg:space-x-8 md:mt-10 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700 space-y-10 lg:space-y-0 items-center">
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
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FAQ</a>
                                </li>
                                <li className="mt-4">
                                    <Link href='signup' className="text-blue-600 border-2 border-blue-600 font-semibold rounded-full px-6 py-2">Try Now</Link>
                                </li>

                                <li className="mt-4">
                                    <Link href='login' className="text-white bg-blue-600 font-semibold rounded-full px-6 py-2.5">Sign in</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

            <section className=" bg-gradient-to-r from-cyan-600 to-blue-600 h-max py-20 mt-[4.5rem] md:mt-20 lg:mt-24">
                <div className="container mx-auto md:flex justify-between items-center px-4 lg:px-0 space-y-14 md:space-y-0 ">
                    <div className="md:w-1/2 text-white space-y-8">
                        <h3 className="text-4xl lg:text-7xl font-bold">Automatically convert your tweets into videos</h3>
                        <p className="text-lg lg:text-2xl">Growth hack your Twitter following by repurposing your content as Instagram Reels, TikTok, and Youtube Shorts.</p>
                        <div className="lg:pt-8">
                            <Link href='signup' className="px-10 lg:px-20 py-5 bg-white text-blue-600 h-16 rounded-full font-medium text-lg">Get Started</Link>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <Image src={gif} alt="create_video" className="rounded-full w-80 h-80 lg:w-[40rem] lg:h-[40rem] " />
                    </div>
                </div>
            </section>

            <section className=" py-20 bg-slate-100">
                <div className="container mx-auto space-y-14 px-4">
                    <h3 className="text-center text-3xl md:text-4xl font-semibold md:w-3/5 md:mx-auto lg:w-auto">Trusted by our beloved users including:</h3>
                    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-10  items-center ">
                        <div><Image src={user1} className="rounded-full w-56 mx-auto" alt="tweetclip user" data-aos="fade-in" /></div>
                        <div><Image src={user2} className="rounded-full w-56 mx-auto" alt="tweetclip user" data-aos="fade-in" /></div>
                        <div><Image src={user3} className="rounded-full w-56 mx-auto" alt="tweetclip user" data-aos="fade-in" /></div>
                        <div><Image src={user4} className="rounded-full w-56 mx-auto" alt="tweetclip user" data-aos="fade-in" /></div>
                        <div><Image src={user5} className="rounded-full w-56 mx-auto " alt="tweetclip user" data-aos="fade-in" /></div>
                    </div>
                </div>
            </section>

            <section className=" container mx-auto py-20">
                <div className="md:flex justify-between lg:gap-32 items-center space-y-8 md:space-y-0">
                    <div className="md:w-1/2 px-4 ">
                        <h3 className="text-3xl lg:text-5xl font-semibold text-center md:text-left " >Grow your Personal Brand FAST across every platforms</h3>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 md:gap-8 mx-4 lg:gap-14 justify-items-center space-y-8 px-4 md:space-y-0 md:px-0">
                        <div className="space-y-2 border-2 rounded-xl border-blue-100 p-5 lg:p-10 hover:shadow-lg md:hover:shadow-xl cursor-pointer" data-aos="flip-left">
                            <p className="text-4xl text-blue-600">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bullhorn" class="svg-inline--fa fa-bullhorn icon w-6 lg:w-9 mb-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"></path></svg>
                            </p>
                            <h3 className="text-lg lg:text-2xl font-semibold">Repurpose</h3>
                            <p className="font-medium text-sm lg:text-lg">Repurpose your Best Tweets as Videos</p>
                        </div>

                        <div className="space-y-2 border-2 rounded-xl border-blue-100 p-5 lg:p-10 hover:shadow-lg md:hover:shadow-xl cursor-pointer" data-aos="flip-left">
                            <p className="text-4xl text-blue-600">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bullhorn" class="svg-inline--fa fa-bullhorn icon w-6 lg:w-9 mb-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"></path></svg>
                            </p>
                            <h3 className="text-lg lg:text-2xl font-semibold">Repurpose</h3>
                            <p className="font-medium text-sm lg:text-lg">Repurpose your Best Tweets as Videos</p>
                        </div>

                        <div className="space-y-2 border-2 rounded-xl border-blue-100 p-5 lg:p-10 hover:shadow-lg md:hover:shadow-xl cursor-pointer" data-aos="flip-left">
                            <p className="text-4xl text-blue-600">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bullhorn" class="svg-inline--fa fa-bullhorn icon w-6 lg:w-9 mb-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"></path></svg>
                            </p>
                            <h3 className="text-lg lg:text-2xl font-semibold">Repurpose</h3>
                            <p className="font-medium text-sm lg:text-lg">Repurpose your Best Tweets as Videos</p>
                        </div>

                        <div className="space-y-2 border-2 rounded-xl border-blue-100 p-5 lg:p-10 hover:shadow-lg md:hover:shadow-xl cursor-pointer" data-aos="flip-left">
                            <p className="text-4xl text-blue-600">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bullhorn" class="svg-inline--fa fa-bullhorn icon w-6 lg:w-9 mb-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"></path></svg>
                            </p>
                            <h3 className="text-lg lg:text-2xl font-semibold">Repurpose</h3>
                            <p className="font-medium text-sm lg:text-lg">Repurpose your Best Tweets as Videos</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container md:flex justify-end pb-20 lg:py-20 px-4">
                <div className="md:w-2/3 lg:w-1/3 space-y-5">
                    <h3 className="text-3xl md:text-4xl font-semibold">TweetClips is built to Repurpose Content and Increase Your Reach</h3>
                    <p className="text-lg font-medium">Increase product sales, overall engagement, and generate qualified leads using more viral algorithms</p>
                    <div>
                        <Link href='login' className="font-bold flex gap-2 hover:gap-5 duration-300 text-lg text-blue-600">Create a Video
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="w-4 svg-inline--fa fa-arrow-right icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-slate-100 py-10">
                <div className="container lg:flex justify-between gap-20 mx-auto items-center">
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl lg:text-5xl font-semibold text-center lg:text-left">What our users say about us</h2>
                    </div>

                    <div className="flex gap-10 lg:w-2/3 overflow-x-scroll rounded-xl p-10 md:py-10">
                        <div className="bg-white w-11/12 md:w-1/2 lg:w-2/5 flex-none rounded-xl p-8 space-y-8 shadow-xl">
                            <p className="text-sm">I grew my Twitter following from 100 to 10K followers in just 3 Months using TweetClips to repurpose my content as YouTube Shorts and TikToks.</p>
                            <div className="flex gap-5 items-center">
                                <Image src={dp} alt="client_image" className="w-14 md:w-20 rounded-full" />
                                <div>
                                    <h3 className="font-semibold md:text-xl">Niko Kolettis</h3>
                                    <p className="text-sm">Content Creator</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white w-11/12 md:w-1/2 lg:w-2/5 flex-none rounded-xl p-8 space-y-8 shadow-xl">
                            <p className="text-sm">I grew my Twitter following from 100 to 10K followers in just 3 Months using TweetClips to repurpose my content as YouTube Shorts and TikToks.</p>
                            <div className="flex gap-5 items-center">
                                <Image src={dp} alt="client_image" className="w-14 md:w-20 rounded-full" />
                                <div>
                                    <h3 className="font-semibold md:text-xl">Niko Kolettis</h3>
                                    <p className="text-sm">Content Creator</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white w-11/12 md:w-1/2 lg:w-2/5 flex-none rounded-xl p-8 space-y-8 shadow-xl">
                            <p className="text-sm">I grew my Twitter following from 100 to 10K followers in just 3 Months using TweetClips to repurpose my content as YouTube Shorts and TikToks.</p>
                            <div className="flex gap-5 items-center">
                                <Image src={dp} alt="client_image" className="w-14 md:w-20 rounded-full" />
                                <div>
                                    <h3 className="font-semibold md:text-xl">Niko Kolettis</h3>
                                    <p className="text-sm">Content Creator</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white w-11/12 md:w-1/2 lg:w-2/5 flex-none rounded-xl p-8 space-y-8 shadow-xl">
                            <p className="text-sm">I grew my Twitter following from 100 to 10K followers in just 3 Months using TweetClips to repurpose my content as YouTube Shorts and TikToks.</p>
                            <div className="flex gap-5 items-center">
                                <Image src={dp} alt="client_image" className="w-14 md:w-20 rounded-full" />
                                <div>
                                    <h3 className="font-semibold md:text-xl">Niko Kolettis</h3>
                                    <p className="text-sm">Content Creator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20">
                <div className="space-y-5">
                    <h3 className="text-3xl md:text-5xl font-semibold mx-auto leading-relaxed w-1/3 text-center" >The easiest way to grow your Twitter following</h3>
                    <p className="text-center text-lg">A following is the new social currency. Build yours today!</p>
                    <div className="container mx-auto">
                        <Plan />
                    </div>
                </div>
            </section>


        </>
    )
};


export default HomePage;