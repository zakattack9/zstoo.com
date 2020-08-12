import { createContext } from 'react';

export const OverlayContext = createContext({ 
  open: false,
  toggleOpen: () => {},
});