import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import API from "../api/api";
import { BASE_URL } from "../api/config";

export default function QuoteRequests() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    const res = await API.get(
      "/api/quotes"
    );

    setQuotes(res.data);
  };

  const deleteQuote = async (id) => {
    await API.delete(
      `/api/quotes/${id}`
    );

    fetchQuotes();
  };

  return (
    <AdminLayout>

      <div>

        <h1 className="text-3xl font-bold mb-8">
          Quote Requests
        </h1>

        <div className="grid gap-6">

          {quotes.map((quote) => (
            <div
              key={quote._id}
              className="bg-white p-6 rounded-xl shadow"
            >

              <div className="flex justify-between">

                <div>
                  <h2 className="text-xl font-bold">
                    Client Name= {quote.name}
                  </h2>

                  <p className="text-gray-500">
                    Phone Number= {quote.phone}
                  </p>

                  <p className="text-gray-500">
                    Location= {quote.location}
                  </p>
                </div>

                <button
                  onClick={() =>
                    deleteQuote(quote._id)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </div>

              <p className="mt-4 text-gray-700">
                Description= {quote.description}
              </p>

              {/* IMAGE */}
              {quote.media && (
                <img
                  src={`${BASE_URL}${quote.media}`}
                  alt=""
                  className="mt-4 h-52 rounded-lg object-cover"
                />
              )}

            </div>
          ))}

        </div>

      </div>

    </AdminLayout>
  );
}