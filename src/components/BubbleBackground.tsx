import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

const BubbleBackground: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = [];
      for (let i = 0; i < 20; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 80 + 30,
          duration: Math.random() * 12 + 10,
          delay: Math.random() * 6,
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
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
                rgba(255, 255, 255, 0.6),
                rgba(251, 146, 60, 0.2),
                rgba(244, 114, 182, 0.15))`,
              boxShadow: `
                inset -2px -2px 12px rgba(255, 255, 255, 0.8),
                inset 2px 2px 12px rgba(251, 146, 60, 0.2),
                0 8px 32px rgba(251, 146, 60, 0.15)
              `,
              border: '1px solid rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(2px)',
            }}
            initial={{ y: '110vh', opacity: 0 }}
            animate={{
              y: '-20vh',
              opacity: [0, 0.8, 0.8, 0],
              x: [
                0,
                Math.sin(bubble.id) * 80,
                Math.cos(bubble.id) * 60,
                0,
              ],
              scale: [1, 1.1, 1, 0.9],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BubbleBackground;
