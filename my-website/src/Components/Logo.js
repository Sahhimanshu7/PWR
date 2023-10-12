import Photo from "./Photo";
import Intro from "./Intro";
import Social from "./Social";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Logo(){
    return (
        <>
        <Photo />
        <div className="logo">
            <h1>Himanshu Sah</h1>
        </div>
        <Intro />
        <Social />
        <div className="footer-content-left">
            <Link to={"/About"}>
                <button>About</button>
            </Link>
        </div>
        <Footer/>
        </>
    )
}

export default Logo;