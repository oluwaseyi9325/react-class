// import { useState } from "react";
// import Sidebar from "./component/Sidebar";
// import Nav from "./component/Nav";


// export default function Layout({ children, active }) {
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="flex">
//       {open && <Sidebar/>}

//       <div className="flex-1">
//         <Nav  active={active} onToggleSidebar={() => setOpen(!open)} />
//         <main className="p-6 bg-gray-50 min-h-screen">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import Sidebar from "./component/Sidebar";
import Nav from "./component/Nav";

export default function Layout({ children, active }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <Nav active={active} onToggleSidebar={() => setOpen(!open)} />

        <main className="p-6 bg-gray-50 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
