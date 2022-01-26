import {Link} from "react-router-dom";

function Footer({buttonName}){
    
    return(
        
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <Link to={buttonName}><button>{buttonName}</button></Link>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; Himanshu Sah 2022</p>
            </div>
        </div>
        
      
    )

}
export default Footer;