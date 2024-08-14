import { Outlet, Route, Routes } from "react-router-dom";
import Test from "./components/test";
import Home from "./pages/home";
import Header from "./components/header";
import About from "./pages/home/about";
import Course from "./pages/home/course";
import Footer from "./components/footer";
import Register from "./pages/home/register";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        {/* The Outlet component will render the matched child route */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="course" element={<Course />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
