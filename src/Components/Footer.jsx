import { RiArrowUpSLine, RiFacebookBoxFill, RiInstagramLine, RiThreadsLine, RiYoutubeFill } from 'react-icons/ri'
import './Footer.css'
import { CiLocationOn } from 'react-icons/ci'
const Footer=()=>{
    return(
        <div className='footer-container'>
        <center><b>Back to top </b> <RiArrowUpSLine/></center>
      
       <div class="footer-head" >
            <div ><p>HELP & SUPPORT</p><a href=""  ><b>Book a service</b></a> <br/> <a href="" ><b>Support & manuals</b></a> 
        </div> 
            <div > <p>CONTACT US</p> <a href="" > <b>Contact Volvo</b></a> <br/> <a href=""><b> Find a dealer</b></a> <br/> <a href=""> <b>Book a test drive</b></a></div>
            <div ><p>VOLVO CARS APP</p>  <a href="" ><b>App Store</b></a> <br/><a href=""><b>Google play</b></a> </div>
        </div>
        <div className='location'><center><CiLocationOn /> India</center></div>
      <br/>
         <div className='icons'>
           <center> <RiFacebookBoxFill size={25}/> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <RiYoutubeFill size={25}/> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <RiThreadsLine size={25}/> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <RiInstagramLine size={25}/> </center>
         </div>
         <div className='copyright'>
            <center>Cookies &nbsp;&nbsp;&nbsp;  Legal &nbsp;&nbsp;&nbsp;  Privacy <br/><br/>
                <p>Copyright © 2024 Volvo Car Corporation (or its affiliates or licensors)</p> </center>
          </div>
        </div>
    )
}
export default Footer