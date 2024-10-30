import './Volvo.css'
const Volvo=()=>{
    return(
        <div className="volvo-container">
            <h1><b>Why Volvo?</b></h1>
            <img src="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=1920&imdensity=1" alt="" />
           
            <div className='main-section'>
                <div className='section-div'>
                    <h3>Making your life easier</h3><br />
                    <p>Our new take on getting from A to B. Get access to a Volvo when you want it, how you want it.</p>
                </div>
                 <div className='section-div'>
                    <h3>Our future is electric</h3><br />
                    <p>All our cars are available with electrified power. We help you reduce the environmental impact of daily life.</p>
                </div>
                 <div className='section-div'>
                    <h3>Protecting what’s important</h3><br />
                    <p>We’re proud of our safety heritage. We’ll keep innovating new ways to help you protect what's important.</p>
                </div>
            </div>
            <div className='learn-more-volvo'>
            Learn more about Volvo
            </div>
        </div>
    )
}
export default Volvo