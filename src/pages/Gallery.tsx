import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg",
      title: "Back-to-School Drive 2024",
      category: "education",
      location: "Accra, Ghana",
      date: "August 2024",
      participants: "500+ Children",
      description: "Distributing school supplies and uniforms to children across 15 schools in Accra."
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/8363020/pexels-photo-8363020.jpeg",
      title: "Student Reading Program",
      category: "education",
      location: "Kumasi, Ghana",
      date: "July 2024",
      participants: "200+ Students",
      description: "Children participating in our literacy improvement program."
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/8363016/pexels-photo-8363016.jpeg",
      title: "Youth Leadership Summit",
      category: "education",
      location: "Cape Coast, Ghana",
      date: "November 2024",
      participants: "120 Youth Leaders",
      description: "Empowering young leaders to create positive change in their communities."
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg",
      title: "Clean Water Installation",
      category: "water",
      location: "Northern Ghana",
      date: "October 2024",
      participants: "1200+ Residents",
      description: "Installing clean water systems in remote villages."
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/8853504/pexels-photo-8853504.jpeg",
      title: "Mobile Health Clinic",
      category: "health",
      location: "Rural Communities",
      date: "December 2024",
      participants: "800+ Patients",
      description: "Providing free medical check-ups and health education."
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/8853498/pexels-photo-8853498.jpeg",
      title: "Orphanage Support Visit",
      category: "orphanage",
      location: "Accra, Ghana",
      date: "September 2024",
      participants: "50+ Children",
      description: "Providing care packages and educational support to orphaned children."
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/8854447/pexels-photo-8854447.jpeg",
      title: "Women's Entrepreneurship Workshop",
      category: "business",
      location: "Kumasi, Ghana",
      date: "September 2024",
      participants: "75 Women",
      description: "Training women in business skills and financial literacy."
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/8853497/pexels-photo-8853497.jpeg",
      title: "Digital Skills Training",
      category: "education",
      location: "Accra Tech Hub",
      date: "January 2025",
      participants: "60 Trainees",
      description: "Teaching computer literacy and digital marketing skills."
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg",
      title: "Community Church Outreach",
      category: "church",
      location: "Various Communities",
      date: "Ongoing",
      participants: "Multiple Congregations",
      description: "Supporting faith-based community initiatives and programs."
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/8363020/pexels-photo-8363020.jpeg",
      title: "School Infrastructure Project",
      category: "education",
      location: "Rural Ghana",
      date: "June 2024",
      participants: "300+ Students",
      description: "Building and renovating classrooms for better learning environments."
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg",
      title: "Water Well Dedication",
      category: "water",
      location: "Tamale, Ghana",
      date: "August 2024",
      participants: "500+ Villagers",
      description: "Celebrating the completion of a new water well serving the entire village."
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/8853504/pexels-photo-8853504.jpeg",
      title: "Medical Outreach Program",
      category: "health",
      location: "Remote Villages",
      date: "November 2024",
      participants: "600+ Patients",
      description: "Bringing essential healthcare services to underserved communities."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Activities', count: galleryImages.length },
    { id: 'education', label: 'Education', count: galleryImages.filter(img => img.category === 'education').length },
    { id: 'water', label: 'Water Access', count: galleryImages.filter(img => img.category === 'water').length },
    { id: 'health', label: 'Healthcare', count: galleryImages.filter(img => img.category === 'health').length },
    { id: 'orphanage', label: 'Orphan Care', count: galleryImages.filter(img => img.category === 'orphanage').length },
    { id: 'church', label: 'Faith Programs', count: galleryImages.filter(img => img.category === 'church').length },
    { id: 'business', label: 'Business Support', count: galleryImages.filter(img => img.category === 'business').length }
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
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg"
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
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
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
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      <div className="flex items-center text-sm opacity-90 mb-2">
                        <MapPin className="h-3 w-3 mr-1" />
                        {image.location}
                        <Calendar className="h-3 w-3 ml-3 mr-1" />
                        {image.date}
                      </div>
                      <div className="flex items-center text-sm opacity-90">
                        <Users className="h-3 w-3 mr-1" />
                        {image.participants}
                      </div>
                    </div>

                    {/* Hover Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="h-5 w-5 text-white" />
                    </div>
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
              className="relative max-w-6xl max-h-[90vh] mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl"
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
                  className="w-full max-h-[60vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedImageData.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{selectedImageData.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-purple-500 mr-2" />
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-semibold">{selectedImageData.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-purple-500 mr-2" />
                    <div>
                      <div className="text-sm text-gray-500">Date</div>
                      <div className="font-semibold">{selectedImageData.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-purple-500 mr-2" />
                    <div>
                      <div className="text-sm text-gray-500">Participants</div>
                      <div className="font-semibold">{selectedImageData.participants}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;