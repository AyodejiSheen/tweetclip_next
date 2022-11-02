import { Link } from "react-router-dom"


export const Controls = () => {
    return (
        <>

            <div className='space-y-4'>
                <div>
                    <Link to="color">
                        <div className='border-2 dark:border-slate-600 text-lg font-light dark:text-slate-300 text-center py-5 w-full rounded-lg'>Color</div>
                    </Link>
                </div>

                <div>
                    <Link to="color">
                        <div className='border-2 dark:border-slate-600 text-lg font-light dark:text-slate-300 text-center py-5 w-full rounded-lg'>Text</div>
                    </Link>
                </div>

                <div>
                    <Link to="color">
                        <div className='border-2 dark:border-slate-600 text-lg font-light dark:text-slate-300 text-center py-5 w-full rounded-lg'>Slogan</div>
                    </Link>
                </div>

                <div>
                    <Link to="color">
                        <div className='border-2 dark:border-slate-600 text-lg font-light dark:text-slate-300 text-center py-5 w-full rounded-lg'>Icon</div>
                    </Link>
                </div>

                <div>
                    <Link to="color">
                        <div className='border-2 dark:border-slate-600 text-lg font-light dark:text-slate-300 text-center py-5 w-full rounded-lg'>Layout</div>
                    </Link>
                </div>
            </div>

            <div className="bottom-12 absolute hidden lg:block">
                <button className="space-x-2 w-96 border-2 dark:border-slate-600 text-lg font-light dark:text-slate-300 text-center py-5 rounded-lg">
                    <i className="lni lni-cloud-upload"></i>
                    <span>Export Project</span>
                </button>
            </div>

        </>
    )
}