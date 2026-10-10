import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import HomePage from './pages/HomePage'
import WallCladdingPage from './pages/WallCladding'
import BuildingServicesPage from './pages/BuildingServices'
import GalleryPage from './pages/Gallery'
import ContactUsPage from './pages/ContactUs'
import NewRoofsPage from './pages/NewRoofs'
import FlatRoofsPage from './pages/FlatRoofs'
import RoofRepairsPage from './pages/RoofRepairs'
import GuttersPage from './pages/Gutters'
import DryFixPage from './pages/DryFix'

// Scroll to top or element on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => { 
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash])
  return null
}

// Generic "Coming Soon" placeholder page for routes not yet built
function ComingSoon({ title }) {
  return (
    <div className="coming-soon">
      <div className="coming-soon__inner">
        <h1>{title}</h1>
        <p>This page is coming soon. Check back later!</p>
        <a href="/" className="btn btn--primary mt-2">← Back to Home</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wall-cladding" element={<WallCladdingPage />} />
        <Route path="/roofing-services/new-roofs" element={<NewRoofsPage />} />
        <Route path="/roofing-services/flat-roofs" element={<FlatRoofsPage />} />
        <Route path="/roofing-services/roof-repairs" element={<RoofRepairsPage />} />
        <Route path="/roofing-services/gutters" element={<GuttersPage />} />
        <Route path="/roofing-services/dry-fix" element={<DryFixPage />} />
        <Route path="/building-services" element={<BuildingServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
        <Route path="*" element={<ComingSoon title="Page Not Found" />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
