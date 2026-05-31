import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR (mobile only) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-blue-900 text-white flex justify-between items-center p-4 mt-20 shadow">
        <h1 className="font-bold text-xl">PlumbTech</h1>

        <button onClick={() => setOpen(true)}>
          <Menu size={26} />
        </button>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* FLOATING SIDEBAR */}
      <aside
        className={`
          fixed top-4 left-4 bottom-4 w-64
          bg-blue-900 text-white z-50
          rounded-2xl shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-[120%]"}
          md:translate-x-0 md:left-4
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b border-blue-800">
          <h1 className="text-xl font-bold">PlumbTech</h1>

          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-2 p-4">
          <Link onClick={() => setOpen(false)} to="/admin/dashboard" className="p-2 rounded hover:bg-blue-800">
            Dashboard
          </Link>

          <Link onClick={() => setOpen(false)} to="/admin/message" className="p-2 rounded hover:bg-blue-800">
            Message
          </Link>

          <Link onClick={() => setOpen(false)} to="/admin/announcement" className="p-2 rounded hover:bg-blue-800">
            Announcement
          </Link>

          <Link onClick={() => setOpen(false)} to="/admin/quotes" className="p-2 rounded hover:bg-blue-800">
            Quote Requests
          </Link>

          <Link onClick={() => setOpen(false)} to="/admin/gallery" className="p-2 rounded hover:bg-blue-800">
            Gallery Uploads
          </Link>
        </nav>
      </aside>
    </>
  );
}