import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

interface ImageThumbnail {
  id: number;
  src: string;
  alt: string;
}

const BubbleAnimation: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const sampleImages: ImageThumbnail[] = [
    {
      id: 1,
      src: '/images/WhatsApp Image 2026-01-04 at 12.43.05 AM.jpeg',
      alt: 'Children learning',
    },
    {
      id: 2,
      src: '/images/WhatsApp Image 2026-01-04 at 12.43.19 AM.jpeg',
      alt: 'Community gathering',
    },
    {
      id: 3,
      src: '/images/WhatsApp Image 2026-01-04 at 12.43.17 AM.jpeg',
      alt: 'Clean water',
    },
    {
      id: 4,
      src: '/images/WhatsApp Image 2026-01-04 at 12.46.42 AM.jpeg',
      alt: 'Healthcare support',
    },
    {
      id: 5,
      src: '/images/WhatsApp Image 2026-01-04 at 12.46.27 AM.jpeg',
      alt: 'Education',
    },
    {
      id: 6,
      src: '/images/WhatsApp Image 2026-01-04 at 12.46.34 AM.jpeg',
      alt: 'Happy children',
    },
  ];

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = [];
      for (let i = 0; i < 15; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 60 + 20,
          duration: Math.random() * 10 + 8,
          delay: Math.random() * 5,
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full"
              style={{
                left: `${bubble.x}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                background: `radial-gradient(circle at 30% 30%,
                  rgba(255, 255, 255, 0.8),
                  rgba(147, 197, 253, 0.4),
                  rgba(196, 181, 253, 0.3))`,
                boxShadow: `
                  inset -2px -2px 8px rgba(255, 255, 255, 0.6),
                  inset 2px 2px 8px rgba(147, 197, 253, 0.3),
                  0 4px 20px rgba(147, 197, 253, 0.2)
                `,
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
              initial={{ y: '100vh', opacity: 0 }}
              animate={{
                y: '-20vh',
                opacity: [0, 1, 1, 0],
                x: [0, Math.sin(bubble.id) * 50, 0],
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Content Area with Image Thumbnails */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Our Impact Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hover over the images to see our work in action
          </p>
        </motion.div>

        {/* Image Thumbnails Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sampleImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.1,
                y: -10,
              }}
              className="group relative cursor-pointer"
            >
              {/* Image Container with Warm Color Overlay */}
              <div className="relative overflow-hidden rounded-2xl shadow-sm">
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover object-center rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Warm Color Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-400/0 via-pink-400/0 to-yellow-400/0"
                  whileHover={{
                    background: [
                      'linear-gradient(to bottom right, rgba(251, 146, 60, 0), rgba(244, 114, 182, 0), rgba(250, 204, 21, 0))',
                      'linear-gradient(to bottom right, rgba(251, 146, 60, 0.3), rgba(244, 114, 182, 0.2), rgba(250, 204, 21, 0.3))',
                    ],
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Bounce Effect Border */}
                <motion.div
                  className="absolute inset-0 border-4 border-transparent rounded-2xl"
                  whileHover={{
                    borderColor: 'rgba(251, 146, 60, 0.6)',
                    boxShadow: '0 0 30px rgba(251, 146, 60, 0.4)',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 10,
                  }}
                />
              </div>

              {/* Floating Caption */}
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.p
                  className="text-gray-700 font-medium"
                  whileHover={{
                    scale: 1.05,
                    color: 'rgb(249, 115, 22)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {image.alt}
                </motion.p>
              </motion.div>

              {/* Sparkle Effect on Hover */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6"
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{
                  scale: [0, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-sm" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-20 flex justify-center space-x-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BubbleAnimation;
