import Sidebar from "./Sidebar";


export default function AdminLayout({ children }) {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="ml-64 w-full">

        {/* TOP HEADER */}
        <div className="bg-white shadow px-8 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-blue-700">
            PlumbTech Admin
          </h1>

          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Logout
          </button>

        </div>

        {/* PAGE CONTENT */}
        <div className="p-8">
          {children}
        </div>

      </div>
    </div>
  );
}