


export const Devices = () => {
    return (
        <>

            <div className="md:grid md:grid-cols-2 2xl:grid-cols-3 gap-6 space-y-4 md:space-y-0">

                <div className=" shadow shadow-slate-400 rounded-lg py-4  px-4 md:px-6 2xl:px-8">
                    <div className="flex gap-4 items-center">
                        <div>
                            <i class="fa-solid fa-desktop text-2xl"></i>
                        </div>
                        <div>
                            <h2 className="font-bold">Window PC </h2>
                            <p className="font-bold text-sm ">Chrome - <span className="text-green-400 ml-4">Active Now</span></p>
                        </div>
                    </div>
                </div>


                <div className="shadow shadow-slate-400 rounded-lg py-4  px-4 md:px-6 2xl:px-8">
                    <div className="flex gap-4 items-center">
                        <div>
                            <i class="fa-solid fa-laptop text-2xl"></i>
                        </div>
                        <div>
                            <h2 className="font-bold">Window Laptop </h2>
                            <p className="font-bold text-sm ">Chrome - <span className="text-slate-400  ml-3">2days ago</span></p>
                        </div>
                    </div>
                </div>


                <div className="shadow shadow-slate-400 rounded-lg py-4  px-4 md:px-6 2xl:px-8">
                    <div className="flex gap-4 items-center">
                        <div>
                            <i class="fa-solid fa-mobile-screen-button text-2xl"></i>
                        </div>
                        <div>
                            <h2 className="font-bold">Iphone 6s</h2>
                            <p className="font-bold text-sm ">Oohs app - <span className="text-slate-400  ml-4">20 minutes ago</span></p>
                        </div>
                    </div>
                </div>


                <div className="shadow shadow-slate-400 rounded-lg py-4  px-4 md:px-6 2xl:px-8">
                    <div className="flex gap-4 items-center">
                        <div>
                            <i class="fa-solid fa-desktop text-2xl"></i>
                        </div>
                        <div>
                            <h2 className="font-bold">Window PC</h2>
                            <p className="font-bold text-sm ">Oohs app - <span className="text-slate-400  ml-3">2 minutes ago </span></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}