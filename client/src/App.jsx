import React from "react";
import Header from "./components/layouts/Header.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

import Main from "./components/home/Main.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
    return (
        <ThemeProvider>
            <Header/>
            <Main/>
            <About/>
            <Contact/>
        </ThemeProvider>
    );
}

export default App
