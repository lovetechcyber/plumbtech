import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex items-center justify-between bg-blue-900 text-white p-4 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-xl font-bold">PlumbTech</h1>

        <button onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-blue-900 text-white z-50
          w-64 p-6 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:block
        `}
      >
        {/* CLOSE BUTTON (mobile only) */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h1 className="text-2xl font-bold">PlumbTech</h1>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* LOGO (desktop) */}
        <div className="hidden md:block p-4 border-b border-blue-800 mb-6">
          <h1 className="text-2xl font-bold">PlumbTech</h1>
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-4">
          <Link onClick={() => setOpen(false)} to="/admin/dashboard" className="hover:text-blue-300">
            Dashboard
          </Link>

          <Link onClick={() => setOpen(false)} to="/admin/message" className="hover:text-blue-300">
            Message
          </Link>

          <Link onClick={() => setOpen(false)} to="/admin/announcement" className="hover:text-blue-300">
            Announcement
          </Link>

          <Link onClick={() => setOpen(false)} to="/admin/quotes" className="hover:text-blue-300">
            Quote Requests
          </Link>

          <Link onClick={() => setOpen(false)} to="/admin/gallery" className="hover:text-blue-300">
            Gallery Uploads
          </Link>
        </nav>
      </div>
    </>
  );
}