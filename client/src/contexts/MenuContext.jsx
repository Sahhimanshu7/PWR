import { createContext, useContext, useState, useEffect } from "react";

const MenuContext = createContext();

export function useMenu(){
  return useContext(MenuContext);
}

export function MenuProvider({ children }){
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const value = { selectedMenu, setSelectedMenu, showMenu, setShowMenu };

  return (
    <MenuContext.Provider value = {value}>
      {children}
    </MenuContext.Provider>
  );
}