import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    // Children & Youth Programs
    {
      id: 1,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.05 AM.jpeg",
      title: "Back-to-School Drive 2024",
      category: "children-youth",
      location: "Accra, Ghana",
      date: "August 2024",
      participants: "500+ Children"
    },
    {
      id: 2,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.07 AM.jpeg",
      title: "Student Reading Program",
      category: "children-youth",
      location: "Kumasi, Ghana",
      date: "July 2024",
      participants: "200+ Students"
    },
    {
      id: 3,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.09 AM.jpeg",
      title: "Youth Leadership Summit",
      category: "children-youth",
      location: "Cape Coast, Ghana",
      date: "November 2024",
      participants: "120 Youth Leaders"
    },
    {
      id: 6,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.26 AM.jpeg",
      title: "Children's Home Support",
      category: "children-youth",
      location: "Accra, Ghana",
      date: "September 2024",
      participants: "50+ Children"
    },
    {
      id: 7,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.30 AM.jpeg",
      title: "Youth Skills Training",
      category: "children-youth",
      location: "Kumasi, Ghana",
      date: "September 2024",
      participants: "60 Youth"
    },
    // WASH Programs
    {
      id: 4,
      src: "/images/wash2025.jpg",
      title: "Clean Water Installation 2025",
      category: "wash",
      location: "Northern Ghana",
      date: "January 2025",
      participants: "1200+ Residents"
    },
    {
      id: 5,
      src: "/images/Wash 1.jpg",
      title: "Water System Construction",
      category: "wash",
      location: "Rural Communities",
      date: "December 2024",
      participants: "800+ Families"
    },
    {
      id: 8,
      src: "/images/Wash2 (1).jpg",
      title: "Community Water Project",
      category: "wash",
      location: "Central Ghana",
      date: "November 2024",
      participants: "600+ Residents"
    },
    {
      id: 9,
      src: "/images/wash3.jpg",
      title: "Hygiene Education Program",
      category: "wash",
      location: "Western Ghana",
      date: "October 2024",
      participants: "300+ Community Members"
    },
    {
      id: 10,
      src: "/images/Wash4.jpg",
      title: "Water System Maintenance",
      category: "wash",
      location: "Eastern Ghana",
      date: "September 2024",
      participants: "500+ Residents"
    },
    {
      id: 11,
      src: "/images/wash5.jpg",
      title: "Clean Water Access Initiative",
      category: "wash",
      location: "Northern Region",
      date: "August 2024",
      participants: "900+ Families"
    },
    {
      id: 12,
      src: "/images/wash6.jpg",
      title: "Sanitation Workshop",
      category: "wash",
      location: "Bono Region",
      date: "July 2024",
      participants: "200+ Community Leaders"
    },
    {
      id: 13,
      src: "/images/wash7.jpg",
      title: "Water Quality Testing",
      category: "wash",
      location: "Multiple Regions",
      date: "June 2024",
      participants: "15+ Communities"
    },
    {
      id: 14,
      src: "/images/wash8.jpg",
      title: "Borehole Drilling Project",
      category: "wash",
      location: "Rural Areas",
      date: "May 2024",
      participants: "1000+ Residents"
    },
    {
      id: 15,
      src: "/images/wash9.jpg",
      title: "Community Hygiene Training",
      category: "wash",
      location: "Sunyani",
      date: "April 2024",
      participants: "250+ Participants"
    },
    {
      id: 16,
      src: "/images/WASH10.JPG",
      title: "Water Infrastructure Development",
      category: "wash",
      location: "Northern Ghana",
      date: "March 2024",
      participants: "700+ Beneficiaries"
    },
    {
      id: 17,
      src: "/images/Wash11.JPG",
      title: "Sanitation Facilities Installation",
      category: "wash",
      location: "Rural Communities",
      date: "February 2024",
      participants: "400+ Families"
    },
    {
      id: 18,
      src: "/images/Wash12.JPG",
      title: "Water Safety Campaign",
      category: "wash",
      location: "Multiple Districts",
      date: "January 2024",
      participants: "1500+ Community Members"
    },
    // Faith & Community Programs
    {
      id: 19,
      src: "/images/Bible Distribution.JPG",
      title: "Bible Distribution Campaign",
      category: "faith",
      location: "Churches across Ghana",
      date: "December 2024",
      participants: "1000+ Church Members"
    },
    {
      id: 20,
      src: "/images/Bible 2 (1).JPG",
      title: "Scripture Outreach Program",
      category: "faith",
      location: "Community Centers",
      date: "November 2024",
      participants: "500+ Participants"
    },
    {
      id: 21,
      src: "/images/Jesus Film.JPG",
      title: "Jesus Film Screening",
      category: "faith",
      location: "Rural Communities",
      date: "October 2024",
      participants: "800+ Attendees"
    },
    {
      id: 22,
      src: "/images/Jesus Film 1.JPG",
      title: "Community Film Ministry",
      category: "faith",
      location: "Villages",
      date: "September 2024",
      participants: "600+ Community Members"
    },
    {
      id: 23,
      src: "/images/Jesus Film2.JPG",
      title: "Evangelism Outreach",
      category: "faith",
      location: "Multiple Regions",
      date: "August 2024",
      participants: "1200+ People Reached"
    },
    {
      id: 24,
      src: "/images/JesusFilm.JPG",
      title: "Gospel Film Presentation",
      category: "faith",
      location: "Community Gatherings",
      date: "July 2024",
      participants: "900+ Attendees"
    },
    // Health & Support Programs
    {
      id: 25,
      src: "/images/H&S.JPG",
      title: "Health & Support Initiative",
      category: "health",
      location: "Medical Camps",
      date: "June 2024",
      participants: "400+ Patients"
    },
    {
      id: 26,
      src: "/images/H&S 1.JPG",
      title: "Community Health Outreach",
      category: "health",
      location: "Rural Clinics",
      date: "May 2024",
      participants: "350+ Beneficiaries"
    }
  ];

  const categories = [
    { id: 'all', label: 'All', count: 26 },
    { id: 'wash', label: 'WaSH Programs', count: 15 },
    { id: 'children-youth', label: 'Children & Youth', count: 5 },
    { id: 'faith', label: 'Faith & Community', count: 6 },
    { id: 'health', label: 'Health & Support', count: 2 }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-32 min-h-[60vh] bg-brand-blue">
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-01-04 at 12.43.07 AM.jpeg"
            alt="Gallery"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Our Impact Gallery
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Witness the transformative power of community support through our photo gallery. 
            Every image tells a story of hope, progress, and positive change across Ghana.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {category.label} ({category.count})
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Camera className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'all' ? 'All Activities' : categories.find(cat => cat.id === selectedCategory)?.label}
            </h2>
            <p className="text-xl text-gray-600">
              {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'} showcasing our impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => openModal(image.id)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow transition-all">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-80 object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[85vh] mx-4 bg-white rounded-2xl overflow-y-auto shadow"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImageData.src}
                  alt={selectedImageData.title}
                  className="w-full max-h-[80vh] object-contain mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;