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
                        <div className="font-medium dark:text-slate-600 text-slate-400 text-sm md:text-base">Full Name</div>
                        <div className="font-semibold dark:text-slate-300 text-slate-600">Max Smith</div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="font-medium dark:text-slate-600 text-slate-400 text-sm md:text-base">Plan Subscription</div>
                        <div className="font-semibold  dark:text-slate-300  text-slate-600">Free</div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="font-medium dark:text-slate-600 text-slate-400 text-sm md:text-base">Contact Phone</div>
                        <div className="font-semibold dark:text-slate-300 text-slate-600">044 3276 454 935</div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="font-medium dark:text-slate-600 text-slate-400 text-sm md:text-base">Company Site</div>
                        <div className="font-semibold dark:text-slate-300 text-slate-600">keenthemes.com</div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="font-medium dark:text-slate-600 text-slate-400 text-sm md:text-base">Email Address</div>
                        <div className="font-semibold dark:text-slate-300 text-slate-600">maxsmith009@gmail.com</div>
                    </div>

                </div>


            </section>

        </>
    )
}