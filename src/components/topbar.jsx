import { motion } from "framer-motion"
import images from "../constants/images"
import { useState } from "react"

const Topbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='h-16 border-b-2 flex flex-row justify-between items-center px-3 bg-white'>
            <div className="flex flex-row items-center gap-3 border-2 rounded-md p-1.5">
                <input type="text" placeholder="Search topics" className="text-sm text-slate-500 focus:outline-none" />
                <img src={images.Search} alt="search" className='w-5 h-5' />
            </div>
            <div className="flex flex-row justify-center items-center gap-5">
                <div className="flex flex-row justify-center items-center relative">
                    <img src={images.notification} alt='notification' className="w-5 h-5 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                    {
                        isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: { duration: 0.7 } }}
                                className="absolute top-8 right-0 p-3 w-64 rounded bg-rose-100 flex flex-col gap-3"
                            >
                                <div className='text-xs text-slate-700 font-extrabold p-1 cursor-pointer'>change in JEE syllabus ?</div>
                                <div className='text-xs text-slate-700 font-extrabold p-1 cursor-pointer'>JEE in December ?</div>

                            </motion.div>
                        )
                    }
                </div>
                <div className="p-2 rounded-full bg-rose-300 flex flex-row justify-center items-center">
                    <img src={images.Profile} alt='profile' className="w-5 h-5" />
                </div>
            </div>
        </div>
    )
}

export default Topbar