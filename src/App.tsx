import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Project from './pages/Project';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const OurImpact = lazy(() => import('./pages/OurImpact'));
const Activities = lazy(() => import('./pages/Activities'));
const Donate = lazy(() => import('./pages/Donate'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const Gallery = lazy(() => import('./pages/Gallery'));
const BubbleDemo = lazy(() => import('./pages/BubbleDemo'));
const GetInvolved = lazy(() => import('./pages/GetInvolved'));
const Contact = lazy(() => import('./pages/Contact'));
const TeamDetails = lazy(() => import('./pages/TeamDetails'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
       <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">

  </svg>
    </div>
  </div>
);


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 relative">
        <ScrollToTop />
        <Header />
        <div className="relative z-10">
            <Suspense fallback={<PageLoader />}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/impact" element={<OurImpact />} />
                  <Route path="/impact/:id" element={<ProjectDetail />} />
                  <Route path="/activities" element={<Activities />} />
                  <Route path="/activities/:id" element={<EventDetail />} />
                  <Route path="/donate" element={<Donate />} />
                       <Route path="/project" element={<Project />} />
                  <Route path="/team/:id" element={<TeamDetails />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/get-involved" element={<GetInvolved />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/bubbles" element={<BubbleDemo />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </div>
          <Footer />
        </div>
    </Router>
  );
}

export default App;