import { useState, useEffect } from "react";
import axios from "axios";
import API from "../api/api";
import { BASE_URL } from "../api/config";

export default function AdminGallery() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Repairs");
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    const res = await API.get("/api/media");
    setMedia(res.data);
  };

  const uploadMedia = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("category", category);

    await API.post("/api/media/upload", formData);
    fetchMedia();
  };

  const deleteMedia = async (id) => {
    await API.delete(`/api/media/${id}`);
    fetchMedia();
  };

  return (
    <div className="p-6 pt-20">
      <h1 className="text-2xl font-bold mb-4">Admin Gallery Panel</h1>

      {/* UPLOAD */}
      <div className="p-4 border rounded mb-6">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full mb-2"
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-2"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Repairs</option>
          <option>Installations</option>
          <option>Emergency</option>
        </select>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-2"
        />

        <button
          onClick={uploadMedia}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-3 gap-4">
        {media.map((item) => (
          <div key={item._id} className="border p-2 rounded">
            {item.type === "image" ? (
              <img
                src={`${BASE_URL }${item.url}`}
                alt={item.title}
                loading="lazy"
                className="w-full object-cover hover:scale-105 transition duration-300"
              />
            ) : (
              <video controls className="w-full">
                <source src={`${BASE_URL }${item.url}`} />
              </video>
            )}

            <p className="font-bold">{item.title}</p>
            <p className="text-sm">{item.category}</p>

            <button
              onClick={() => deleteMedia(item._id)}
              className="bg-red-500 text-white px-3 py-1 mt-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
