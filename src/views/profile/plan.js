

export const Plan = () => {
    return (
        <>

            <section className="space-y-7">
                <div className="text-center space-y-3">
                    <h2 className="text-2xl text-slate-800 dark:text-slate-300 font-bold">Upgrade a Plan</h2>
                    <p className="text-slate-500">If you need more info, please check <span className="font-bold text-blue-600">Pricing Guidelines.</span></p>
                </div>

                <div className="flex w-max mx-auto rounded-xl dark:border-slate-600 p-2 border">
                    <div>
                        <button className="dark:bg-slate-700 dark:hover:text-slate-200 dark:hover:font-medium py-3 px-6 rounded-xl dark:text-slate-500 ">Monthly</button>
                    </div>

                    <div>
                        <button className="dark:bg-slate-700 dark:hover:text-slate-200 dark:hover:font-medium py-3 px-6 rounded-xl dark:text-slate-500 ">Annually</button>
                    </div>
                </div>


                <div className="flex gap-12" >
                    <div className="md:w-1/2 space-y-4">
                        <div className="border-dotted border-spacing-7 dark:border-slate-600 border p-6 border-slate-300 rounded-xl flex flex-wrap justify-between">
                            <div className="flex items-center gap-6">
                                <div className="rounded-full h-8 w-8 bg-slate-200 dark:bg-slate-700"> </div>
                                <div>
                                    <h5 className="font-semibold text-xl dark:text-slate-200">Startup</h5>
                                    <p className="text-sm font-medium dark:text-slate-600">Best for startups</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-5xl dark:text-slate-200"> <sub className="text-sm text-slate-400">$</sub> 39<sub className="text-sm text-slate-400">/ Mon</sub></h2>
                            </div>
                        </div>

                        <div className="border-dotted border-spacing-7 dark:border-slate-600 border p-6 border-slate-300 rounded-xl flex flex-wrap justify-between">
                            <div className="flex items-center gap-6">
                                <div className="rounded-full h-8 w-8 bg-slate-200 dark:bg-slate-700"> </div>
                                <div>
                                    <h5 className="font-semibold text-xl dark:text-slate-200">Advanced</h5>
                                    <p className="text-sm font-medium dark:text-slate-600">Best for 100+ teams size</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-5xl dark:text-slate-200"> <sub className="text-sm text-slate-400">$</sub> 39<sub className="text-sm text-slate-400">/ Mon</sub></h2>
                            </div>
                        </div>


                        <div className="border-dotted border-spacing-7 dark:border-slate-600 border p-6 border-slate-300 rounded-xl flex flex-wrap justify-between">
                            <div className="flex items-center gap-6">
                                <div className="rounded-full h-8 w-8 bg-slate-200 dark:bg-slate-700"> </div>
                                <div>
                                    <h5 className="font-semibold text-xl dark:text-slate-200">Enterprise</h5>
                                    <p className="text-sm font-medium dark:text-slate-600">Best for 1000+ </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-5xl dark:text-slate-200"> <sub className="text-sm text-slate-400">$</sub> 39<sub className="text-sm text-slate-400">/ Mon</sub></h2>
                            </div>
                        </div>


                        <div className="border-dotted border-spacing-7 dark:border-slate-600 border p-6 border-slate-300 rounded-xl flex flex-wrap justify-between">
                            <div className="flex items-center gap-6">
                                <div className="rounded-full h-8 w-8 bg-slate-200 dark:bg-slate-700"> </div>
                                <div>
                                    <h5 className="font-semibold text-xl dark:text-slate-200">Custom</h5>
                                    <p className="text-sm font-medium dark:text-slate-600">Request a custon license</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-5xl dark:text-slate-200"> <sub className="text-sm text-slate-400">$</sub> 39<sub className="text-sm text-slate-400">/ Mon</sub></h2>
                            </div>
                        </div>
                    </div>


                    <div className="md:w-1/2 space-y-5 bg-slate-100 dark:bg-slate-700 p-12 rounded-2xl">
                        <div>
                            <h2 className="text-2xl text-slate-800 dark:text-slate-300 font-semibold">What's in Startup Plan?</h2>
                            <p className="text-slate-500">Optimal for 10+ team size and new startup </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <div>
                                    <p className="dark:text-slate-400 font-semibold   ">Up to 10 Active Users</p>
                                </div>
                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                </svg></div>
                            </div>


                            <div className="flex justify-between">
                                <div>
                                    <p className="dark:text-slate-400 font-semibold   ">Up to 30 Project Integrations</p>
                                </div>
                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                </svg></div>
                            </div>


                            <div className="flex justify-between">
                                <div>
                                    <p className="dark:text-slate-400 font-semibold   ">Analytics Module</p>
                                </div>
                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                </svg></div>
                            </div>


                            <div className="flex justify-between">
                                <div>
                                    <p className="dark:text-slate-400 font-semibold   ">Up to 10 Active Users</p>
                                </div>
                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                </svg></div>
                            </div>


                            <div className="flex justify-between">
                                <div>
                                    <p className="dark:text-slate-400 font-semibold   ">Up to 10 Active Users</p>
                                </div>
                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                </svg></div>
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <p className="dark:text-slate-400 font-semibold   ">Up to 10 Active Users</p>
                                </div>
                                <div><svg className="text-emerald-400" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                    <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor"></path>
                                </svg></div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}