import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE / TABLET TOP BAR */}
      <div className="md:hidden flex items-center justify-between bg-blue-900 text-white p-4 fixed top-0 left-0 right-0 z-40 shadow-md">
        <h1 className="text-xl font-bold">PlumbTech</h1>

        <button onClick={() => setOpen(true)}>
          <Menu size={26} />
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-blue-900 text-white z-50
          shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-5 border-b border-blue-800">
          <h1 className="text-2xl font-bold">PlumbTech</h1>

          {/* close button only mobile */}
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-2 p-5">
          <Link onClick={() => setOpen(false)} to="/admin/dashboard" className="hover:bg-blue-800 p-2 rounded">
            Dashboard
          </Link>

          <Link onClick={() => setOpen(false)} to="/admin/message" className="hover:bg-blue-800 p-2 rounded">
            Message
          </Link>

          <Link onClick={() => setOpen(false)} to="/admin/announcement" className="hover:bg-blue-800 p-2 rounded">
            Announcement
          </Link>

          <Link onClick={() => setOpen(false)} to="/admin/quotes" className="hover:bg-blue-800 p-2 rounded">
            Quote Requests
          </Link>

          <Link onClick={() => setOpen(false)} to="/admin/gallery" className="hover:bg-blue-800 p-2 rounded">
            Gallery Uploads
          </Link>
        </nav>
      </aside>
    </>
  );
}