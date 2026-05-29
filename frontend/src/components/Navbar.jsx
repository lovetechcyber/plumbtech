import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white fixed w-full top-0 z-50">
      <h1 className="text-xl font-bold text-blue-600">PlumbTech Ltd</h1>

      <div className="flex gap-4 text-sm font-medium">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/quote">Quote</Link>
        <Link to="/subscription">Plans</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}