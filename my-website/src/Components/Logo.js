import Photo from "./Photo";
import Intro from "./Intro";
import Social from "./Social";
import Footer from "./Footer";

function Logo(){
    let button = "About";
    return (
        <>
        <Photo />
        <div className="logo">
            <h1>Himanshu Sah</h1>
        </div>
        <Intro />
        <Social />
        <Footer buttonName={button}/>
        </>
    )
}

export default Logo;