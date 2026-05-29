import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-4">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-blue-600">
          PlumbTech Ltd
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm font-medium items-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/quote" className={linkClass}>Quote</NavLink>
          <NavLink to="/subscription" className={linkClass}>Plans</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          {/* DASHBOARD */}
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-3 py-1 rounded"
                : "bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-600 hover:text-white"
            }
          >
            Dashboard
          </NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-4 text-sm font-medium">
          <NavLink onClick={() => setOpen(false)} to="/" className={mobileLinkClass}>
            Home
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/services" className={mobileLinkClass}>
            Services
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/about" className={mobileLinkClass}>
            About
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/gallery" className={mobileLinkClass}>
            Gallery
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/quote" className={mobileLinkClass}>
            Quote
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/subscription" className={mobileLinkClass}>
            Plans
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/contact" className={mobileLinkClass}>
            Contact
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-3 py-2 rounded text-center"
                : "bg-blue-100 text-blue-700 px-3 py-2 rounded text-center"
            }
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
}