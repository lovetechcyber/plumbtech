import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();

  const links = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Messages",
      path: "/admin/message",
      icon: <MessageSquare size={20} />,
    },
    {
      name: "Announcements",
      path: "/admin/announcement",
      icon: <Bell size={20} />,
    },
    {
      name: "Quote Requests",
      path: "/admin/quotes",
      icon: <FileText size={20} />,
    },
    {
      name: "Gallery Uploads",
      path: "/admin/gallery",
      icon: <Image size={20} />,
    },
  ];

  return (
    <>
      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 bottom-0
          w-72 bg-blue-900 text-white
          z-50 shadow-2xl
          transition-transform duration-300 ease-in-out
          overflow-y-auto

          ${open
            ? "translate-x-0"
            : "-translate-x-full"}

          md:translate-x-0
        `}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-blue-800">

          <h1 className="text-2xl font-bold">
            PlumbTech
          </h1>

          <button
            className="md:hidden"
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>

        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-col p-4 gap-2">

          {links.map((link) => {
            const active =
              location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-3
                  px-4 py-3 rounded-xl
                  transition-all duration-200

                  ${
                    active
                      ? "bg-blue-700"
                      : "hover:bg-blue-800"
                  }
                `}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}

          {/* LOGOUT */}
          <button
            onClick={() => {
              setOpen(false);
              handleLogout?.();
            }}
            className="
              mt-6 flex items-center gap-3
              bg-red-500 hover:bg-red-600
              px-4 py-3 rounded-xl
              transition
            "
          >
            <LogOut size={20} />
            Logout
          </button>

        </nav>
      </aside>
    </>
  );
}