import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white fixed">

      <div className="p-6 border-b border-blue-800">
        <h1 className="text-2xl font-bold">
          PlumbTech
        </h1>
      </div>

      <nav className="flex flex-col p-6 gap-4">

        <Link
          to="/admin/dashboard"
          className="hover:text-blue-300"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/admin-message"
          className="hover:text-blue-300"
        >
          Message
        </Link>

        <Link
          to="/admin/announcement"
          className="hover:text-blue-300"
        >
          Announcement
        </Link>

        <Link
          to="/admin/quotes"
          className="hover:text-blue-300"
        >
          Quote Requests
        </Link>

        <Link
          to="/admin/gallery"
          className="hover:text-blue-300"
        >
          Gallery Uploads
        </Link>

      </nav>
    </div>
  );
}