import { Navigate, Route, Routes } from "react-router-dom";
import { BookingModalProvider } from "./components/booking/BookingModal";
import FloatingContactButtons from "./components/layout/FloatingContactButtons";
import AboutPage from "./pages/AboutPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import RoomDetailPage from "./pages/RoomDetailPage";
import ScrollToTop from "./components/layout/ScrollToTop";
import SeoManager from "./components/layout/SeoManager";
import StayPage from "./pages/StayPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BookingModalProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "14px",
            padding: "14px 18px",
            fontSize: "14px",
            fontWeight: "600",
          },
          success: {
            duration: 4000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
      <ScrollToTop />
      <SeoManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stay" element={<StayPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/rooms/:slug" element={<RoomDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FloatingContactButtons />
    </BookingModalProvider>
  );
}

export default App;
