import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3 },
      }}
      className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-400/0 via-pink-400/0 to-yellow-400/0"
        whileHover={{
          background: 'linear-gradient(to bottom right, rgba(251, 146, 60, 0.25), rgba(244, 114, 182, 0.2), rgba(250, 204, 21, 0.25))',
        }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        className="absolute inset-0 border-4 border-transparent rounded-2xl"
        whileHover={{
          borderColor: 'rgba(251, 146, 60, 0.5)',
          boxShadow: '0 0 30px rgba(251, 146, 60, 0.4), 0 0 60px rgba(244, 114, 182, 0.2)',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 15,
        }}
      />

      <motion.div
        className="absolute -top-3 -right-3 w-8 h-8 pointer-events-none"
        initial={{ scale: 0, rotate: 0 }}
        whileHover={{
          scale: [0, 1.5, 1.2],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-full blur-md opacity-80" />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-6 right-6 w-3 h-3 bg-yellow-300 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedImage;
