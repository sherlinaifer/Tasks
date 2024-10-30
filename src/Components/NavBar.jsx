import { FaRegUser } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import '../index.css'
import './NavBar.css'
import { Fragment } from "react";
const NavBar=()=>{
    return <Fragment>
     <div className="common nav-container">
       <div><img src="https://www.volvocars.com/static/shared/images/volvo-spread-wordmark.svg" alt="Logo" height={10}/></div>
        <div>
            <ul>
                <li>Our Cars</li>
                <li>Shop</li>
                <li>Owners</li>
                <li>About Us</li>
            </ul>
        </div>
        <div className="icon">
        <FaRegUser/> 
        Sign In
        </div>
       
        </div>
        <div className="common learn-more">
        LEARN MORE <RiArrowRightSLine/>
    </div>
      </Fragment>  
    
}
export default NavBar