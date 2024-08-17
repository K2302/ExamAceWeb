const TestSidebar = () => {
    const numbersArray = Array.from({ length: 90 }, (_, i) => ({
        number: i + 1
    }));

    return (
        <div className='flex flex-col justify-around items-center h-full'>
            <div className="w-24 text-lg text-white font-extrabold bg-green-500 rounded p-1.5 flex justify-center items-center cursor-pointer">Submit</div>
            <div className="flex flex-row flex-wrap justify-start items-start gap-1.5 p-3">
                {
                    numbersArray.map((item) => (
                        <div key={item.number} className='w-9 h-9 flex justify-center items-center bg-slate-300 text-white text-lg font-extrabold rounded cursor-pointer'>{item.number}</div>
                    ))
                }
            </div>
            <div className="w-full px-3 flex flex-col justify-start items-start gap-3">
                <div className="w-full flex flex-row justify-between items-center">
                    <div className='w-9 h-9 flex justify-center items-center bg-slate-300 text-white text-lg font-extrabold rounded'>90</div>
                    <div className="text-sm text-slate-500 font-extrabold">unanswered</div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                    <div className='w-9 h-9 flex justify-center items-center bg-yellow-500 text-white text-lg font-extrabold rounded'>0</div>
                    <div className="text-sm text-slate-500 font-extrabold">Reviewd</div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                    <div className='w-9 h-9 flex justify-center items-center bg-green-500 text-white text-lg font-extrabold rounded'>0</div>
                    <div className="text-sm text-slate-500 font-extrabold">Answered</div>
                </div>
            </div>
        </div>
    )
}

export default TestSidebar