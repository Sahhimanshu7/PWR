import Footer from "../Components/Footer";
import FirstBlock from "./About-components/FirstBlock";


function About(){
    window.addEventListener('scroll', (event) =>{
            window.location.href = '/';
    })
    return(
        <div className="about">
            <FirstBlock /> 
            <Footer/>
        </div>
    )
}

export default About;