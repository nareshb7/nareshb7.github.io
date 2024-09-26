export const getTodayDate =() => new Date();

export const scrollToSection = (div: HTMLElement) => {
  div.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  
  return date.toLocaleDateString('en-US', {
    year: "numeric",
    month: "long",
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: true // 12-hour format
  });
};
