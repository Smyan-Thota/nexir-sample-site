import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { 
    opacity: 0,
    y: 20 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  }
};

export const slideUp: Variants = {
  hidden: { 
    y: 60,
    opacity: 0 
  },
  visible: { 
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 200,
      duration: 0.8
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    scale: 0.9,
    opacity: 0 
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 200
    }
  }
};

export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 200
    }
  }
};

export const buttonHover: Variants = {
  rest: {
    scale: 1
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 200
    }
  },
  tap: {
    scale: 0.95
  }
};

export const parallaxScroll: Variants = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  }
};
