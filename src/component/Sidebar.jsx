// import React from "react";
// import {
//   Home,
//   LayoutDashboard,
//   Users,
//   Settings,
//   LogOut,
// } from "lucide-react";

// function Sidebar() {
//   const menu = [
//     { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
//     { name: "Home", icon: Home, path: "/" },
//     { name: "Users", icon: Users, path: "/users" },
//     { name: "Settings", icon: Settings, path: "/settings" },
//   ];

//   return (
//     <aside className="h-screen w-64 border-r flex flex-col bg-[skyblue]">
//       {/* Logo */}
//       <div className="h-16 flex items-center px-6 border-b">
//         <h1 className="text-xl font-bold text-gray-800">MyApp</h1>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-4 py-6 space-y-2">
//         {menu.map((item) => {
//           const Icon = item.icon;
//           return (
//             <a
//               key={item.name}
//               href={item.path}
//               className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition"
//             >
//               <Icon size={20} />
//               <span className="text-sm font-medium">{item.name}</span>
//             </a>
//           );
//         })}
//       </nav>

//       {/* Footer */}
//       <div className="px-4 py-4 border-t">
//         <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition">
//           <LogOut size={20} />
//           <span className="text-sm font-medium">Logout</span>
//         </button>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;


import React from "react";
import {
  Home,
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  X,
} from "lucide-react";

function Sidebar({ open, onClose }) {
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Home", icon: Home, path: "/" },
    { name: "Users", icon: Users, path: "/users" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <aside
      className={`
        fixed md:static z-50 h-full w-64 bg-sky-200 border-r
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-6 border-b">
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Close button (mobile) */}
        <button
          onClick={onClose}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <X size={20} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.path}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.name}</span>
            </a>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t">
        <button onClick={()=> confirm("Are you")} className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-red-600 hover:bg-red-50">
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
