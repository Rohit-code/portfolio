/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const storageKey = '@AwwwardsRebuilt:Theme';

const INITIAL_STATE = {
  theme: 'dark',
};

const rootReducer = (state, action) => {
  console.log('🎨 Theme Context: Action dispatched', { type: action.type, payload: action.payload, currentState: state });
  
  switch (action.type) {
    case 'TOGGLE_THEME': {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      console.log(`🎨 Theme: Toggling from ${state.theme} to ${newTheme}`);
      window.localStorage.setItem(storageKey, newTheme);
      console.log('🎨 Theme: Saved to localStorage', { key: storageKey, value: newTheme });
      return {
        ...state,
        theme: newTheme,
      };
    }
    case 'SET_THEME': {
      console.log('🎨 Theme: Setting theme to', action.payload);
      return {
        ...state,
        theme: action.payload,
      };
    }
    default: {
      console.log('⚠️ Theme: Unknown action type', action.type);
      return state;
    }
  }
};

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(rootReducer, INITIAL_STATE);
  const store = React.useMemo(() => ({ state, dispatch }), [state]);

  React.useEffect(() => {
    console.log('🎨 Theme Context: Provider mounted');
    const savedTheme = window.localStorage.getItem(storageKey) || 'dark';
    console.log('🎨 Theme: Loading saved theme from localStorage', { saved: savedTheme });
    dispatch({
      type: 'SET_THEME',
      payload: savedTheme,
    });
    return () => console.log('🎨 Theme Context: Provider unmounted');
  }, []);

  React.useEffect(() => {
    console.log('🎨 Theme Context: State updated', state);
  }, [state]);

  return (
    <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const { state, dispatch } = React.useContext(ThemeContext);
  return [state, dispatch];
};
