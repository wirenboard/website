export const scrollToElementById = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};