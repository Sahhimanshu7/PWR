import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
  faGoogle
} from '@fortawesome/free-brands-svg-icons' 

import "../../assets/home/social.css"

function Social() {
    const fb = "https://www.facebook.com/himanshu.sah.1800";
  return (
    <div className="social">
      <div className="fb"><a href={fb}><FontAwesomeIcon icon={faFacebookF} /></a></div>
      <div className="tw"><a href="https://twitter.com/sahhimanshu41"><FontAwesomeIcon icon={faTwitter} /></a></div>
      <div className="in"><a href="https://www.linkedin.com/in/himanshu-sah-a98799165/"><FontAwesomeIcon icon={faLinkedin}/></a></div>
      <div className="insta"><a href="https://www.instagram.com/sah_himanshu7/"><FontAwesomeIcon icon={faInstagram}/></a></div>
      <div className="git"><a href="https://github.com/Sahhimanshu7"><FontAwesomeIcon icon={faGithub}/></a></div>
      <div className="mail"><a href="mailto:himanshusah41@gmail.com"><FontAwesomeIcon icon={faGoogle}/></a></div>
    </div>
  );
}

export default Social;