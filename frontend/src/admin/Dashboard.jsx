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
      const [ann, msg, quotes, gallery] = await Promise.all([
        API.get("/api/announcements"),
        API.get("/api/messages"),
        API.get("/api/quotes"),
        API.get("/api/media"),
      ]);

      setStats({
        announcements: ann.data.length,
        messages: msg.data.length,
        quotes: quotes.data.length,
        gallery: gallery.data.length,
      });
    } catch (error) {
      console.log("Dashboard fetch error:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="p-4 md:p-6 pt-20 md:pt-6">

        {/* TITLE */}
        <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          Dashboard Overview
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6">

          {/* CARD 1 */}
          <div className="bg-white p-5 md:p-6 rounded-xl shadow hover:shadow-lg transition text-center md:text-left">
            <h2 className="text-gray-500 text-sm md:text-base">
              Announcements
            </h2>
            <p className="text-3xl md:text-4xl font-bold mt-2">
              {stats.announcements}
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-5 md:p-6 rounded-xl shadow hover:shadow-lg transition text-center md:text-left">
            <h2 className="text-gray-500 text-sm md:text-base">
              Messages
            </h2>
            <p className="text-3xl md:text-4xl font-bold mt-2">
              {stats.messages}
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-5 md:p-6 rounded-xl shadow hover:shadow-lg transition text-center md:text-left">
            <h2 className="text-gray-500 text-sm md:text-base">
              Quote Requests
            </h2>
            <p className="text-3xl md:text-4xl font-bold mt-2">
              {stats.quotes}
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-5 md:p-6 rounded-xl shadow hover:shadow-lg transition text-center md:text-left">
            <h2 className="text-gray-500 text-sm md:text-base">
              Gallery Uploads
            </h2>
            <p className="text-3xl md:text-4xl font-bold mt-2">
              {stats.gallery}
            </p>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}