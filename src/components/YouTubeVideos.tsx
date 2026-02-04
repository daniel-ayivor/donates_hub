import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, X, Play } from 'lucide-react';

interface Video {
  id: string;
  videoId: string;
  title: string;
  description: string;
}

const YouTubeVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const videos: Video[] = [
    {
      id: '1',
      videoId: 'jyUL_HS9128',
      title: 'Our Mission in Action',
      description: 'See how we bring clean water and hope to communities in Ghana',
    },
    {
      id: '2',
      videoId: 'p7Hl9LnErrw',
      title: 'Community Impact Stories',
      description: 'Hear from the people whose lives have been transformed',
    },
    {
      id: '3',
      videoId: 'oKQTezZSXm4',
      title: 'Church Empowerment Programs',
      description: 'Equipping churches to lead transformational development',
    },
    // {
    //   id: '4',
    //   videoId: 'D4nfACsPv5M',
    //   title: 'Youth Development Initiatives',
    //   description: 'Nurturing the next generation of leaders',
    // }
  ];

  const getThumbnailUrl = (videoId: string) => {
    // Try maxresdefault first, fallback to hqdefault if it fails
    return imageError[videoId] 
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleImageError = (videoId: string) => {
    setImageError(prev => ({ ...prev, [videoId]: true }));
  };

  // Add keyboard event listener for ESC key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedVideo) {
        setSelectedVideo(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <section className="section-spacing bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-red-50 rounded-full">
            <Youtube className="w-5 h-5 text-red-600" />
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
              Watch Our Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See Our Work in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch inspiring stories and witness the transformative impact of your support
          </p>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {videos.map((video) => (
            <motion.button
              key={video.id}
              onClick={() => setSelectedVideo(video.videoId)}
              variants={itemVariants}
              className="group relative bg-white rounded-xl overflow-hidden shadow-card hover:shadow-strong transition-all duration-300 cursor-pointer w-full text-left"
              whileHover={{ y: -8 }}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <img
                  src={getThumbnailUrl(video.videoId)}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={() => handleImageError(video.videoId)}
                  loading="lazy"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>

                {/* Video Duration Badge (optional - can be added if you know durations) */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm rounded px-2 py-1 text-xs text-white font-semibold">
                  Watch Video
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {video.description}
                </p>
                
                {/* Watch Now Link */}
                <div className="flex items-center gap-2 mt-4 text-brand-blue font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  <Play className="w-4 h-4" />
                  <span>Play Video</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Video Lightbox Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              {/* Close Button */}
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 z-10 group"
                aria-label="Close video"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>

              {/* Video Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative w-full max-w-5xl aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                {/* YouTube Iframe - Only loads when modal opens */}
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </motion.div>

              {/* Click outside hint */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
                Click outside or press ESC to close
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Videos Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@africaassistanceplan8126"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            <Youtube className="w-5 h-5" />
            <span>Visit Our YouTube Channel</span>
            <Youtube className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
