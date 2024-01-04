import Photo from "../Components/Photo";
import Intro from "../Components/Intro";
import Social from "../Components/Social";
import Footer from "../Components/Footer";

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
        <Footer buttonName={button} displayName={"Know More"}/>
        </>
    )
}

export default Logo;