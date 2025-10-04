import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  goal: number;
  label?: string;
  color?: string;
  height?: string;
  showPercentage?: boolean;
  animationDuration?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  goal,
  label,
  color = 'bg-orange-500',
  height = 'h-4',
  showPercentage = true,
  animationDuration = 2000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  
  const percentage = Math.min((current / goal) * 100, 100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * percentage;
      
      setAnimatedValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [isVisible, percentage, animationDuration]);

  return (
    <div ref={progressRef} className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showPercentage && (
            <motion.span 
              className="text-sm font-bold text-gray-900"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(animatedValue)}%
            </motion.span>
          )}
        </div>
      )}
      
      <div className={`w-full ${height} bg-gray-200 rounded-full overflow-hidden shadow-inner`}>
        <motion.div
          className={`${height} ${color} rounded-full relative overflow-hidden`}
          initial={{ width: "0%" }}
          animate={isVisible ? { width: `${animatedValue}%` } : { width: "0%" }}
          transition={{ 
            duration: animationDuration / 1000,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
      
      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
        <span>${current.toLocaleString()} raised</span>
        <span>Goal: ${goal.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ProgressBar;