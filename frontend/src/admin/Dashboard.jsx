import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import AdminLayout from "./AdminLayout";

export default function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    announcements: 0,
    messages: 0,
    quotes: 0,
    gallery: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchStats();
  }, [navigate]);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const [ann, msg, quotes, gallery] = await Promise.all([
        API.get("/api/announcements", config),
        API.get("/api/messages", config),
        API.get("/api/quotes", config),
        API.get("/api/media", config),
      ]);

      setStats({
        announcements: ann.data.length,
        messages: msg.data.length,
        quotes: quotes.data.length,
        gallery: gallery.data.length,
      });
    } catch (error) {
      console.log("Dashboard fetch error:", error);

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/admin/login");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <AdminLayout>
      <div className="p-4 md:p-6 pt-40 md:pt-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-6">

          <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Dashboard Overview
          </h1>

          {/* LOGOUT BUTTON */}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm md:text-base"
          >
            Logout
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

          <Card title="Announcements" value={stats.announcements} />
          <Card title="Messages" value={stats.messages} />
          <Card title="Quote Requests" value={stats.quotes} />
          <Card title="Gallery Uploads" value={stats.gallery} />

        </div>
      </div>
    </AdminLayout>
  );
}

/* REUSABLE CARD COMPONENT */
function Card({ title, value }) {
  return (
    <div className="bg-white p-5 md:p-6 rounded-xl shadow hover:shadow-lg transition text-center md:text-left">
      <h2 className="text-gray-500 text-sm md:text-base">{title}</h2>
      <p className="text-3xl md:text-4xl font-bold mt-2">{value}</p>
    </div>
  );
}