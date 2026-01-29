import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);






  const slides = [
    {
      image: "/images/IMG-20250814-WA0011 (1).jpg",
      title: "Hope for the African Child",
      subtitle: "Nourished and rooted in Christ",
    },
    {
      image: "/images/WhatsApp Image 2026-01-04 at 12.46.38 AM.jpeg",
      title: "Clean Water for All",
        subtitle: "In Jesus Name",
    },
    {
      image: "/images/WhatsApp Image 2026-01-04 at 12.46.18 AM.jpeg",
      title: "Co-laboring with churches",
      subtitle: "For Holistic Development",
      
    },
    {
      image: "/images/Jesus Film.JPG",
      title: "Gospel The Proclaimation",
      subtitle: "One Soul at a Time",
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
    <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/65"></div>
          </motion.div>
        ))}
      </div>

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
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-20 md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <div className="mb-4">
              <span className="bg-brand-gold/90 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                {slides[currentSlide].focus}
              </span>
            </div> */}
            
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2
              }}
              className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-brand-gold font-semibold mb-4 md:mb-6">
              {slides[currentSlide].subtitle}
            </h2>
            
            {/* <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 leading-relaxed">
              {slides[currentSlide].description}
            </p> */}
            
            <div className="flex flex-row gap-3 justify-center">
              <Link
                to="/donate"
                className="relative bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 flex items-center justify-center group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-brand-blue"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-10 flex items-center">
                  <Sparkles className="mr-1 h-4 w-4 md:mr-2 md:h-5 md:w-5 animate-pulse" />
                Give
                  <ArrowRight className="ml-1 h-4 w-4 md:ml-2 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/impact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
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
                ? 'bg-brand-gold scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-brand-gold"
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