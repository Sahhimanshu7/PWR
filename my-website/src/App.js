import Header from "./Components/Header";
<<<<<<< HEAD
import Logo from "./Components/Logo";
import About from "./Pages/About";
// import Blogs from "./Components/Blogs";
=======
import Logo from "./Pages/Logo";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
>>>>>>> d7ca48e (Changes to the structure and about added)
import Contact from "./Pages/Contact";
import Software from "./Pages/Software";

import { BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import { Route } from 'react-router-dom';



function App({reverse}) {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Logo />} />
      <Route path="/About" element={<About />} />
      {/* <Route path="/Blogs" element={<Blogs />} /> */}
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Software" element={<Software />} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
