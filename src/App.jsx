import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import AboutPage from "./pages/About/AboutPage";
import ServicePage from "./pages/Service/ServicePage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import AdminPage from "./pages/Admin/AdminPage";
<<<<<<< HEAD
import ScrollToTop from "./components/common/Scrollpage";
import ProfilePage from "./pages/users/ProfilePage";
=======
>>>>>>> 36737131500f0259807a8de4f5f258d39c61b061


import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";


import AddRoom from "./pages/Admin/AddRoom";

export default function App() {
  return (
    <>
<<<<<<< HEAD
    <ScrollToTop/>
=======
>>>>>>> 36737131500f0259807a8de4f5f258d39c61b061
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
<<<<<<< HEAD
          
          <Route path="/profile" element={<ProfilePage />} />


=======
>>>>>>> 36737131500f0259807a8de4f5f258d39c61b061
        </Routes>
      </main>

      <Footer />
    </>
  );
}
