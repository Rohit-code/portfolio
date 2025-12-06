import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState('default');
  const [isHovering, setIsHovering] = useState(false);

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType, isHovering, setIsHovering }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursorContext = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursorContext must be used within CursorProvider');
  }
  return context;
};

