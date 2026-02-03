import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Droplet, Church, BookOpen } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const DonatesHubHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      headline: 'Hope for the African Child',
      subtext: 'Nourished and rooted in Christ',
      cta: 'Give Now',
      ctaLink: '/donate',
      icon: Heart,
      image: '/images/IMG-20250814-WA0011 (1).jpg',
      color: 'from-blue-50 to-cyan-50',
      accentColor: 'text-blue-600',
    },
    {
      id: 2,
      headline: 'Clean Water for All',
      subtext: 'In Jesus Name',
      cta: 'See Our Impact',
      ctaLink: '/impact',
      icon: Droplet,
      image: '/images/WhatsApp Image 2026-01-04 at 12.46.38 AM.jpeg',
      color: 'from-blue-50 to-cyan-50',
      accentColor: 'text-blue-600',
    },
    {
      id: 3,
      headline: 'Co-laboring with churches',
      subtext: 'For Holistic Development',
      cta: 'Get Involved',
      ctaLink: '/get-involved',
      icon: Church,
      image: '/images/WhatsApp Image 2026-01-04 at 12.46.18 AM.jpeg',
      color: 'from-rose-50 to-pink-50',
      accentColor: 'text-rose-600',
    },
    {
      id: 4,
      headline: 'Gospel The Proclaimation',
      subtext: 'One Soul at a Time',
      cta: 'Learn More',
      ctaLink: '/about',
      icon: BookOpen,
      image: '/images/Jesus Film.JPG',
      color: 'from-purple-50 to-indigo-50',
      accentColor: 'text-purple-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        speed={1000}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        loop
        className="w-full"
      >
        {slides.map((slide, index) => {
          const IconComponent = slide.icon;
          return (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image}
                    alt={slide.headline}
                    className="w-full h-full object-cover object-center"
                    style={{ filter: 'brightness(1.2) contrast(1.05)' }}
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/40"></div>
                  {/* Gradient overlay matching original color scheme */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20`}></div>
                </div>

                <div className="relative z-10 max-w-7xl w-full mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-col justify-center"
                    >
                      <motion.div variants={itemVariants} className="mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg">
                          <IconComponent className={`w-8 h-8 ${slide.accentColor}`} />
                        </div>
                      </motion.div>

                      <motion.h1
                        variants={itemVariants}
                        className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-2xl"
                      >
                        {slide.headline}
                      </motion.h1>

                      <motion.p
                        variants={itemVariants}
                        className="text-sm sm:text-base lg:text-lg xl:text-xl text-brand-gold font-semibold mb-6 leading-relaxed max-w-xl drop-shadow-lg"
                      >
                        {slide.subtext}
                      </motion.p>

                      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to={slide.ctaLink}
                          className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-brand-gold hover:bg-yellow-500 text-brand-blue font-semibold rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-brand text-sm sm:text-base"
                        >
                          {slide.cta}
                          <Heart className="ml-2 h-5 w-5 group-hover:animate-pulse-soft" />
                        </Link>
                        <Link
                          to="/#impact"
                          className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-full transition-all duration-500 backdrop-blur-sm text-sm sm:text-base transform hover:scale-105"
                        >
                          Learn More
                        </Link>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="hidden lg:flex items-center justify-center"
                    >
                      <div className="relative w-full h-96 rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden border border-white/20">
                        <motion.div
                          animate={{
                            y: [0, -20, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="text-center"
                        >
                          <IconComponent className="w-32 h-32 mx-auto text-white opacity-90 drop-shadow-lg" />
                        </motion.div>

                        <motion.div
                          animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.2, 0.6, 0.2],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="absolute inset-0 rounded-3xl border-2 border-white/50"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <button className="swiper-button-prev absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 hover:bg-white text-gray-900 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        <button className="swiper-button-next absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 hover:bg-white text-gray-900 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </Swiper>

      <style>{`
        .swiper-pagination {
          bottom: 30px !important;
          z-index: 30;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.5);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background-color: #F5B916;
          width: 32px;
          border-radius: 6px;
          opacity: 1;
        }

        .swiper-button-prev,
        .swiper-button-next {
          cursor: pointer;
        }

        @media (max-width: 640px) {
          .swiper-pagination {
            bottom: 20px !important;
          }

          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
          }

          .swiper-pagination-bullet-active {
            width: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default DonatesHubHero;
