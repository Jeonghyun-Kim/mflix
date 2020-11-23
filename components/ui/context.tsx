import React from 'react';
import { ThemeProvider } from 'next-themes';
import { SSRProvider } from '@react-aria/ssr';
import { OverlayProvider } from '@react-aria/overlays';

export interface State {
  displaySidebar: boolean;
  displayModal: boolean;
  modalView: string;
}

export interface StateWithActions extends State {
  openSidebar: () => void;
  closeSidebar: () => void;
  openModal: () => void;
  closeModal: () => void;
  setModalView: (view: MODAL_VIEWS) => void;
}

const initialState: State = {
  displaySidebar: false,
  displayModal: false,
  modalView: 'TEST_VIEW',
};

const initialStateWithActions: StateWithActions = {
  ...initialState,
  openSidebar: () => {},
  closeSidebar: () => {},
  openModal: () => {},
  closeModal: () => {},
  setModalView: () => {},
};

type MODAL_VIEWS = 'TEST_VIEW';
type Action =
  | {
      type: 'OPEN_SIDEBAR';
    }
  | {
      type: 'CLOSE_SIDEBAR';
    }
  | {
      type: 'OPEN_MODAL';
    }
  | {
      type: 'CLOSE_MODAL';
    }
  | {
      type: 'SET_MODAL_VIEW';
      view: MODAL_VIEWS;
    };

export const UIContext = React.createContext<StateWithActions>(
  initialStateWithActions
);

const uiReducer: (state: State, action: Action) => State = (state, action) => {
  switch (action.type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        displaySidebar: true,
      };
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        displaySidebar: false,
      };
    }
    case 'OPEN_MODAL': {
      return {
        ...state,
        displayModal: true,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      };
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.view,
      };
    }
  }
};

export const UIProvider: React.FC = ({ ...props }) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' });
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });
  const openModal = () => dispatch({ type: 'OPEN_MODAL' });
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  const setModalView = (view: MODAL_VIEWS) =>
    dispatch({ type: 'SET_MODAL_VIEW', view });

  const value: StateWithActions = React.useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      openModal,
      closeModal,
      setModalView,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};

export const ManagedUIContext: React.FC = ({ children }) => (
  <UIProvider>
    <ThemeProvider>
      <SSRProvider>
        <OverlayProvider>{children}</OverlayProvider>
      </SSRProvider>
    </ThemeProvider>
  </UIProvider>
);

export default ManagedUIContext;
