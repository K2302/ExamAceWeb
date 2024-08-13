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
          <div className="h-16 flex flex-col justify-between items-center">
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
      <div className="sticky top-0 max-width mx-auto flex flex-row justify-between items-center">
        <div className="flex-1 p-1 cursor-pointer hover:bg-gray-300 rounded">
          <div className="flex flex-row justify-center items-center gap-3">
            <img src={images.Home} alt="home" className="w-5 h-5" />
            <div className="text-base font-extrabold">Home</div>
          </div>
        </div>
        <div className="flex-1 p-1 cursor-pointer hover:bg-gray-300 rounded">
          <div className="flex flex-row justify-center items-center gap-3">
            <img src={images.Course} alt="course" className="w-5 h-5" />
            <div className="text-base font-extrabold">Course Content</div>
          </div>
        </div>
        <div className="flex-1 p-1 cursor-pointer hover:bg-gray-300 rounded">
          <div className="flex flex-row justify-center items-center gap-3">
            <img src={images.Rank} alt="leader" className="w-5 h-5" />
            <div className="text-base font-extrabold">Leader Board</div>
          </div>
        </div>
        <div className="flex-1 p-1 cursor-pointer hover:bg-gray-300 rounded">
          <div className="flex flex-row justify-center items-center gap-3">
            <img src={images.News} alt="news" className="w-5 h-5" />
            <div className="text-base font-extrabold">News | Blog</div>
          </div>
        </div>
        <div className="flex-1 p-1 cursor-pointer hover:bg-gray-300 rounded">
          <div className="flex flex-row justify-center items-center gap-3">
            <img src={images.About} alt="about" className="w-5 h-5" />
            <div className="text-base font-extrabold">About</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
