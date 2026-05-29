import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">

      {/* 🔷 HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-200">
          Need plumbing assistance? Reach out to our professional team
          anytime for fast and reliable support.
        </p>
      </section>

      {/* 🔷 CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">

        {/* 🔹 CONTACT FORM */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold">
            Send Us a Message
          </h2>

          <p className="text-gray-500 mt-3">
            Fill out the form and our team will get back to you shortly.
          </p>

          <form className="mt-8 space-y-6">

            {/* NAME */}
            <div>
              <label className="block font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block font-medium mb-2">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block font-medium mb-2">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-lg font-semibold"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* 🔹 CONTACT INFO PANEL */}
        <div className="space-y-8">

          {/* INFO CARD */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold">
              Contact Information
            </h2>

            <p className="text-gray-500 mt-3">
              We are available 24/7 for emergency plumbing services.
            </p>

            {/* PHONE */}
            <div className="flex items-start gap-4 mt-8">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaPhoneAlt className="text-blue-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Phone Number
                </h3>

                <p className="text-gray-600">
                  +234 8023392506
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4 mt-8">
              <div className="bg-blue-100 p-4 rounded-full">
                <MdEmail className="text-blue-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Email Address
                </h3>

                <p className="text-gray-600">
                  preprince54@gmail.com
                </p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-4 mt-8">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Office Address
                </h3>

                <p className="text-gray-600">
                  25 Flow Street Asaba, delta, Nigeria
                </p>
              </div>
            </div>

          </div>

          {/* 🔹 QUICK ACTIONS */}
          <div className="bg-blue-900 rounded-2xl shadow-lg p-8 text-white">

            <h2 className="text-3xl font-bold">
              Quick Actions
            </h2>

            <p className="mt-3 text-gray-300">
              Contact us instantly through call or WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-4">

              {/* CALL NOW */}
              <a
                href="tel:+2348023392506"
                className="bg-white text-blue-700 py-4 rounded-lg text-center font-semibold hover:bg-gray-100 transition"
              >
                📞 Call Now
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/2348023392506"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 py-4 rounded-lg text-center font-semibold hover:bg-green-600 transition"
              >
                💬 WhatsApp Chat
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* 🔷 GOOGLE MAP SECTION */}
      <section className="px-6 pb-20">

        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5022680292636!2d6.716193674807731!3d6.197268391725519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f3e040e2d179%3A0xf24f469fbbcf605d!2sfederal%20college%20of%20education!5e0!3m2!1sen!2sng!4v1780053677321!5m2!1sen!2sng"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>
      </section>

    </div>
  );
}