<<<<<<< HEAD
import Footer from "../Components/Footer";
import FirstBlock from "./About-components/FirstBlock";


function About(){
    return(
        <div className="about">
            <FirstBlock /> 
            <Footer/>
=======
import Footer from '../Components/Footer';
import '../Styles/About.css';

function About(){
    const button = "Software"
    return(
        <div className="about-main">
            <div className='about-body'>
                <div className='about-header'>
                    <h1>Welcome to my site!</h1>
                </div>
            </div>
            <Footer buttonName={button} displayName={"My Works"}/>
>>>>>>> d7ca48e (Changes to the structure and about added)
        </div>
    )
}

export default About;