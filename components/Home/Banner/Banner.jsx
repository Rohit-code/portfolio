import React from 'react';
import { motion } from 'framer-motion';
import useCursorStyle from '../../../hooks/useCursorStyle';
import useWindowSize from '../../../hooks/useWindowSize';
import useStyledTheme from '../../../hooks/useStyledTheme';
import CanvasEraser from '../../CanvasEraser';
import { BannerSection, BannerTitle, VideoContainer } from './styles';

const titleAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemTitleAnimation = {
  initial: { 
    y: '100vh',
    opacity: 0,
    scale: 0.8,
    rotateX: -20,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 12,
      mass: 1.2,
      duration: 1.2,
    },
  },
};

console.log('✨ Banner: Title animations configured', { titleAnimation, itemTitleAnimation });

const Banner = () => {
  const canvasRef = React.useRef(null);
  const windowSize = useWindowSize();
  const theme = useStyledTheme();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  React.useEffect(() => {
    console.log('🏠 Banner: Component mounted');
    console.log('🏠 Banner: Window size', windowSize);
    console.log('🏠 Banner: Theme', theme);
    return () => console.log('🏠 Banner: Component unmounted');
  }, []);

  React.useEffect(() => {
    console.log('🏠 Banner: Window size changed', windowSize);
  }, [windowSize]);

  const handleCursorEnter = React.useCallback(() => {
    console.log('👆 Banner: Cursor entered - adding border');
    addCursorBorder();
  }, [addCursorBorder]);

  const handleCursorLeave = React.useCallback(() => {
    console.log('👆 Banner: Cursor left - removing border');
    removeCursorBorder();
  }, [removeCursorBorder]);

  return (
    <BannerSection>
      <VideoContainer>
        <video
          src="/videos/banner.mp4"
          height="100%"
          width="100%"
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-label="Background video showcasing software development"
          onLoadStart={() => console.log('🎬 Banner: Video loading started')}
          onCanPlay={() => console.log('🎬 Banner: Video can play')}
          onPlay={() => console.log('🎬 Banner: Video playing')}
          onError={(e) => console.error('❌ Banner: Video error', e)}
        />
      </VideoContainer>
      <CanvasEraser
        ref={canvasRef}
        width={windowSize.width}
        height={windowSize.height}
        size={120}
        background={theme.background}
        onMouseEnter={handleCursorEnter}
        onMouseLeave={handleCursorLeave}
      />
      <BannerTitle
        variants={titleAnimation}
        initial="initial"
        animate="animate"
        onAnimationStart={() => console.log('✨ Banner: Title animation started')}
        onAnimationComplete={() => console.log('✨ Banner: Title animation completed')}
      >
        <motion.span 
          variants={itemTitleAnimation}
          onAnimationStart={() => console.log('✨ Banner: "BUILD" animation started')}
          onAnimationComplete={() => console.log('✨ Banner: "BUILD" animation completed')}
        >
          BUILD
        </motion.span>
        <motion.span 
          variants={itemTitleAnimation}
          onAnimationStart={() => console.log('✨ Banner: "FUTURE" animation started')}
          onAnimationComplete={() => console.log('✨ Banner: "FUTURE" animation completed')}
        >
          FUTURE
        </motion.span>
      </BannerTitle>
    </BannerSection>
  );
};

export default React.memo(Banner);
