import Header from './components/layouts/Header';
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { MenuProvider } from "./contexts/MenuContext.jsx";

function App() {
  return (
    <ThemeProvider>
        <MenuProvider>
          <Header />
        </MenuProvider>
    </ThemeProvider>
  )
}

export default App
