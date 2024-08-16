import Path from '../../components/path'
import Syllabus from '../../components/syllabus'
import images from '../../constants/images'

const SubjectDashboard = () => {
    return (
        <div className='m-5 flex flex-col gap-5'>
            <Path />
            <div className='flex flex-row justify-start items-start'>
                <div className='w-1/2 h-64'>
                    <img src={images.chemistry} alt="subject" className='h-full w-full' />
                </div>
                <div className='w-1/2 h-64 pl-5 flex flex-col justify-between items-start'>
                    <div className='flex flex-col gap-1.5'>
                        <div className='text-xl text-slate-700 font-extrabold'>Chemistry Previous Year Questions</div>
                        <div className='text-sm text-slate-500'>chapter wise previous years chemistry questions since 2000. Every questions organize according to their related topics </div>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row justify-center items-center gap-1.5'>
                                    <img src={images.Course} alt='chapters' className='w-5 h-5' />
                                    <div className='text-sm text-slate-700'>
                                        22 Chapters
                                    </div>
                                </div>
                                <div className='flex flex-row justify-center items-center gap-1.5'>
                                    <img src={images.About} alt='question' className='w-5 h-5' />
                                    <div className='text-sm text-slate-700'>
                                        1500+ questions
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row justify-center items-center gap-1.5'>
                                    <img src={images.News} alt='mock' className='w-5 h-5' />
                                    <div className='text-sm text-slate-700'>
                                        100+ Chapter Wise Mock Test
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-1.5'>
                        <div className='text-xs text-slate-500'>keep us supporting by donation</div>
                        <div className='p-3 bg-rose-500 text-center rounded text-sm text-white font-extrabold'>
                            Donate Now 🎃
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-start items-start mt-5'>
                <div className='w-1/4 flex flex-col justify-start items-start pt-16'>
                    <div className='w-full flex flex-row justify-start items-center gap-1.5'>
                        <div className='w-1/12 border bg-slate-500'></div>
                        <div className='text-sm text-slate-500 font-extrabold'>recomendation</div>
                        <div className='flex-1 border bg-slate-500'></div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="transition-transform duration-300 hover:scale-105 w-3/4 cursor-pointer flex flex-col gap-3 m-3">
                            <img src={images.chemistry} alt="background" className="rounded" />
                            <div className="text-base font-bold text-slate-500">
                                Chemical Kinetics
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row justify-between items-center gap-1">
                                    <div className="text-xs text-green-500 font-extrabold">free</div>
                                    <img src={images.unlock} alt="free" className="w-3 h-3" />
                                </div>
                                <div className="flex flex-row justify-between items-center gap-1">
                                    <img src={images.view} alt="views" className="w-3 h-3" />
                                    <div className="text-xs text-slate-500">500</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-3/4'>
                    <div className='w-full flex flex-row justify-between items-center cursor-pointer'>
                        <div className='flex-1 flex flex-row justify-center items-center gap-1.5 border-b-2 p-3'>
                            <img src={images.News} alt='syllabus' className='w-5 h-5' />
                            <div className='text-sm font-extrabold text-slate-700'>Chemistry Syllabus</div>
                        </div>
                        <div className='flex-1 flex flex-row justify-center items-center gap-1.5 border-b-2 border-b-blue-500 p-3'>
                            <img src={images.About} alt='syllabus' className='w-5 h-5' />
                            <div className='text-sm font-extrabold text-blue-500'>Questions</div>
                        </div>
                        <div className='flex-1 flex flex-row justify-center items-center gap-1.5 border-b-2 p-3'>
                            <img src={images.notification} alt='syllabus' className='w-5 h-5' />
                            <div className='text-sm font-extrabold text-slate-700'>announcement</div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <div className="w-full flex flex-row flex-wrap justify-between items-center">
                            <div className="transition-transform duration-300 hover:scale-105 w-1/4 cursor-pointer flex flex-col gap-3 m-3">
                                <img src={images.chemistry} alt="background" className="rounded" />
                                <div className="text-base font-bold text-slate-500">
                                    Chemical Kinetics
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-between items-center gap-1">
                                        <div className="text-xs text-green-500 font-extrabold">free</div>
                                        <img src={images.unlock} alt="free" className="w-3 h-3" />
                                    </div>
                                    <div className="flex flex-row justify-between items-center gap-1">
                                        <img src={images.view} alt="views" className="w-3 h-3" />
                                        <div className="text-xs text-slate-500">500</div>
                                    </div>
                                </div>
                            </div>
                            <div className="transition-transform duration-300 hover:scale-105 w-1/4 cursor-pointer flex flex-col gap-3 m-3">
                                <img src={images.chemistry} alt="background" className="rounded" />
                                <div className="text-base font-bold text-slate-500">
                                    Hydrogen
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-between items-center gap-1">
                                        <div className="text-xs text-green-500 font-extrabold">free</div>
                                        <img src={images.unlock} alt="free" className="w-3 h-3" />
                                    </div>
                                    <div className="flex flex-row justify-between items-center gap-1">
                                        <img src={images.view} alt="views" className="w-3 h-3" />
                                        <div className="text-xs text-slate-500">500</div>
                                    </div>
                                </div>
                            </div>
                            <div className="transition-transform duration-300 hover:scale-105 w-1/4 cursor-pointer flex flex-col gap-3 m-3">
                                <img src={images.chemistry} alt="background" className="rounded" />
                                <div className="text-base font-bold text-slate-500">
                                    Hydrogen
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-between items-center gap-1">
                                        <div className="text-xs text-green-500 font-extrabold">free</div>
                                        <img src={images.unlock} alt="free" className="w-3 h-3" />
                                    </div>
                                    <div className="flex flex-row justify-between items-center gap-1">
                                        <img src={images.view} alt="views" className="w-3 h-3" />
                                        <div className="text-xs text-slate-500">500</div>
                                    </div>
                                </div>
                            </div>
                            <div className="transition-transform duration-300 hover:scale-105 w-1/4 cursor-pointer flex flex-col gap-3 m-3">
                                <img src={images.chemistry} alt="background" className="rounded" />
                                <div className="text-base font-bold text-slate-500">
                                    Hydrogen
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-between items-center gap-1">
                                        <div className="text-xs text-green-500 font-extrabold">free</div>
                                        <img src={images.unlock} alt="free" className="w-3 h-3" />
                                    </div>
                                    <div className="flex flex-row justify-between items-center gap-1">
                                        <img src={images.view} alt="views" className="w-3 h-3" />
                                        <div className="text-xs text-slate-500">500</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectDashboard