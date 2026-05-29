import { useEffect, useState } from "react";

export default function About() {
  // 🔹 CMS READY STATES
  const [teamMembers, setTeamMembers] = useState([]);
  const [timeline, setTimeline] = useState([]);

  // 🔹 TEMP STATIC DATA
  useEffect(() => {
    setTeamMembers([
      {
        id: 1,
        name: "John Carter",
        role: "Senior Plumber",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },

      {
        id: 2,
        name: "Michael Smith",
        role: "Pipe Installation Specialist",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      },

      {
        id: 3,
        name: "David Wilson",
        role: "Emergency Technician",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
    ]);

    setTimeline([
      {
        year: "2014",
        title: "Company Founded",
        description:
          "PlumbTech Ltd started residential plumbing services.",
      },

      {
        year: "2017",
        title: "Commercial Expansion",
        description:
          "Expanded services to commercial plumbing solutions.",
      },

      {
        year: "2020",
        title: "24/7 Emergency Support",
        description:
          "Introduced full emergency plumbing response team.",
      },

      {
        year: "2024",
        title: "500+ Projects Completed",
        description:
          "Reached a major milestone across residential and commercial projects.",
      },
    ]);
  }, []);

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">

      {/* 🔷 HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-bold">
          About PlumbTech Ltd
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-200">
          Reliable plumbing professionals delivering trusted services
          for homes and businesses.
        </p>
      </section>

      {/* 🔷 COMPANY STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <span className="text-blue-600 font-semibold uppercase text-sm">
            Who We Are
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Your Trusted Plumbing Experts
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            PlumbTech Ltd is a professional plumbing company dedicated
            to providing high-quality residential, commercial, and
            emergency plumbing services. With years of experience and a
            commitment to excellence, we ensure every customer receives
            reliable and affordable solutions.
          </p>

          {/* MISSION & VISION */}
          <div className="mt-8 space-y-6">

            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-700">
                Our Mission
              </h3>

              <p className="mt-3 text-gray-600">
                To deliver fast, professional, and affordable plumbing
                services while maintaining the highest standards of
                workmanship and customer satisfaction.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-700">
                Our Vision
              </h3>

              <p className="mt-3 text-gray-600">
                To become the leading trusted plumbing company known for
                innovation, reliability, and outstanding customer care.
              </p>
            </div>

          </div>
        </div>

        {/* IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            alt="Plumber"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* 🔷 TEAM SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <span className="text-blue-600 font-semibold uppercase text-sm">
            Our Team
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Meet Our Professionals
          </h2>

          <p className="mt-4 text-gray-600">
            Skilled plumbers and technicians committed to quality service.
          </p>

          {/* TEAM GRID */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
              >

                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    {member.name}
                  </h3>

                  <p className="text-blue-600 mt-2">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 🔷 EXPERIENCE TIMELINE */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">

          <div className="text-center">
            <span className="text-blue-600 font-semibold uppercase text-sm">
              Experience Timeline
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Our Journey
            </h2>
          </div>

          <div className="mt-16 space-y-8">

            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-8 border-l-4 border-blue-600"
              >

                <span className="text-blue-600 font-bold text-xl">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 🔷 TRUST SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <span className="uppercase text-sm text-blue-300 font-semibold">
            Trust & Safety
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Certified & Safety Focused
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-blue-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold">
                Certified Plumbers
              </h3>

              <p className="mt-3 text-gray-300">
                Licensed professionals with verified industry experience.
              </p>
            </div>

            <div className="bg-blue-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold">
                Safety Standards
              </h3>

              <p className="mt-3 text-gray-300">
                Strict adherence to safety and plumbing regulations.
              </p>
            </div>

            <div className="bg-blue-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold">
                Quality Assurance
              </h3>

              <p className="mt-3 text-gray-300">
                Every project is inspected to ensure customer satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}