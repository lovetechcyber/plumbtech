import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminGallery() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Repairs");
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    const res = await axios.get("http://localhost:5000/api/media");
    setMedia(res.data);
  };

  const uploadMedia = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("category", category);

    await axios.post("http://localhost:5000/api/media/upload", formData);
    fetchMedia();
  };

  const deleteMedia = async (id) => {
    await axios.delete(`http://localhost:5000/api/media/${id}`);
    fetchMedia();
  };

  return (
    <div className="p-6">
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
              <img src={item.url} className="w-full h-40 object-cover" />
            ) : (
              <video src={item.url} controls className="w-full h-40" />
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