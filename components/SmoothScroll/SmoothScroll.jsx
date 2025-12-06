import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    });
    
    lenisRef.current = lenis;
    
    // RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    // Handle anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          lenis.scrollTo(target, {
            offset: -80,
            duration: 1.5,
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Expose lenis to window for debugging
    if (typeof window !== 'undefined') {
      window.lenis = lenis;
    }
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);
  
  return <>{children}</>;
};

export default SmoothScroll;

