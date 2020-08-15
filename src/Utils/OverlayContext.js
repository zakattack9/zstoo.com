import { createContext } from 'react';

// accessed globally to help determine if overlay is open or closed 
export const OverlayContext = createContext({ 
  open: false,
  toggleOpen: () => {},
});