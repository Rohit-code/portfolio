import React from 'react';
import { useCursorContext } from '../../context/cursor';
import { StyledCursor } from './styles';

const Cursor = () => {
  const cursorRef = React.useRef();
  const [{ cursorStyle, position }] = useCursorContext();

  React.useEffect(() => {
    console.log('🖱️ Cursor Component: Mounted');
    console.log('🖱️ Cursor: Initial style', cursorStyle);
    return () => console.log('🖱️ Cursor Component: Unmounted');
  }, []);

  React.useEffect(() => {
    console.log('🖱️ Cursor: Style updated', { 
      color: cursorStyle.color, 
      bordered: cursorStyle.bordered 
    });
  }, [cursorStyle]);

  React.useEffect(() => {
    console.log('🖱️ Cursor: Position lock changed', position);
  }, [position]);

  React.useEffect(() => {
    console.log('🖱️ Cursor: Setting up mousemove listener');
    
    const onMouseMove = event => {
      const x = position ? position.x : event.clientX;
      const y = position ? position.y : event.clientY;
      
      if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    console.log('🖱️ Cursor: Mousemove listener added to document');

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      console.log('🖱️ Cursor: Mousemove listener removed');
    };
  }, [position]);

  return (
    <StyledCursor
      ref={cursorRef}
      color={cursorStyle.color}
      $bordered={cursorStyle.bordered}
    />
  );
};

export default React.memo(Cursor);
