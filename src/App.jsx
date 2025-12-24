import { Routes, Route } from "react-router-dom"
import About from "./About";
import Home from "./pages/Home";
import NotFound from "./NotFound";
import Contact from "./Contact";
import { ToastContainer } from "react-toastify";
import User from "./User";
import Layout from "./Wrapper";
import TutorLayout from "./pages/tutor/layout";
// import Home from "./tutor/Home";
import Setting from "./pages/tutor/Setting";
import Course from "./pages/tutor/Course";
import TutorHome from "./pages/tutor/Home";
import Login from "./Login";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        
{/* tutor outlet */}
        <Route path="/tutor" element={<TutorLayout />}>
           <Route path="" element={<TutorHome/>} />
          <Route path="setting" element={<Setting/>} />
          <Route path="course" element={<Course />} />
          
        </Route>
      </Routes>
    </>
  );
}
export default App;