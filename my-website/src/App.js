import Header from "./Components/Header";
import Logo from "./Components/Logo";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import Software from "./Components/Software";

import { BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import { Route } from 'react-router-dom';



function App({reverse}) {
  return (
    // <>
    // < Header />
    // <Logo />
    // </>
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Logo />} />
      <Route path="/About" element={<About />} />
      <Route path="/Blogs" element={<Blogs />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Software" element={<Software />} />

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
