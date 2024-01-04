<<<<<<< HEAD
function Footer(){
=======
import {Link} from "react-router-dom";

function Footer({buttonName, displayName}){
>>>>>>> d7ca48e (Changes to the structure and about added)
    
    return(
        
        <div className="footer">
<<<<<<< HEAD
            <div className="copyright">
                <p>Copyright &copy; Himanshu Sah 2023</p>
=======
            <div className="footer-content">
                <div className="footer-content-left">
                    <Link to= {"/"+ buttonName}><button>{displayName}</button></Link>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; Himanshu Sah 2024</p>
>>>>>>> d7ca48e (Changes to the structure and about added)
            </div>
        </div>
        
      
    )

}
export default Footer;