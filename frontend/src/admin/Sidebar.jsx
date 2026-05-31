import { Link } from "react-router-dom";
import {
  X,
  LogOut,
  LayoutDashboard,
  MessageSquare,
  Bell,
  FileText,
  Image,
} from "lucide-react";

export default function Sidebar({
  open,
  setOpen,
  handleLogout,
}) {
  return (
    <>
      {/* BACKDROP (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-4 left-4 bottom-4 w-64
          bg-blue-900 text-white z-50
          rounded-2xl shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-[120%]"}
          md:translate-x-0
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-5 border-b border-blue-800">

          <h1 className="text-2xl font-bold">
            PlumbTech
          </h1>

          {/* CLOSE BUTTON (mobile only) */}
          <button
            className="md:hidden"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-col gap-2 p-4">

          <Link
            to="/admin/dashboard"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/admin/message"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 transition"
          >
            <MessageSquare size={20} />
            Messages
          </Link>

          <Link
            to="/admin/announcement"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 transition"
          >
            <Bell size={20} />
            Announcements
          </Link>

          <Link
            to="/admin/quotes"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 transition"
          >
            <FileText size={20} />
            Quote Requests
          </Link>

          <Link
            to="/admin/gallery"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800 transition"
          >
            <Image size={20} />
            Gallery Uploads
          </Link>

          {/* LOGOUT */}
          <button
            onClick={() => {
              setOpen(false);
              handleLogout?.();
            }}
            className="mt-4 flex items-center gap-3 bg-red-500 hover:bg-red-600 px-4 py-3 rounded-lg transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </nav>
      </aside>
    </>
  );
}