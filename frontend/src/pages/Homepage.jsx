import { useEffect, useState } from "react";
import leakImg from "../assets/leak.jpg";
import {
  Wrench,
  ShieldCheck,
  Clock,
  Droplets,
  AlertTriangle,
  Drill,
  Star,
  PhoneCall,
  FileText,
  Quote,
} from "lucide-react";

export default function Home() {
  const [announcement, setAnnouncement] = useState(
    "🚨 Emergency Service 24/7 | Call Now: 08023392506"
  );

  useEffect(() => {
    fetch("http://localhost:5000/api/announcement")
      .then((res) => res.json())
      .then((data) => {
        if (data?.message) setAnnouncement(data.message);
      })
      .catch((err) => console.log(err));
  }, []);

   const services = [
    {
      title: "Pipe Installation",
      desc: "Professional pipe installation for homes and businesses.",
      icon: Wrench,
    },
    {
      title: "Leak Repair",
      desc: "Fast detection and repair of water leaks.",
      icon: Droplets,
    },
    {
      title: "Emergency Plumbing",
      desc: "24/7 urgent plumbing support and repairs.",
      icon: AlertTriangle,
    },
    {
      title: "Borehole Installation",
      desc: "Professional borehole drilling and water system setup.",
      icon: Drill,
    },
  ];

  const testimonials = [
    {
      name: "Michael Johnson",
      role: "Home Owner",
      text: "PlumbTech responded within 30 minutes during a pipe emergency. Their professionalism and speed were impressive.",
    },
    {
      name: "Sarah Williams",
      role: "Restaurant Manager",
      text: "Their maintenance subscription has saved us from multiple plumbing disasters. Highly reliable team.",
    },
    {
      name: "David Clark",
      role: "Property Manager",
      text: "Excellent workmanship, transparent pricing, and very friendly staff. I highly recommend PlumbTech Ltd.",
    },
  ];

  return (
    <div className="pt-20">
      {/* 🔔 ANNOUNCEMENT BAR (ADMIN CONTROLLED) */}
      <div className="bg-blue-900 text-white text-sm text-center py-2">
        {announcement}
      </div>

      {/* 🏠 HERO SECTION */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600566752355-35792bedcfea')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold leading-tight">
            Reliable Plumbing <br />
            <span className="text-blue-400">Solutions You Can Trust</span>
          </h1>

          <p className="mt-4 text-gray-300 max-w-lg">
            Fast. Reliable. Professional Plumbing Services for homes and
            businesses.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="/quote" className="bg-blue-600 px-6 py-3 rounded shadow">
              Request a Quote
            </a>

            <a
              href="/services"
              className="border border-white px-6 py-3 rounded"
            >
              View Services
            </a>
          </div>

          {/* FEATURES */}
          <div className="mt-10 flex gap-8 text-sm">
            <span>✔ 24/7 Emergency</span>
            <span>✔ Certified Plumbers</span>
            <span>✔ Satisfaction Guaranteed</span>
          </div>
        </div>
      </section>

      {/* 🔧 SERVICES PREVIEW */}

      <section className="py-20 bg-gray-50 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800">
          Our Plumbing Services
        </h2>
        <p className="text-gray-500 mt-2">
          Reliable solutions for residential, commercial, and industrial needs
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 mt-10">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-blue-50 group-hover:bg-blue-600 transition">
                    <Icon
                      className="text-blue-600 group-hover:text-white transition"
                      size={28}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ⭐ WHY CHOOSE US */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">Your Local Plumbing Experts</h2>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✔ Fully Licensed & Insured</li>
            <li>✔ Transparent Pricing</li>
            <li>✔ Quality Workmanship</li>
            <li>✔ Fast Response Time</li>
          </ul>

          <button className="mt-6 bg-blue-600 text-white px-6 py-2">
            Learn More
          </button>
        </div>

        <img src={leakImg} className="rounded shadow" />
      </section>

      {/* 📊 STATS SECTION */}
      <section className="bg-blue-900 text-white py-12">
        <div className="grid md:grid-cols-4 text-center gap-6">
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p>Emergency Support</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">10+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      {/* 🚨 CTA BANNER */}
      {/* 🚨 CTA BANNER */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-14 text-center overflow-hidden">
        {/* decorative glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent)]" />

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="flex justify-center mb-3">
            <AlertTriangle size={32} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Emergency Plumbing? We’re Ready 24/7
          </h2>

          <p className="mt-3 text-blue-100">
            Burst pipes, leaks, or blockages — get a certified plumber in
            minutes.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+2348023392506"
              className="flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              <PhoneCall size={18} /> Call Now
            </a>

            <a
              href="/quote"
              className="flex items-center justify-center gap-2 border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              <FileText size={18} /> Get Instant Quote
            </a>
          </div>
        </div>
      </section>
      {/* 💬 TESTIMONIALS */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* background decoration */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* heading */}
          <div className="text-center mb-14">
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
              Client Testimonials
            </span>

            <h2 className="text-4xl font-bold mt-4 text-gray-900">
              What Our Clients Say
            </h2>

            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Trusted by homeowners, businesses, and property managers for fast,
              reliable, and professional plumbing solutions.
            </p>
          </div>

          {/* testimonial cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100 hover:-translate-y-2"
              >
                {/* quote icon */}
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                  <Quote size={24} />
                </div>

                {/* stars */}
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill="currentColor"
                      className="group-hover:scale-110 transition"
                    />
                  ))}
                </div>

                {/* testimony */}
                <p className="text-gray-600 leading-relaxed italic">
                  "{t.text}"
                </p>

                {/* profile */}
                <div className="mt-6 flex items-center gap-4">
                  {/* avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center font-bold text-lg shadow">
                    {t.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>

                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📦 FOOTER CTA */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold">
            Keep Your Plumbing System Protected
          </h2>

          <p className="mt-2 text-blue-200">
            Subscribe to affordable monthly maintenance plans
          </p>

          {/* benefits */}
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-blue-800 p-4 rounded-lg">
              <ShieldCheck className="mb-2" />
              <h4 className="font-semibold">Prevent Major Damage</h4>
              <p className="text-sm text-blue-200">
                Regular inspections reduce expensive repairs
              </p>
            </div>

            <div className="bg-blue-800 p-4 rounded-lg">
              <Wrench className="mb-2" />
              <h4 className="font-semibold">Expert Maintenance</h4>
              <p className="text-sm text-blue-200">
                Certified plumbers handle your home care
              </p>
            </div>

            <div className="bg-blue-800 p-4 rounded-lg">
              <Clock className="mb-2" />
              <h4 className="font-semibold">Priority Response</h4>
              <p className="text-sm text-blue-200">
                Faster service when emergencies happen
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="/subscription"
            className="mt-8 inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:scale-105 transition"
          >
            View Plans
          </a>
        </div>
      </section>
    </div>
  );
}
