import "../index.css";
import {Link} from "react-router-dom";


function Header(){
    return(
        <div className="header">
           <Link to="/"><button id="Home">Home</button></Link>
           <Link to="/About"><button id="About">About</button></Link>
           <Link to="Software"><button id="Software">Software</button></Link>
           {/* <Link to="Blogs"><button id="Blogs">Blogs</button></Link> */}
           <Link to="Contact"><button id="Contact">Contact</button></Link>
        </div>
    )
}
export default Header;