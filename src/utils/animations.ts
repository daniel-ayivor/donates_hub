/**
 * Centralized animation variants for consistent motion across the app
 * Optimized for performance with hardware acceleration
 */

// Fade animations
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const fadeInDown = {
  hidden: { 
    opacity: 0, 
    y: -30,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

// Scale animations
export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    transition: { duration: 0.2 }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Slide animations
export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -30,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 30,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Container animations for staggered children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
};

// Default viewport settings for scroll animations
export const defaultViewport = {
  once: true,
  margin: "-100px",
  amount: 0.3
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

export const hoverLift = {
  y: -8,
  transition: { duration: 0.3 }
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};
