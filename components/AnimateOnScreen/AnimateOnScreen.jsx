import React from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const transition = {
  delay: 0.2,
  translateY: {
    type: 'spring',
    stiffness: 60,
    damping: 15,
    mass: 1,
  },
  opacity: {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1.0],
  },
  scale: {
    type: 'spring',
    stiffness: 100,
    damping: 20,
  },
};

const variants = {
  show: { 
    translateY: 0, 
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
  },
  hidden: { 
    translateY: 80, 
    opacity: 0,
    scale: 0.95,
    rotateX: 10,
    filter: 'blur(10px)',
  },
};

const AnimateOnScreen = ({ children: childrenProp }) => {
  const animation = useAnimation();
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    console.log('👁️ AnimateOnScreen: Component mounted');
    return () => console.log('👁️ AnimateOnScreen: Component unmounted');
  }, []);

  React.useEffect(() => {
    console.log('👁️ AnimateOnScreen: InView status changed', { inView });
    if (inView) {
      console.log('✨ AnimateOnScreen: Element is in view! Starting animation...');
      animation.start('show');
    }
  }, [animation, inView, inViewRef]);

  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const handleRef = node => {
      console.log('👁️ AnimateOnScreen: Ref attached to element', node);
      // Keep your own reference
      inViewRef(node);

      // Call the original ref, if any
      const { ref } = child;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref !== null) {
        ref.current = node;
      }
    };

    console.log('👁️ AnimateOnScreen: Cloning child with animation props');

    return React.cloneElement(child, {
      variants,
      transition,
      animate: animation,
      initial: 'hidden',
      ref: handleRef,
      onAnimationStart: () => console.log('✨ AnimateOnScreen: Child animation started'),
      onAnimationComplete: () => console.log('✨ AnimateOnScreen: Child animation completed'),
    });
  });

  return children;
};

export default React.memo(AnimateOnScreen);
