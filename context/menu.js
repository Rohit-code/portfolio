import React, { createContext, useContext, useReducer } from 'react';

const MenuContext = createContext();

const menuReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isOpen: !state.isOpen };
    case 'OPEN_MENU':
      return { ...state, isOpen: true };
    case 'CLOSE_MENU':
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, { isOpen: false });

  return (
    <MenuContext.Provider value={[state, dispatch]}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within MenuProvider');
  }
  return context;
};

