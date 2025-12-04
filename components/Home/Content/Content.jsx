import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import { ContentSection, TextWrapper, Text } from './styles';

const Content = () => {
  React.useEffect(() => {
    console.log('📝 Content Section: Mounted');
    return () => console.log('📝 Content Section: Unmounted');
  }, []);

  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <Text>
            We build cutting-edge software solutions that transform businesses.
            <br />
            From intelligent web applications to AI-powered systems, we deliver
            innovation that drives growth and creates lasting impact.
          </Text>
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default Content;
