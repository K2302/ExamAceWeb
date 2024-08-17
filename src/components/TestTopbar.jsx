const TestTopbar = () => {
    return (
        <div className='h-16 px-3 border-b-2 bg-white flex flex-row justify-between items-center'>
            <div className="text-lg text-slate-900 font-extrabold">Question Number : 1/75</div>
            <div className='w-1/3 flex flex-row justify-between items-center'>
                <div className='text-base text-slate-500 font-extrabold'>Time Remaining : </div>
                <div className="text-base text-red-500 font-extrabold">22 minutes</div>
            </div>
        </div>
    )
}

export default TestTopbar