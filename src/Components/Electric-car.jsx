import { RiArrowRightSLine } from 'react-icons/ri'
import xc40 from '../img/xc40-bev-hero-21x9 (1).avif'
import './Electric-car.css'
const ElectricCar=()=>{
     return(
        <div className='electric-car-container'>
            <h1>Are you ready to electrify your ride?</h1><br />
            <p>Here’s what you need to know to confidently go electric and find the <br /> right Volvo electric car for you.</p>
            
        <div className='section'>
            <div className='full-section'>
                <h3>Fully electric cars</h3><br />
                <p>Our fully electric cars offer emissions-free driving <br /> without compromising range and power.</p>
                <div className='link'><b>Full electric cars <RiArrowRightSLine/></b> </div>
                <img src="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt392be036ddf001f4/65d480fbc33ff1000d625582/ex40_tilesbundle_16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=1920&imdensity=1" alt="" />
            </div>
            <div className='electric-section'>
            <h3>Electric charging</h3>
            <p>Charging your electric car at home and on the road  <br />can be easy, fast and cost-effective.</p>
                <div className='electric-link'><b>Charging your car <RiArrowRightSLine/></b> </div>
                <img src="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt59ccd4cc6e3b4e18/6583d8bae209f3000db84729/c40-taillightandcharging.png?branch=prod_alias&auto=webp&iar=0&w=1920&imdensity=1" alt="" />
            </div>
        </div>
        <div className='testDrive'>
        <div class="recharge-div">
          <center><img src={xc40} alt="XC40 Recharge"/></center> 
        </div>
        <div class="full-section">
            <h1>XC40 Recharge. Pure <br/> Electric.</h1>
            <div class="test-drive-button">
                Book a Test Drive
            </div>
        </div>
    </div>
    <div>
    <div className=''>
        <center><h4>Quick Links</h4></center>
    </div>
    <div class="quickLinks">
        <div>Test Drive</div>
        <div><RiArrowRightSLine/></div>
        <div>Buy Online</div>
        <div><RiArrowRightSLine/></div>
    </div>
    <div class="quickLinks">
        
        <div>Retailers</div>
        <div><RiArrowRightSLine/></div>
        <div>Support</div>
        <div><RiArrowRightSLine/></div>
    </div>
    <div className='policy'><center>* Above mentioned prices are Ex-Showroom Prices. Subject to change</center></div>

    </div>

        </div>
     )
}
export default ElectricCar