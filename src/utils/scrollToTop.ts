export const scrollToTop = (top = 0): void => {
  window.scrollTo({
    top,
    behavior: 'smooth'
  });
};
