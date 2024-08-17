import images from "../constants/images"

const TestBottombar = () => {
    return (
        <div className='h-16 border-t-2 bg-white flex flex-row justify-between items-center px-3'>
            <div className="flex flex-row gap-3">
                <div className="flex flex-row justify-center items-center gap-1.5 p-1.5 border-2 rounded cursor-pointer">
                    <img src={images.Backward} alt="prev" className="w-5 h-5" />
                    <div className='text-base text-slate-500 font-extrabold'>Prev</div>
                </div>
                <div className="flex flex-row justify-center items-center gap-1.5 p-1.5 border-2 rounded cursor-pointer">
                    <div className='text-base text-slate-500 font-extrabold'>Next</div>
                    <img src={images.Forward} alt="prev" className="w-5 h-5" />
                </div>
            </div>
            <div className="flex flex-row gap-3">
                <div className="flex flex-row justify-center items-center gap-1.5 p-1.5 rounded cursor-pointer bg-yellow-500 w-24">
                    <div className='text-base text-white font-extrabold'>Review</div>
                </div>
                <div className="flex flex-row justify-center items-center gap-1.5 p-1.5 rounded cursor-pointer bg-green-500 w-24">
                    <div className='text-base text-white font-extrabold'>Save</div>
                </div>
                <div className="flex flex-row justify-center items-center gap-1.5 p-1.5 rounded cursor-pointer bg-red-500 w-24">
                    <div className='text-base text-white font-extrabold'>Clear</div>
                </div>
            </div>
        </div>
    )
}

export default TestBottombar