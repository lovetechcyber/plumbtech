import { useEffect, useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Announcement() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // AUTH CHECK (important since AdminLayout is removed)
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchAnnouncement();
  }, [navigate]);

  // FETCH CURRENT ANNOUNCEMENT
  const fetchAnnouncement = async () => {
    try {
      const res = await API.get("/api/announcement");
      setMessage(res.data.message || "");
    } catch (err) {
      console.log(err);
    }
  };

  // SAVE ANNOUNCEMENT
  const saveAnnouncement = async () => {
    try {
      setLoading(true);

      await API.post("/api/announcement", {
        message,
      });

      alert("Announcement Updated");
    } catch (err) {
      console.log(err);
      alert("Failed to update announcement");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-100">

      {/* TOP HEADER */}
      <div className="bg-blue-900 text-white px-4 md:px-10 py-4 flex justify-between items-center">

        <h1 className="text-lg md:text-2xl font-bold">
          PlumbTech Admin
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/admin/login");
          }}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm md:text-base"
        >
          Logout
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex justify-center px-4 py-10">

        <div className="w-full max-w-3xl bg-white p-5 md:p-8 rounded-xl shadow-lg">

          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Homepage Announcement
          </h1>

          <textarea
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write announcement..."
          />

          <button
            onClick={saveAnnouncement}
            disabled={loading}
            className="
              mt-5 w-full md:w-auto
              bg-blue-600 hover:bg-blue-700
              text-white px-6 py-3
              rounded-lg transition
            "
          >
            {loading ? "Saving..." : "Save Announcement"}
          </button>

        </div>
      </div>
    </div>
  );
}