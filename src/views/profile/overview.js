import { Link } from "react-router-dom"


export const Overview = () => {
    return (
        <>

            <section className=" dark:bg-slate-900 space-y-8">
                <div className="border-b-2 border-slate-300 dark:border-slate-600 pb-7">
                    <h2 className="font-bold text-xl text-slate-500 dark:">Profile Details</h2>
                </div>

                <div className="md:w-2/5 space-y-7 md:space-y-10">
                    <div className="md:flex justify-between">
                        <div className="font-semibold dark:text-slate-600 text-slate-300 text-sm md:text-base">Full Name</div>
                        <div className="font-semibold dark:text-slate-300 text-slate-600">Max Smith</div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="font-semibold dark:text-slate-600 text-slate-300 text-sm md:text-base">Plan Subscription</div>
                        <div className="font-semibold  dark:text-slate-300  text-slate-600">Free</div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="font-semibold dark:text-slate-600 text-slate-300 text-sm md:text-base">Contact Phone</div>
                        <div className="font-semibold dark:text-slate-300 text-slate-600">044 3276 454 935</div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="font-semibold dark:text-slate-600 text-slate-300 text-sm md:text-base">Company Site</div>
                        <div className="font-semibold dark:text-slate-300 text-slate-600">keenthemes.com</div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="font-semibold dark:text-slate-600 text-slate-300 text-sm md:text-base">Email Address</div>
                        <div className="font-semibold dark:text-slate-300 text-slate-600">maxsmith009@gmail.com</div>
                    </div>

                </div>

                <div className=" border-2 border-dotted p-4 md:p-7 rounded-xl bg-yellow-50 dark:bg-orange-700 border-yellow-600 dark:bg-opacity-20">
                    <div className="flex gap-6 md:items-center">
                        <div className="text-yellow-400">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor"></rect>
                                <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor"></rect>
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h3 className="md:text-lg text-slate-600 font-semibold dark:text-slate-300">We need your attention!</h3>
                            <p className='font-semibold text-slate-400 text-xs md:text-sm'>Your payment was declined. To start using tools, please <Link to="/" className='text-sky-600'> Add Payment Method.</Link></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}