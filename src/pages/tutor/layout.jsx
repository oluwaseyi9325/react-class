


import { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Nav from "../../component/Nav";
import { Outlet, useNavigate } from "react-router-dom";



export default function TutorLayout() {
    const [open, setOpen] = useState(true);
    const [isLogin, setIsLogin] = useState(true)
    const navigate= useNavigate()
    useEffect(() => {
        localStorage.getItem("token") ? setIsLogin(true) : setIsLogin(false)
        if (!isLogin) {
           navigate("/login") 
        }
    },[])

  return (
    <div className="flex">
      {open && <Sidebar/>}

      <div className="flex-1">
        <Nav onToggleSidebar={() => setOpen(!open)} />
        <main className="p-6 bg-gray-50 min-h-screen">
         <Outlet/>
        </main>
        <div>
          Footer
        </div>

      </div>
    </div>
  );
}
