/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import colors from '../styles/colors';

const INITIAL_STATE = {
  cursorStyle: {
    bordered: false,
    color: colors.primary,
  },
  position: null,
};

const rootReducer = (state, action) => {
  console.log('🖱️ Cursor Context: Action dispatched', { type: action.type, payload: action.payload, currentState: state });
  
  switch (action.type) {
    case 'UPDATE_CURSOR_STYLE': {
      console.log('🖱️ Cursor: Updating cursor style', action.payload);
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          ...action.payload,
        },
      };
    }
    case 'ADD_CURSOR_BORDER': {
      console.log('🖱️ Cursor: Adding border');
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          bordered: true,
        },
      };
    }
    case 'REMOVE_CURSOR_BORDER': {
      console.log('🖱️ Cursor: Removing border');
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          bordered: false,
        },
      };
    }
    case 'ADD_CURSOR_COLOR': {
      console.log('🖱️ Cursor: Adding color', action.payload);
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          color: action.payload,
        },
      };
    }
    case 'RESET_CURSOR_COLOR': {
      console.log('🖱️ Cursor: Resetting color to', INITIAL_STATE.cursorStyle.color);
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          color: INITIAL_STATE.cursorStyle.color,
        },
      };
    }
    case 'LOCK_CURSOR_POSITION': {
      console.log('🖱️ Cursor: Locking position', action.payload);
      return {
        ...state,
        position: action.payload,
      };
    }
    default: {
      console.log('⚠️ Cursor: Unknown action type', action.type);
      return state;
    }
  }
};

export const CursorContext = React.createContext();

export const CursorContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(rootReducer, INITIAL_STATE);
  const store = React.useMemo(() => ({ state, dispatch }), [state]);
  
  React.useEffect(() => {
    console.log('🖱️ Cursor Context: Provider mounted with initial state', INITIAL_STATE);
    return () => console.log('🖱️ Cursor Context: Provider unmounted');
  }, []);

  React.useEffect(() => {
    console.log('🖱️ Cursor Context: State updated', state);
  }, [state]);

  return (
    <CursorContext.Provider value={store}>{children}</CursorContext.Provider>
  );
};

export const useCursorContext = () => {
  const { state, dispatch } = React.useContext(CursorContext);
  return [state, dispatch];
};
