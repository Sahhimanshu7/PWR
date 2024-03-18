import React from "react";
import Header from "./components/layouts/Header.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { MenuProvider } from "./contexts/MenuContext.jsx";

import Main from "./components/home/Main.jsx";
import About from "./components/about/About.jsx";

function App() {
  return (
    <ThemeProvider>
        <MenuProvider>
          <Header />
          <Main />
          <About />
        </MenuProvider>
    </ThemeProvider>
  )
}

export default App
