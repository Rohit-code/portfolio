export function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 80, // Adjust for header height
      });
    }
  }
  
  // Format date to display in a readable format
  export function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }
  
  // Calculate years of experience from a start date
  export function calculateExperience(startDate) {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    return diffYears;
  }
  
  // Animate on scroll observer helper
  export function setupIntersectionObserver(targetSelector, classToAdd, threshold = 0.1) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(classToAdd);
          }
        });
      },
      { threshold }
    );
    
    const elements = document.querySelectorAll(targetSelector);
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }
  
  // Debounce function for performance optimization
  export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }