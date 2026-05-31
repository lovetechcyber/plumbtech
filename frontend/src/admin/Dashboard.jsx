import { useEffect, useState } from "react";  
import { useNavigate } from "react-router-dom";  
  
import {  
  Menu,  
  Bell,  
  MessageSquare,  
  FileText,  
  Image,  
} from "lucide-react";  
  
import API from "../api/api";  
import Sidebar from "./Sidebar";  
  
export default function Dashboard() {  
  const navigate = useNavigate();  
  
  // SIDEBAR  
  const [open, setOpen] = useState(false);  
  
  // STATS  
  const [stats, setStats] = useState({  
    announcements: 0,  
    messages: 0,  
    quotes: 0,  
    gallery: 0,  
  });  
  
  // AUTH CHECK  
  useEffect(() => {  
    const token = localStorage.getItem("token");  
  
    if (!token) {  
      navigate("/admin/login");  
      return;  
    }  
  
    fetchStats();  
  }, [navigate]);  
  
  // FETCH STATS  
  const fetchStats = async () => {  
    try {  
      const token = localStorage.getItem("token");  
  
      const config = {  
        headers: {  
          Authorization: `Bearer ${token}`,  
        },  
      };  
  
      const [ann, msg, quotes, gallery] =  
        await Promise.all([  
          API.get("/api/announcements", config),  
          API.get("/api/messages", config),  
          API.get("/api/quotes", config),  
          API.get("/api/media", config),  
        ]);  
  
      setStats({  
        announcements: ann.data.length,  
        messages: msg.data.length,  
        quotes: quotes.data.length,  
        gallery: gallery.data.length,  
      });  
  
    } catch (error) {  
      console.log(error);  
  
      if (error.response?.status === 401) {  
        localStorage.removeItem("token");  
        navigate("/admin/login");  
      }  
    }  
  };  
  
  // LOGOUT  
  const handleLogout = () => {  
    localStorage.removeItem("token");  
    navigate("/admin/login");  
  };  
  
  return (  
    <div className="min-h-screen bg-gray-100">  
  
      {/* MOBILE TOPBAR */}  
      <div className="fixed top-0 left-0 right-0 z-40 bg-blue-900 text-white flex justify-between items-center p-4 shadow md:hidden">  
  
        <h1 className="font-bold text-xl">  
          PlumbTech  
        </h1>  
  
        <button onClick={() => setOpen(true)}>  
          <Menu size={26} />  
        </button>  
      </div>  
  
      {/* SIDEBAR */}  
      <Sidebar  
        open={open}  
        setOpen={setOpen}  
        handleLogout={handleLogout}  
      />  
  
      {/* MAIN CONTENT */}  
      <div className="w-full md:pl-72">  
  
        {/* DESKTOP HEADER */}  
        <header className="hidden md:flex sticky top-0 z-30 bg-white shadow-sm px-8 py-4 justify-between items-center">  
  
          <h1 className="text-2xl font-bold text-blue-700">  
            PlumbTech Admin  
          </h1>  
  
        </header>  
  
        {/* PAGE CONTENT */}  
        <main className="p-4 md:p-8 pt-24 md:pt-8">  
  
          {/* TITLE */}  
          <div className="mb-8">  
  
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">  
              Dashboard Overview  
            </h2>  
  
            <p className="text-gray-500 mt-2">  
              Welcome back to your admin dashboard  
            </p>  
          </div>  
  
          {/* CARDS */}  
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">  
  
            <Card  
              title="Announcements"  
              value={stats.announcements}  
              icon={<Bell size={28} />}  
            />  
  
            <Card  
              title="Messages"  
              value={stats.messages}  
              icon={<MessageSquare size={28} />}  
            />  
  
            <Card  
              title="Quote Requests"  
              value={stats.quotes}  
              icon={<FileText size={28} />}  
            />  
  
            <Card  
              title="Gallery Uploads"  
              value={stats.gallery}  
              icon={<Image size={28} />}  
            />  
  
          </div>  
  
        </main>  
      </div>  
    </div>  
  );  
}  
  
/* CARD COMPONENT */  
function Card({ title, value, icon }) {  
  return (  
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 md:p-6">  
  
      <div className="flex items-center justify-between mb-4">  
  
        <div className="text-blue-600">  
          {icon}  
        </div>  
  
        <span className="text-3xl md:text-4xl font-bold text-gray-800">  
          {value}  
        </span>  
      </div>  
  
      <h3 className="text-gray-500 text-sm md:text-base">  
        {title}  
      </h3>  
    </div>  
  );  
}