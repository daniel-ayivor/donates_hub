import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.05 AM.jpeg",
      title: "Back-to-School Drive 2024",
      category: "children-youth",
      location: "Accra, Ghana",
      date: "August 2024",
      participants: "500+ Children",
      description: "Distributing school supplies and uniforms to children across 15 schools in Accra."
    },
    {
      id: 2,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.07 AM.jpeg",
      title: "Student Reading Program",
      category: "children-youth",
      location: "Kumasi, Ghana",
      date: "July 2024",
      participants: "200+ Students",
      description: "Children participating in our literacy improvement program."
    },
    {
      id: 3,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.09 AM.jpeg",
      title: "Youth Leadership Summit",
      category: "children-youth",
      location: "Cape Coast, Ghana",
      date: "November 2024",
      participants: "120 Youth Leaders",
      description: "Empowering young leaders to create positive change in their communities."
    },
    {
      id: 4,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.15 AM.jpeg",
      title: "Clean Water Installation",
      category: "wash",
      location: "Northern Ghana",
      date: "October 2024",
      participants: "1200+ Residents",
      description: "Installing clean water systems in remote villages."
    },
    {
      id: 5,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.17 AM.jpeg",
      title: "Hygiene Education Program",
      category: "wash",
      location: "Rural Communities",
      date: "December 2024",
      participants: "300+ Families",
      description: "Teaching proper hygiene practices and sanitation in rural communities."
    },
    {
      id: 26,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.19 AM.jpeg",
      title: "Water System Maintenance",
      category: "wash",
      location: "Central Ghana",
      date: "November 2024",
      participants: "800+ Residents",
      description: "Regular maintenance and repair of existing water systems."
    },
    {
      id: 27,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.25 AM.jpeg",
      title: "Community Sanitation Workshop",
      category: "wash",
      location: "Western Ghana",
      date: "September 2024",
      participants: "150+ Community Members",
      description: "Training community leaders on sanitation best practices."
    },
    {
      id: 6,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.26 AM.jpeg",
      title: "Children's Home Support",
      category: "children-youth",
      location: "Accra, Ghana",
      date: "September 2024",
      participants: "50+ Children",
      description: "Providing care packages and educational support to orphaned children."
    },
    {
      id: 7,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.30 AM.jpeg",
      title: "Youth Skills Training",
      category: "children-youth",
      location: "Kumasi, Ghana",
      date: "September 2024",
      participants: "60 Youth",
      description: "Training young people in vocational skills and entrepreneurship."
    },
    {
      id: 8,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.18 AM.jpeg",
      title: "Digital Skills Training",
      category: "children-youth",
      location: "Accra Tech Hub",
      date: "January 2025",
      participants: "60 Trainees",
      description: "Teaching computer literacy and digital marketing skills."
    },
    {
      id: 9,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.23 AM.jpeg",
      title: "Community Church Outreach",
      category: "church-community",
      location: "Various Communities",
      date: "Ongoing",
      participants: "Multiple Congregations",
      description: "Supporting faith-based community initiatives and programs."
    },
    {
      id: 10,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.25 AM.jpeg",
      title: "After School Program",
      category: "children-youth",
      location: "Rural Ghana",
      date: "June 2024",
      participants: "150+ Children",
      description: "Providing after-school tutoring and mentorship for children."
    },
    {
      id: 11,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.26 AM.jpeg",
      title: "Sanitation Facility Construction",
      category: "wash",
      location: "Tamale, Ghana",
      date: "August 2024",
      participants: "200+ Families",
      description: "Building proper sanitation facilities for improved community health."
    },
    {
      id: 12,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.27 AM.jpeg",
      title: "Water Quality Testing",
      category: "wash",
      location: "Remote Villages",
      date: "November 2024",
      participants: "50+ Communities",
      description: "Testing and ensuring safe drinking water quality in rural areas."
    },
    {
      id: 13,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.29 AM.jpeg",
      title: "Youth Mentorship Program",
      category: "children-youth",
      location: "Cape Coast, Ghana",
      date: "October 2024",
      participants: "80+ Youth",
      description: "Connecting young people with mentors for personal and professional development."
    },
    {
      id: 14,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.32 AM.jpeg",
      title: "Children's Sports Day",
      category: "children-youth",
      location: "Accra, Ghana",
      date: "September 2024",
      participants: "200+ Children",
      description: "Organizing sports activities to promote physical health and teamwork among children."
    },
    {
      id: 15,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.34 AM.jpeg",
      title: "Educational Workshop",
      category: "children-youth",
      location: "Kumasi, Ghana",
      date: "August 2024",
      participants: "120+ Students",
      description: "Interactive educational workshops covering science, technology, and life skills."
    },
    {
      id: 16,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.35 AM.jpeg",
      title: "Computer Literacy Program",
      category: "children-youth",
      location: "Accra Tech Hub",
      date: "July 2024",
      participants: "90+ Youth",
      description: "Teaching basic computer skills and digital literacy to young people."
    },
    {
      id: 17,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.37 AM.jpeg",
      title: "School Supply Distribution",
      category: "children-youth",
      location: "Multiple Schools",
      date: "January 2024",
      participants: "400+ Students",
      description: "Distributing essential school supplies to students in need."
    },
    {
      id: 18,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.38 AM.jpeg",
      title: "Reading Club Initiative",
      category: "children-youth",
      location: "Community Centers",
      date: "March 2024",
      participants: "150+ Children",
      description: "Establishing reading clubs to improve literacy rates among children."
    },
    {
      id: 19,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.46 AM.jpeg",
      title: "Leadership Training",
      category: "children-youth",
      location: "Youth Centers",
      date: "May 2024",
      participants: "75+ Youth",
      description: "Training young leaders to become advocates for positive change in their communities."
    },
    {
      id: 20,
      src: "/images/WhatsApp Image 2026-01-04 at 12.43.55 AM.jpeg",
      title: "Art & Creativity Workshop",
      category: "children-youth",
      location: "Community Centers",
      date: "April 2024",
      participants: "100+ Children",
      description: "Encouraging creativity and self-expression through art and craft activities."
    },
    {
      id: 21,
      src: "/images/WhatsApp Image 2026-01-04 at 12.42.59 AM.jpeg",
      title: "Career Guidance Session",
      category: "children-youth",
      location: "Schools",
      date: "February 2024",
      participants: "200+ Students",
      description: "Providing career guidance and counseling to help students make informed decisions."
    },
    {
      id: 22,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.23 AM.jpeg",
      title: "STEM Education Program",
      category: "children-youth",
      location: "Science Centers",
      date: "June 2024",
      participants: "80+ Students",
      description: "Promoting science, technology, engineering, and mathematics education among youth."
    },
    {
      id: 23,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.26 AM.jpeg",
      title: "Scholarship Award Ceremony",
      category: "children-youth",
      location: "Accra, Ghana",
      date: "December 2023",
      participants: "50+ Recipients",
      description: "Awarding scholarships to deserving students to support their educational journey."
    },
    {
      id: 24,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.34 AM.jpeg",
      title: "Health & Nutrition Education",
      category: "children-youth",
      location: "Schools & Communities",
      date: "November 2023",
      participants: "300+ Children",
      description: "Teaching children about proper nutrition and healthy lifestyle choices."
    },
    {
      id: 25,
      src: "/images/WhatsApp Image 2026-01-04 at 12.46.37 AM.jpeg",
      title: "Music & Dance Program",
      category: "children-youth",
      location: "Cultural Centers",
      date: "October 2023",
      participants: "120+ Youth",
      description: "Preserving cultural heritage through music and dance education programs."
    }
  ];

  const categories = [
    { id: 'all', label: 'All', count: 25 },
    { id: 'wash', label: 'WaSH', count: 4 },
    { id: 'children-youth', label: 'Children & Youth Empowerment', count: 20 },
    { id: 'church-community', label: 'Church & Community Empowerment', count: 1 }
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
                      className="w-full h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
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