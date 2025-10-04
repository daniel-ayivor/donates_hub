import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import OurImpact from './pages/OurImpact';
import Activities from './pages/Activities';
import Donate from './pages/Donate';
import AboutUs from './pages/AboutUs';
import GetInvolved from './pages/GetInvolved';
import ProjectDetail from './pages/ProjectDetail';
import EventDetail from './pages/EventDetail';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impact" element={<OurImpact />} />
            <Route path="/impact/:id" element={<ProjectDetail />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:id" element={<EventDetail />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;