import Photo from "./Photo";
import Intro from "./Intro";
import Social from "./Social";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

function Logo(){  
    // useEffect(()=>{
        window.addEventListener('scroll', (event)=>{
            window.scrollTo(0,1000);
            window.location.href ='/about';
        })
    // })
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