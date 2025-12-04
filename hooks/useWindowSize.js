import React from 'react';

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    console.log('📐 useWindowSize: Hook initialized');
    
    // only execute all the code below in client side
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      const newSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      console.log('📐 useWindowSize: Window resized', newSize);
      setWindowSize(newSize);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    console.log('📐 useWindowSize: Resize listener added');

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('📐 useWindowSize: Resize listener removed');
    };
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

export default useWindowSize;
