import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Zap, Heart } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const DonatesHubHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      headline: 'Welcome to Donates Hub',
      subtext: 'A platform by AAPG focused on charitable projects, community support, and social impact.',
      cta: 'Donate Now',
      ctaLink: '/donate',
      icon: Users,
      color: 'from-blue-50 to-cyan-50',
      accentColor: 'text-blue-600',
    },
    {
      id: 2,
      headline: 'Driving Change Through Action',
      subtext: 'Discover our activities, events, and projects making a difference in communities.',
      cta: 'View Projects',
      ctaLink: '/activities',
      icon: Zap,
      color: 'from-green-50 to-emerald-50',
      accentColor: 'text-green-600',
    },
    {
      id: 3,
      headline: 'Be Part of the Impact',
      subtext: 'Support our mission by donating, volunteering, or partnering with us.',
      cta: 'Get Involved',
      ctaLink: '/get-involved',
      icon: Heart,
      color: 'from-rose-50 to-pink-50',
      accentColor: 'text-rose-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
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
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        loop
        className="w-full"
      >
        {slides.map((slide, index) => {
          const IconComponent = slide.icon;
          return (
            <SwiperSlide key={slide.id} className="min-h-screen">
              <div
                className={`w-full min-h-screen bg-gradient-to-br ${slide.color} flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20`}
              >
                <div className="max-w-7xl w-full mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-col justify-center"
                    >
                      <motion.div variants={itemVariants} className="mb-6">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg`}
                        >
                          <IconComponent className={`w-8 h-8 ${slide.accentColor}`} />
                        </div>
                      </motion.div>

                      <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
                      >
                        {slide.headline}
                      </motion.h1>

                      <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl"
                      >
                        {slide.subtext}
                      </motion.p>

                      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to={slide.ctaLink}
                          className="inline-flex items-center justify-center px-8 py-4 bg-[#82ca9d] hover:bg-[#6fb884] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          {slide.cta}
                        </Link>
                        <Link
                          to="/#impact"
                          className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold rounded-full transition-all duration-300"
                        >
                          Learn More
                        </Link>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="hidden lg:flex items-center justify-center"
                    >
                      <div
                        className={`relative w-full h-96 rounded-3xl bg-white shadow-2xl flex items-center justify-center overflow-hidden`}
                      >
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
                          <IconComponent className={`w-32 h-32 mx-auto ${slide.accentColor} opacity-80`} />
                        </motion.div>

                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className={`absolute inset-0 rounded-3xl border-2 ${slide.accentColor.replace('text-', 'border-')}`}
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
          background-color: #82ca9d;
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
