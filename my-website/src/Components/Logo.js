import Photo from "./Photo";
import Intro from "./Intro";
import Social from "./Social";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Logo(){  
    // Once the user scrolls the even comes into place and redirects the user to the about section 
    window.addEventListener('scroll', (event)=>{
        window.scrollTo(0,1000);
        window.location.href ='/about';
    })
    return (
        <>
        <div className="home">
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
        </div>
        
        <div className="for-scroll">
        </div>
        </>
    )
}

export default Logo;