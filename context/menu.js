/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export const INITIAL_STATE = {
  isMenuOpen: false,
};

const rootReducer = (state, action) => {
  console.log('📋 Menu Context: Action dispatched', { type: action.type, currentState: state });
  
  switch (action.type) {
    case 'TOGGLE_MENU': {
      const newState = !state.isMenuOpen;
      console.log(`📋 Menu: ${newState ? 'Opening' : 'Closing'} menu`);
      return {
        ...state,
        isMenuOpen: newState,
      };
    }
    default: {
      console.log('⚠️ Menu: Unknown action type', action.type);
      return state;
    }
  }
};

export const MenuContext = React.createContext();

export const MenuContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(rootReducer, INITIAL_STATE);
  const store = React.useMemo(() => ({ state, dispatch }), [state]);
  
  React.useEffect(() => {
    console.log('📋 Menu Context: Provider mounted');
    return () => console.log('📋 Menu Context: Provider unmounted');
  }, []);

  React.useEffect(() => {
    console.log('📋 Menu Context: State updated', state);
  }, [state]);

  return <MenuContext.Provider value={store}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => {
  const { state, dispatch } = React.useContext(MenuContext);
  return [state, dispatch];
};
