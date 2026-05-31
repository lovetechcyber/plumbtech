import { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR (Fixed) */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Sidebar closeSidebar={() => setOpen(false)} />
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 md:ml-64 w-full">

        {/* TOP HEADER */}
        <div className="bg-white shadow px-4 md:px-8 py-4 flex justify-between items-center sticky top-0 z-40">

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>

          <h1 className="text-xl md:text-2xl font-bold text-blue-700">
            PlumbTech Admin
          </h1>

          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
            Logout
          </button>
        </div>

        {/* PAGE CONTENT */}
        <main className="p-4 md:p-8">
          {children}
        </main>

      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}