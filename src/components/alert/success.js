import { motion, AnimatePresence } from "framer-motion"; //check note.txt for notes on framer motion
import { useContext } from 'react';
import UiContext from '../../context/UI/context';



export const SuccessAlert = () => {

    let { alert } = useContext(UiContext);

    return (
        <>

                <AnimatePresence>  {/*AnimatePresence allows to use the exit attribute*/}
                    <motion.div
                        animate={{ x: [0, -20, -50, -10], scale: 1 }}
                        initial={{ scale: 0 }}
                        transition={{ type: "twin", ease: "easeInOut" }}
                        exit={{ x: -200 }}
                        className={`fixed z-50 w-72 px-6  py-4 lg:py-5 rounded-xl right-10  my-auto top-8  text-base md:font-medium text-white shadow-md bg-green-600 `}>
                        <div className='flex'>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </p>
                            <p className='ml-3 text-sm'>{alert.msg}</p>

                        </div>
                    </motion.div>
                </AnimatePresence>

            
        </>
    )



}