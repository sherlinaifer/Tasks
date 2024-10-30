import './Hero.css'
import '../index.css'
const Hero=()=>{
    return <div className="Hero-container">
        <video src="https://www.volvocars.com/files/cs/v3/assets/blt618dcb179a89242d/blt67d06c56ca6d4f5b/6572f9b3cc2f77000dc17180/homepage-hero-video-desktop-21x9.mp4?branch=prod_alias" autoPlay muted loop></video>
        <div>
           <p>A new era for safety <br /><h1>Does how you feel <br /> affect how you drive?</h1></p> 
        </div>
        <div className="button">
            <button><b>Learn More</b></button>
        </div>
    </div>
}
export default Hero