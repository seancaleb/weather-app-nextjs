export const easing = [0.6, -0.05, 0.01, 0.99];

export const parentVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const weatherInfoVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};
