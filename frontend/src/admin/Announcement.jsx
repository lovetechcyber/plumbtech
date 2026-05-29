import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

export default function Announcement() {
  const [message, setMessage] = useState("");

  // FETCH CURRENT ANNOUNCEMENT
  useEffect(() => {
    fetchAnnouncement();
  }, []);

  const fetchAnnouncement = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/announcement"
    );

    setMessage(res.data.message);
  };

  // SAVE ANNOUNCEMENT
  const saveAnnouncement = async () => {
    await axios.post(
      "http://localhost:5000/api/announcement",
      {
        message,
      }
    );

    alert("Announcement Updated");
  };

  return (
    <AdminLayout>

      <div className="bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Homepage Announcement
        </h1>

        <textarea
          rows="6"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          className="w-full border p-4 rounded-lg"
          placeholder="Write announcement..."
        />

        <button
          onClick={saveAnnouncement}
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Save Announcement
        </button>

      </div>

    </AdminLayout>
  );
}