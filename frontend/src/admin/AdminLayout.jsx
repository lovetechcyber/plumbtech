import { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  // 📌 draggable position
  const [pos, setPos] = useState({ x: 20, y: 80 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  // 🖱️ mouse events
  const handleMouseDown = (e) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;

    setPos({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white shadow p-2 rounded"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </button>

      {/* BACKDROP (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* DRAGGABLE FLOATING SIDEBAR */}
      <aside
        onMouseDown={handleMouseDown}
        className={`
          fixed z-50 w-64 bg-white shadow-2xl rounded-xl
          cursor-grab active:cursor-grabbing
          transition-all duration-75
          md:block
          ${open ? "block" : "hidden md:block"}
        `}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
      >
        <Sidebar closeSidebar={() => setOpen(false)} />
      </aside>

      {/* MAIN CONTENT */}
      <div className="w-full">

        {/* TOP HEADER */}
        <div className="bg-white shadow px-4 md:px-8 py-4 flex justify-between items-center sticky top-0 z-30">

          <h1 className="text-xl md:text-2xl font-bold text-blue-700">
            PlumbTech Admin
          </h1>

          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Logout
          </button>
        </div>

        {/* PAGE CONTENT */}
        <main className="p-4 md:p-8">
          {children}
        </main>

      </div>
    </div>
  );
}