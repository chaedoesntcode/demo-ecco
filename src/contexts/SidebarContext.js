import React, { useState, createContext } from 'react';

export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  }

  const triggerOpen = () => {
    setIsOpen(true);
  }

  return <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose, triggerOpen}}>
    {children}
  </SidebarContext.Provider>;
};

export default SidebarProvider;
