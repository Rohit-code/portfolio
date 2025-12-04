import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection, ContactHeading, ContactLabel } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  React.useEffect(() => {
    console.log('📞 Contact Section: Mounted');
    return () => console.log('📞 Contact Section: Unmounted');
  }, []);

  const handlePhoneEnter = React.useCallback(() => {
    console.log('👆 Contact: Phone number hovered');
    addCursorBorder();
  }, [addCursorBorder]);

  const handleEmailEnter = React.useCallback(() => {
    console.log('👆 Contact: Email hovered');
    addCursorBorder();
  }, [addCursorBorder]);

  const handleLinkLeave = React.useCallback(() => {
    console.log('👆 Contact: Link hover ended');
    removeCursorBorder();
  }, [removeCursorBorder]);

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <ContactHeading>
            Let&apos;s Build Something Amazing
          </ContactHeading>
          <ContactLabel>Contact</ContactLabel>
          <a
            href="tel:+919440084959"
            onMouseEnter={handlePhoneEnter}
            onMouseLeave={handleLinkLeave}
            onClick={() => console.log('📞 Contact: Phone number clicked')}
          >
            +91 94400 84959
          </a>
          <a
            href="mailto:sahil.singaraju1975@gmail.com"
            onMouseEnter={handleEmailEnter}
            onMouseLeave={handleLinkLeave}
            onClick={() => console.log('📧 Contact: Email clicked')}
          >
            sahil.singaraju1975@gmail.com
          </a>
        </div>
        <address className="column">
          <ContactLabel>Office</ContactLabel>
          <span className="contact-text">Chinna Waltair,</span>
          <span className="contact-text">Visakhapatnam, 530016</span>
        </address>
        <div className="column">
          <ContactLabel>Connect</ContactLabel>
          <SocialMedia />
        </div>
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
