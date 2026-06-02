import { useEffect, useState } from "react";
import API from "../api/api";
import { BASE_URL } from "../api/config";
import { useNavigate } from "react-router-dom";

export default function QuoteRequests() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // AUTH CHECK
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchQuotes();
  }, [navigate]);

  // FETCH QUOTES
  const fetchQuotes = async () => {
    try {
      setLoading(true);

      const res = await API.get("/api/quotes");
      setQuotes(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // DELETE QUOTE
  const deleteQuote = async (id) => {
    try {
      await API.delete(`/api/quotes/${id}`);
      fetchQuotes();
    } catch (err) {
      console.log(err);
      alert("Failed to delete quote");
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-100">

      {/* TOP BAR */}
      <div className="bg-blue-900 text-white px-4 md:px-10 py-4 flex justify-between items-center">

        <h1 className="text-lg md:text-2xl font-bold">
          Quote Requests
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
      <div className="p-4 md:p-10">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          All Quote Requests
        </h2>

        {/* LOADING */}
        {loading && (
          <p className="text-gray-500">
            Loading quotes...
          </p>
        )}

        {/* EMPTY STATE */}
        {!loading && quotes.length === 0 && (
          <p className="text-gray-500">
            No quote requests found.
          </p>
        )}

        {/* GRID */}
        <div className="grid gap-6">

          {quotes.map((quote) => (
            <div
              key={quote._id}
              className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >

              {/* HEADER */}
              <div className="flex flex-col md:flex-row md:justify-between gap-4">

                <div className="space-y-1">

                  <h2 className="text-lg md:text-xl font-bold text-gray-800">
                    {quote.name}
                  </h2>

                  <p className="text-gray-500">
                    📞 {quote.phone}
                  </p>

                  <p className="text-gray-500">
                    📍 {quote.location}
                  </p>

                </div>

                <button
                  onClick={() => deleteQuote(quote._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg h-fit"
                >
                  Delete
                </button>

              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 text-gray-700">
                {quote.description}
              </p>

              {/* IMAGE */}
              {quote.media && (
                <img
                  src={`${BASE_URL}${quote.media}`}
                  alt="quote attachment"
                  className="mt-4 w-full h-48 md:h-60 object-cover rounded-lg"
                />
              )}

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}