// import React from "react";
// import { Menu, Bell, Search } from "lucide-react";

// function Nav({ onToggleSidebar, active }) {
//   return (
//     <header className="h-16 w-full bg-white border-b flex items-center justify-between px-6">
//       {/* Left section */}
//       <div className="flex items-center gap-4">
//         {/* Sidebar toggle */}
//         <button
//           onClick={onToggleSidebar}
//           className="p-2 rounded-lg hover:bg-gray-100 transition"
//         >
//           <Menu size={22} />
//         </button>

//         {/* Page title */}
//         <h2 className="text-lg font-semibold text-gray-800">
//         {active}
//         </h2>
//       </div>

//       {/* Right section */}
//       <div className="flex items-center gap-4">
//         {/* Search */}
//         <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
//           <Search size={18} className="text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-transparent outline-none text-sm px-2 w-48"
//           />
//         </div>

//         {/* Notifications */}
//         <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
//           <Bell size={20} />
//           <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
//         </button>

//         {/* User */}
//         <div className="flex items-center gap-2 cursor-pointer">
//           <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">
//             SA
//           </div>
//           <div className="hidden md:block">
//             <p className="text-sm font-medium">Seyi</p>
//             <p className="text-xs text-gray-500">Admin</p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Nav;


import React from "react";
import { Menu, Bell, Search } from "lucide-react";

function Nav({ onToggleSidebar, active }) {
  return (
    <header className="h-16 w-full bg-white border-b flex items-center justify-between px-4 md:px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Hamburger */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
        >
          <Menu size={22} />
        </button>

        <h2 className="text-lg font-semibold text-gray-800">{active}</h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search (desktop only) */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm px-2 w-48"
          />
        </div>

        <button className="relative p-2 rounded-lg hover:bg-gray-100">
          <Bell size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">
            SA
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">Seyi</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
