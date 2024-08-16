import { Outlet, Route, Routes } from "react-router-dom";
import Test from "./components/test";
import Home from "./pages/home";
import Header from "./components/header";
import About from "./pages/home/about";
import Course from "./pages/home/course";
import Footer from "./components/footer";
import Register from "./pages/home/register";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/sidebar";
import CourseDashboard from "./pages/dashboard/course";
import LeaderBoardDashboard from "./pages/dashboard/leaderboard";
import BlogDashboard from "./pages/dashboard/blog";
import ProfileDasboard from "./pages/dashboard/profile";
import SubjectDashboard from './pages/dashboard/subject'
import Topbar from "./components/topbar"

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const DashboardLayout = () => {
  return (
    <div className="w-[1280px] mx-auto flex flex-row">
      <div className="w-1/5 sticky top-0 left-0 h-screen border-l-2 border-r-2">
        <Sidebar />
      </div>
      <div className="w-4/5 border-r-2">
        <div className="w-full sticky top-0 left-0">
          <Topbar />
        </div>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="course" element={<Course />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="course" element={<CourseDashboard />} />
        <Route path="leaderboard" element={<LeaderBoardDashboard />} />
        <Route path="blog" element={<BlogDashboard />} />
        <Route path="profile" element={<ProfileDasboard />} />
        <Route path="subject" element={<SubjectDashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
