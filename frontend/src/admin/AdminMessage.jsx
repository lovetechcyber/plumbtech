import { useEffect, useState } from "react";
import axios from "axios";
import { FaEnvelope, FaTrash, FaCheckCircle } from "react-icons/fa";
import API from "../api/api";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  // FETCH MESSAGES
  const fetchMessages = async () => {
    try {
      const res = await API.get("/api/contact");
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // MARK AS READ
  const markAsRead = async (id) => {
    try {
      await API.patch(`/api/contact/${id}/read`);
      fetchMessages();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE MESSAGE
  const deleteMessage = async (id) => {
    try {
      await API.delete(`/api/contact/${id}`);
      fetchMessages();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          📩 Contact Messages
        </h1>

        <button
          onClick={fetchMessages}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Refresh
        </button>
      </div>

      {/* CONTENT */}
      {loading ? (
        <p>Loading messages...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          {/* LIST */}
          <div className="md:col-span-1 bg-white rounded-xl shadow p-4 h-[80vh] overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-gray-500">No messages found</p>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg._id}
                  onClick={() => setSelected(msg)}
                  className={`p-4 mb-3 rounded-lg cursor-pointer border transition
                    ${msg.read ? "bg-gray-50" : "bg-blue-50 border-blue-300"}`}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">{msg.name}</h2>
                    {!msg.read && (
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                        New
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 truncate">
                    {msg.message}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {msg.email}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* DETAILS PANEL */}
          <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
            {selected ? (
              <>
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold">
                    {selected.name}
                  </h2>

                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>

                <p className="text-gray-500 mt-1">{selected.email}</p>
                <p className="text-gray-500">{selected.phone}</p>

                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 whitespace-pre-wrap">
                    {selected.message}
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-4 mt-6">

                  {!selected.read && (
                    <button
                      onClick={() => markAsRead(selected._id)}
                      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      <FaCheckCircle /> Mark as Read
                    </button>
                  )}

                  <button
                    onClick={() => deleteMessage(selected._id)}
                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </>
            ) : (
              <p className="text-gray-500">
                Select a message to view details
              </p>
            )}
          </div>

        </div>
      )}
    </div>
  );
}