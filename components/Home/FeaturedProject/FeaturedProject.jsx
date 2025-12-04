import React from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useMenuContext } from '../../../context/menu';
import useCursorStyle from '../../../hooks/useCursorStyle';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useStyledTheme from '../../../hooks/useStyledTheme';
import AnimateOnScreen from '../../AnimateOnScreen';
import Arrow from '../../Icons/Arrow';
import {
  ContentSection,
  ProjectAnchor,
  ProjectInfo,
  ProjectTitle,
  VideoPreview,
  MenuContainer,
  MenuButton,
} from './styles';

const transition = {
  duration: 0.45,
  ease: [0.4, 0, 0.2, 1],
};

const FeaturedProject = () => {
  const controlsInfo = useAnimation();
  const controlsArrow = useAnimation();
  const theme = useStyledTheme();
  const [{ isMenuOpen }] = useMenuContext();
  const {
    addCursorColor,
    resetCursorColor,
    addCursorBorder,
    removeCursorBorder,
  } = useCursorStyle();
  const isTabletView = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.tablet}px)`,
  );

  React.useEffect(() => {
    console.log('🎯 Featured Project: Component mounted', { isTabletView });
    return () => console.log('🎯 Featured Project: Component unmounted');
  }, []);

  React.useEffect(() => {
    console.log('🎯 Featured Project: Menu state changed', { isMenuOpen });
  }, [isMenuOpen]);

  const handleMouseEnter = React.useCallback(() => {
    console.log('👆 Featured: Mouse entered button');
    addCursorBorder();
    addCursorColor(theme.text);
  }, [addCursorColor, addCursorBorder, theme.text]);

  const handleMouseLeave = React.useCallback(async () => {
    console.log('👆 Featured: Mouse left button', { isMenuOpen });
    if (isMenuOpen) return;

    removeCursorBorder();
    resetCursorColor();
  }, [removeCursorBorder, resetCursorColor, isMenuOpen]);

  const handleAnchorHoverStart = React.useCallback(() => {
    console.log('👆 Featured: Project anchor hover started');
    addCursorBorder();

    // animate controls
    console.log('✨ Featured: Animating info and arrow (show)');
    controlsInfo.start({ opacity: 1 });
    controlsArrow.start({ x: 0 });
  }, [addCursorBorder, controlsInfo, controlsArrow]);

  const handleAnchorHoverEnd = React.useCallback(() => {
    console.log('👆 Featured: Project anchor hover ended');
    removeCursorBorder();

    // animate controls
    console.log('✨ Featured: Animating info and arrow (hide)');
    controlsInfo.start({ opacity: 0 });
    controlsArrow.start({ x: isTabletView ? -25.19 : -33 });
  }, [removeCursorBorder, controlsInfo, controlsArrow, isTabletView]);

  React.useEffect(() => {
    // animate arrow programmatically because initial prop was not working properly.
    console.log('✨ Featured: Setting initial arrow position', { isTabletView, x: isTabletView ? -25.19 : -33 });
    controlsArrow.start({ x: isTabletView ? -25.19 : -33 });
  }, [controlsArrow, isTabletView]);

  return (
    <ContentSection>
      <AnimateOnScreen>
        <motion.div>
          <Link href="/projects/not-humble" legacyBehavior>
            <ProjectAnchor
              onHoverStart={handleAnchorHoverStart}
              onHoverEnd={handleAnchorHoverEnd}
            >
              <ProjectInfo>
                <h3>Our Expertise</h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={controlsInfo}
                  transition={transition}
                  className="project-info"
                >
                  <h4>100+ Projects</h4>
                  <h4>2024</h4>
                </motion.div>
                <ProjectTitle>
                  TECH <br /> EXCELLENCE
                  <span className="arrow">
                    <Arrow animate={controlsArrow} transition={transition} />
                  </span>
                </ProjectTitle>
              </ProjectInfo>
              <VideoPreview>
                <video 
                  loop 
                  autoPlay 
                  muted
                  playsInline
                  preload="auto"
                  aria-label="Featured project showcase video"
                  src="videos/featured-video.mp4"
                  onLoadStart={() => console.log('🎬 Featured: Video loading started')}
                  onCanPlay={() => console.log('🎬 Featured: Video can play')}
                  onPlay={() => console.log('🎬 Featured: Video playing')}
                  onError={(e) => console.error('❌ Featured: Video error', e)}
                />
              </VideoPreview>
            </ProjectAnchor>
          </Link>
        </motion.div>
      </AnimateOnScreen>
      <AnimateOnScreen>
        <MenuContainer>
          <MenuButton
            sticky={false}
            title="Get Started"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </MenuContainer>
      </AnimateOnScreen>
    </ContentSection>
  );
};

export default FeaturedProject;
