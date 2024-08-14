import Card from "../../components/card";
import Filter from "../../components/filter";
import images from "../../constants/images";

const Course = () => {
  return (
    <div className='w-[1280px] mx-auto my-5 flex flex-col gap-5'>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl font-extrabold m-3">Previous Years JEE - Mains / Advance Mock Tests</div>
      <div className="flex flex-row justify-start items-center h-[400px] gap-3">
        {/* <div> */}
        <img src={images.chemistry} alt='previous' className="w-1/2 h-full rounded" />
        {/* </div> */}
        <div className="h-full flex flex-col justify-between items-start">
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="flex flex-row justify-start items-center gap-3">
              <img src={images.time} alt="duration" className="w-5 h-5" />
              <div className="text-md text-slate-600">Practice All JEE (Mains | Advance) Test Since - 2000</div>
            </div>
            <div className='flex flex-row justify-start items-center gap-1.5'>
              <img src={images.News} alt='mock' className='w-5 h-5' />
              <div className='text-sm text-slate-700'>
                100+ Chapter Wise Mock Test
              </div>
            </div>
          </div>
          <div>
            <div className='flex flex-row justify-center items-center py-3 my-3'>
              <div className='flex flex-row justify-center items-center gap-0'>
                <div className='p-2 flex justify-center items-center bg-slate-300 rounded-full'>
                  <img src={images.register} alt='person' className='w-5 h-5l' />
                </div>
                <div className='p-2 flex justify-center items-center bg-green-300 rounded-full'>
                  <img src={images.register} alt='person' className='w-5 h-5l' />
                </div>
                <div className='p-2 flex justify-center items-center bg-rose-300 rounded-full'>
                  <img src={images.register} alt='person' className='w-5 h-5l' />
                </div>
              </div>
              <div className='text-sm text-slate-500 font-extrabold'>
                1200+ Enrolements
              </div>
            </div>
            <div className="p-3 text-center rounded bg-green-500 text-base text-white font-extrabold cursor-pointer">
              Explore Now
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl font-extrabold m-3">Topic Wise Content</div>
      <div className="flex flex-row justify-between">
        <div className="w-[400px]">
          <Card />
        </div>
        <div className="w-[400px]">
          <Card />
        </div>
        <div className="w-[400px]">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Course;
