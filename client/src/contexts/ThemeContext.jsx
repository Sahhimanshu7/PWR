import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme(){
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }){
  const [currentTheme, setCurrentTheme] = useState("Light");

  const value = { currentTheme, setCurrentTheme };

  return (
    <ThemeContext.Provider value = {value}>
      {children}
    </ThemeContext.Provider>
  );
}