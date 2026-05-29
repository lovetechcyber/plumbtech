import { useState } from "react";
import API from "../api/api";

export default function QuoteRequest() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    issueType: "Leak",
    description: "",
    media: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

   const res = await API.post("/api/quotes", formData);

    if (res.ok) {
      window.location.href = "/success";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* LEFT INFO PANEL */}
        <div className="hidden md:flex flex-col justify-center p-10 bg-blue-600 text-white relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_60%)]" />

          <h2 className="text-3xl font-bold leading-tight">
            Fast & Reliable Plumbing Quotes
          </h2>

          <p className="mt-4 text-blue-100">
            Get instant responses for leaks, installations, and emergency repairs.
            Our experts respond within minutes.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-blue-100">
            <li>✔ 24/7 Emergency Support</li>
            <li>✔ Verified Professionals</li>
            <li>✔ Transparent Pricing</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-8 md:p-10 space-y-5"
        >
          <h1 className="text-2xl font-bold text-gray-800">
            Request a Free Quote
          </h1>

          {/* Inputs */}
          <div className="grid gap-4">

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              name="location"
              placeholder="Location"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <select
              name="issueType"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>Leak</option>
              <option>Installation</option>
              <option>Emergency</option>
            </select>

            <textarea
              name="description"
              placeholder="Describe your issue in detail..."
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl h-28 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* File Upload */}
            <label className="cursor-pointer border border-dashed border-gray-300 rounded-xl p-4 text-center text-sm text-gray-500 hover:border-blue-500 transition">
              Upload Image / Video (optional)
              <input
                type="file"
                name="media"
                onChange={handleChange}
                className="hidden"
              />
            </label>

            {form.media && (
              <p className="text-xs text-green-600">
                Selected: {form.media.name}
              </p>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              disabled
              className="w-full py-3 rounded-xl bg-gray-100 text-gray-400 cursor-not-allowed"
            >
              Smart Quote Generator (Coming Soon)
            </button>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}