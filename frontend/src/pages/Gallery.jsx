import { useEffect, useState } from "react";
import axios from "axios";

const categories = ["All", "Repairs", "Installations", "Emergency"];

export default function GalleryPage() {
  const [media, setMedia] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    const res = await axios.get("http://localhost:5000/api/media");
    setMedia(res.data);
  };

  const filteredMedia =
    filter === "All"
      ? media
      : media.filter((item) => item.category === filter);

  return (
    <div className="p-6">
      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-4">Our Work Gallery</h1>
      <p className="text-gray-600 mb-6">
        Proof of completed plumbing projects and emergency responses.
      </p>

      {/* FILTERS */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
              filter === cat ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MASONRY GRID */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredMedia.map((item) => (
          <div
            key={item._id}
            className="break-inside-avoid rounded-lg overflow-hidden shadow-lg bg-white"
          >
            {item.type === "image" ? (
              <img
                src={item.url}
                alt=""
                className="w-full object-cover hover:scale-105 transition"
              />
            ) : (
              <video controls className="w-full">
                <source src={item.url} />
              </video>
            )}

            <div className="p-3">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}