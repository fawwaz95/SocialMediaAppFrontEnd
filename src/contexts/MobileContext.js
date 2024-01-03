import React, { createContext, useState, useContext, useEffect } from 'react';

const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const setResizeEvent = () => {
    window.addEventListener('resize', checkIsMobile);
  };

  const removeResizeEvent = () => {
    window.removeEventListener('resize', checkIsMobile);
  };

  useEffect(() => {
    setResizeEvent(); // Add event listener on initial mount
    return () => {
      removeResizeEvent(); // Remove event listener on unmount
    };
  }, []); 

  return (
    <MobileContext.Provider value={isMobile}>
      {children}
    </MobileContext.Provider>
  );
};

export const useIsMobile = () => useContext(MobileContext);
