import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import AboutPage from "./pages/About/AboutPage";
import ServicePage from "./pages/Service/ServicePage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import AdminPage from "./pages/Admin/AdminPage";


import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";


import AddRoom from "./pages/Admin/AddRoom";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/admin/"element={<AdminPage/>}/>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/rooms" element={<AddRoom/>} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
