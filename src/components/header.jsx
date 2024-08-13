import images from "../constants/images";

const Header = () => {
  return (
    <>
      <div className="max-width mx-auto flex justify-between">
        <div className="flex flex-row gap-3 items-center">
          <div className="flex flex-col justify-center items-center">
            <img src={images.Logo} alt="logo" className="w-16 h-16" />
            <div className="text-lg font-extrabold text-red-500">ExamAce</div>
          </div>
          <div className="h-16 w-0.5 bg-rose-500"></div>
          <div className="h-16 flex flex-col justify-center items-start">
            <div className="text-xl font-extrabold text-rose-500 underline">
              Joint Entrance Exam
            </div>
            <div className="text-sm font-extrabold text-gray-500">
              Mains - Advance
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <div className="flex flex-row items-center gap-10 p-3 border-2 rounded-md">
            <div className="text-sm text-gray-500">
              Search Topics | Lesson | Questions
            </div>
            <div className="cursor-pointer">
              <img src={images.Search} alt="search" className="w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-row gap-1 cursor-pointer">
            <div className="hover:text-rose-500 hover:underline delay-150 transition-transform">
              Login
            </div>
            <div>|</div>
            <div className="hover:text-rose-500 hover:underline delay-150 transition-transform">
              Register
            </div>
          </div>
        </div>
      </div>
      <div className="sticky z-10 top-0 max-width mx-auto my-1 py-3 flex flex-row justify-between items-center bg-white border-t-2 border-b-2">
        <div className="flex-1 py-3 cursor-pointer transition-colors duration-300 hover:bg-gray-300">
          <div className="flex flex-row justify-center items-center gap-3">
            <img src={images.Home} alt="home" className="w-5 h-5" />
            <div className="text-base text-slate-500">Home</div>
          </div>
        </div>
        <div className="flex-1 py-3 cursor-pointer transition-colors duration-300 hover:bg-gray-300">
          <div className="flex flex-row justify-center items-center gap-3">
            <img src={images.Course} alt="course" className="w-5 h-5" />
            <div className="text-base text-slate-500">Course Content</div>
          </div>
        </div>
        <div className="flex-1 py-3 cursor-pointer transition-colors duration-300 hover:bg-gray-300">
          <div className="flex flex-row justify-center items-center gap-3">
            <img src={images.Rank} alt="leader" className="w-5 h-5" />
            <div className="text-base text-slate-500">Leader Board</div>
          </div>
        </div>
        <div className="flex-1 py-3 cursor-pointer transition-colors duration-300 hover:bg-gray-300">
          <div className="flex flex-row justify-center items-center gap-3">
            <img src={images.News} alt="news" className="w-5 h-5" />
            <div className="text-base text-slate-500">News | Blog</div>
          </div>
        </div>
        <div className="flex-1 py-3 cursor-pointer transition-colors duration-300 hover:bg-gray-300">
          <div className="flex flex-row justify-center items-center gap-3">
            <img src={images.About} alt="about" className="w-5 h-5" />
            <div className="text-base text-slate-500">About</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
