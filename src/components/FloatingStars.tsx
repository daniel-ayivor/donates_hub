import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FloatingStarsProps {
  show: boolean;
  duration?: number;
}

const FloatingStars = ({ show, duration = 3000 }: FloatingStarsProps) => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number }>>([]);

  useEffect(() => {
    if (show) {
      // Generate 15 stars with random positions
      const newStars = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 0.5,
        size: Math.random() * 20 + 15, // Random size between 15-35px
      }));
      setStars(newStars);

      // Clear stars after duration
      const timer = setTimeout(() => {
        setStars([]);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute"
              initial={{
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scale: 0,
                opacity: 0,
                rotate: 0,
              }}
              animate={{
                x: star.x,
                y: star.y,
                scale: [0, 1.2, 1, 0.8, 0],
                opacity: [0, 1, 1, 0.7, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2.5,
                delay: star.delay,
                ease: 'easeOut',
              }}
              style={{
                width: star.size,
                height: star.size,
              }}
            >
              <Star
                className="w-full h-full text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                fill="currentColor"
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(250, 204, 21, 0.6))',
                }}
              />
            </motion.div>
          ))}

          {/* Add some sparkle effects */}
          {stars.slice(0, 8).map((star) => (
            <motion.div
              key={`sparkle-${star.id}`}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              initial={{
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scale: 0,
              }}
              animate={{
                x: star.x + (Math.random() - 0.5) * 100,
                y: star.y + (Math.random() - 0.5) * 100,
                scale: [0, 2, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: star.delay + 0.2,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingStars;
