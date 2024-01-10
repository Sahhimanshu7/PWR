import Header from "./Components/Header";
import Logo from "./Components/Logo";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Software from "./Pages/Software";

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App({reverse}) {
  return (
    <BrowserRouter>

    {/* Each Route here represents the pages to be loaded once they are selected. The Logo page is supposed to load first and
    after that user can select different pages to go to. This is the starting point of the application. */}

    <Header />                                                        {/* Navbar */}
    
    <Routes>
      <Route path="/" element={<Logo />} />                           {/* To navigate to the home Menu. */}
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Software" element={<Software />} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
