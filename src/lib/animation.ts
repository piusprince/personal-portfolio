export const defaultViewport = { once: true, margin: "-20%" };

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: defaultViewport,
  transition: { duration: 0.5 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: defaultViewport,
  transition: { duration: 0.5 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: defaultViewport,
  transition: { duration: 0.5 },
};
