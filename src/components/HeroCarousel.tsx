import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg",
      title: "Empowering Education",
      subtitle: "Building Brighter Futures Through Learning",
      description: "Providing quality education and school supplies to children across Ghana, ensuring every child has the opportunity to learn and grow.",
      focus: "Education"
    },
    {
      image: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg",
      title: "Clean Water for All",
      subtitle: "Life-Changing Access to Safe Water",
      description: "Installing clean water systems in rural communities, bringing health and hope to families who need it most.",
      focus: "Water & Health"
    },
    {
      image: "https://images.pexels.com/photos/8853498/pexels-photo-8853498.jpeg",
      title: "Supporting Orphanages",
      subtitle: "Caring for Our Most Vulnerable",
      description: "Providing essential support to orphanages and children's homes, ensuring every child feels loved and cared for.",
      focus: "Orphan Care"
    },
    {
      image: "https://images.pexels.com/photos/8853504/pexels-photo-8853504.jpeg",
      title: "Healthcare Access",
      subtitle: "Bringing Medical Care to Remote Areas",
      description: "Mobile health clinics and medical outreach programs serving communities with limited healthcare access.",
      focus: "Healthcare"
    },
    {
      image: "https://images.pexels.com/photos/8363016/pexels-photo-8363016.jpeg",
      title: "Faith & Community",
      subtitle: "Strengthening Spiritual Foundations",
      description: "Supporting churches and faith-based initiatives that serve as pillars of hope and community support.",
      focus: "Faith & Community"
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-purple-900/60"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="bg-orange-500/80 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                {slides[currentSlide].focus}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>
            
            <h2 className="text-2xl sm:text-3xl text-orange-300 font-semibold mb-6">
              {slides[currentSlide].subtitle}
            </h2>
            
            <p className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed">
              {slides[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Donate Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/impact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                See Our Impact
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-orange-500 scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-orange-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;