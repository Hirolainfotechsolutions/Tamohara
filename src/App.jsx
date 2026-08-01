import { Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import BlogDetailPage from './pages/BlogDetailPage'
import BlogsPage from './pages/BlogsPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import RoomDetailPage from './pages/RoomDetailPage'
import ScrollToTop from './components/layout/ScrollToTop'
import StayPage from './pages/StayPage'

function App() {
  return (
    <>
      <ScrollToTop />
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
    </>
  )
}

export default App
