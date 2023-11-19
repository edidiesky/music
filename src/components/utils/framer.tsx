export const slideUp = {
  hidden: {
    y: "100vh",
    opacity: 0,
    transition: { delay: 0.3 },
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};