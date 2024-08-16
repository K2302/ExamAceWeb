import images from "../constants/images"

const Syllabus = () => {
    return (
        <div className="flex flex-col gap-5 cursor-pointer">
            <div className='flex flex-col pl-3'>
                <div className="flex flex-row justify-between items-center transition-transform duration-300 hover:scale-105">
                    <div className='flex flex-row justify-center items-center gap-1.5'>
                        <img src={images.dot} alt='dot' className='w-5 h-5' />
                        <div className='text-sm font-extrabold text-slate-700'>Chemical Bonding</div>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-green-500 flex justify-center items-center">
                        {/* <img src={images.check} alt='read' className="w-3 h-3" /> */}
                    </div>
                </div>
                <div className="flex flex-col gap-1.5 pl-3 pt-3">
                    <div className="flex flex-row justify-between items-center transition-transform duration-300 hover:scale-105">
                        <div className='flex flex-row justify-center items-center gap-1.5'>
                            <img src={images.dot} alt='dot' className='w-5 h-5' />
                            <div className='text-sm text-slate-500'>Bond Theory</div>
                        </div>
                        <div className="w-5 h-5 rounded-full border-2 border-green-500 flex justify-center items-center">
                            <img src={images.check} alt='read' className="w-3 h-3" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center transition-transform duration-300 hover:scale-105">
                        <div className='flex flex-row justify-center items-center gap-1.5'>
                            <img src={images.dot} alt='dot' className='w-5 h-5' />
                            <div className='text-sm text-slate-500'>VSEPR Theory</div>
                        </div>
                        <div className="w-5 h-5 rounded-full border-2 border-green-500 flex justify-center items-center">
                            <img src={images.check} alt='read' className="w-3 h-3" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center transition-transform duration-300 hover:scale-105">
                        <div className='flex flex-row justify-center items-center gap-1.5'>
                            <img src={images.dot} alt='dot' className='w-5 h-5' />
                            <div className='text-sm text-slate-500'>Molecular Orbital theory</div>
                        </div>
                        <div className="w-5 h-5 rounded-full border-2 border-green-500 flex justify-center items-center">
                            <img src={images.check} alt='read' className="w-3 h-3" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Syllabus