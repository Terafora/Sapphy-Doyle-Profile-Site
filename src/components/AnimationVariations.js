const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
  };
  
const pageTransition = {
    transition: 'linear',
    delay: 0.1,
    duration: 1
};
  
export { pageVariants, pageTransition }; 