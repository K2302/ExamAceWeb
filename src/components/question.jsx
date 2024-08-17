

const Question = () => {
    return (
        <div className="p-5 flex flex-col justify-start items-start gap-7">
            <div className="text-lg text-slate-700 font-extrabold">The number of ways in which 21 identical apples can be distributed among three children such that each child gets at least 2 apples, is</div>
            <div className="flex flex-col justify-start items-start gap-3">
                <div className='flex flex-row justify-start items-center gap-3'>
                    <input type="checkbox" className='w-5 h-5' />
                    <div className='text-lg text-slate-500 font-extrabold'>312</div>
                </div>
                <div className='flex flex-row justify-start items-center gap-3'>
                    <input type="checkbox" className='w-5 h-5' />
                    <div className='text-lg text-slate-500 font-extrabold'>103</div>
                </div>
                <div className='flex flex-row justify-start items-center gap-3'>
                    <input type="checkbox" className='w-5 h-5' />
                    <div className='text-lg text-slate-500 font-extrabold'>68</div>
                </div>
                <div className='flex flex-row justify-start items-center gap-3'>
                    <input type="checkbox" className='w-5 h-5' />
                    <div className='text-lg text-slate-500 font-extrabold'>92</div>
                </div>
            </div>
        </div>
    )
}

export default Question