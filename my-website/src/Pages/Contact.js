import "../index.css";
import Social from "../Components/Social";

function Contact(){
    return(
        <div className="contact-main">
            <div className="first-half">
                <div className="first-half-1">
                    <h1>Himanshu Sah</h1>
                    <p>Full-Stack Software Engineer</p>
                    <p>CLeveland, Ohio, USA</p>
                </div>
                <div className="first-half-2">
                    <h1>Socials :</h1>
                    <Social />
                </div>
                <div className="first-half-3">
                    <div className="call-me">
                        <h1>Call Me</h1>
                        <p>+1 330-285-5140</p>
                    </div>
                    <div className="email-me">
                        <h1>Email Me</h1>
                        <p>himanshusah41@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;