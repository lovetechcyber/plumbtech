import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./admin/Dashboard";
import Announcement from "./admin/Announcement";
import QuoteRequests from "./admin/QuoteRequests";
import AdminGallery from "./admin/AdminGallery";
import Login from "./admin/Login";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quote from "./pages/QuoteRequest";
import Subscription from "./pages/SubscriptionPage";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";

import { AuthProvider } from "./context/authContext";
import AdminMessages from "./admin/AdminMessage";

export default function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/admin/dashboard"
          element={
            
              <Dashboard />
            
          }
        />

        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/announcement" element={<Announcement />} />

        <Route path="/admin/quotes" element={<QuoteRequests />} />
        <Route path="/admin/message" element={<AdminMessages />} />
        <Route path="/admin/gallery" element={<AdminGallery />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}
