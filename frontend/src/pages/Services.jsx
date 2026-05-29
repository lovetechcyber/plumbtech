import { useEffect, useState } from "react";
import leakImg from "../assets/leak.jpg";
import pipeImg from "../assets/pipe.jpg";

export default function Services() {
  // 🔹 CMS READY STATE
  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  // 🔹 TEMP STATIC DATA
  useEffect(() => {
    setServices([
      {
        id: 1,
        name: "Leak Repairs",
        category: "Residential",
        description:
          "Quick leak detection and repair for homes and apartments.",
        image: leakImg,
      },

      {
        id: 2,
        name: "Pipe Installation",
        category: "Commercial",
        description:
          "Professional pipe installation for offices and industries.",
        image: pipeImg,
      },

      {
        id: 3,
        name: "Emergency Plumbing",
        category: "Emergency",
        description:
          "24/7 emergency plumbing response for urgent situations.",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
      },

      {
        id: 4,
        name: "Bathroom Fitting",
        category: "Residential",
        description:
          "Modern bathroom installations and fixture upgrades.",
        image:
          "https://images.unsplash.com/photo-1620626011761-996317b8d101",
      },

      {
        id: 5,
        name: "Drain Cleaning",
        category: "Commercial",
        description:
          "Advanced drain cleaning solutions for businesses.",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
      },

      {
        id: 6,
        name: "Burst Pipe Repair",
        category: "Emergency",
        description:
          "Rapid repair for damaged or burst plumbing systems.",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
      },
    ]);
  }, []);

  // 🔹 FILTER SERVICES
  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter(
          (service) => service.category === activeCategory
        );

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">

      {/* 🔷 HERO HEADER */}
      <section className="bg-blue-900 text-white py-20 text-center px-6">
        <h1 className="text-5xl font-bold">
          Our Plumbing Services
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-200">
          Professional plumbing solutions tailored for homes,
          businesses, and emergency situations.
        </p>
      </section>

      {/* 🔷 CATEGORY FILTERS */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {["All", "Residential", "Commercial", "Emergency"].map(
            (category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full transition ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white shadow"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* 🔷 SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            >

              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.name}
                className="h-60 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">

                {/* CATEGORY */}
                <span className="text-sm text-blue-600 font-medium">
                  {service.category}
                </span>

                {/* TITLE */}
                <h2 className="text-2xl font-bold mt-2">
                  {service.name}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-600 mt-3">
                  {service.description}
                </p>

                {/* CTA */}
                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Request Service
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 🔷 CTA SECTION */}
      <section className="bg-blue-600 text-white py-16 mt-16 text-center px-6">
        <h2 className="text-4xl font-bold">
          Need Emergency Plumbing Help?
        </h2>

        <p className="mt-4 text-lg">
          Our certified plumbers are available 24/7.
        </p>

        <a
          href="/quote"
          className="inline-block mt-6 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold"
        >
          Request Instant Quote
        </a>
      </section>
    </div>
  );
}