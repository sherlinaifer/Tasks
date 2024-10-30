import { Fragment } from "react"
import NavBar from "../Components/NavBar"
import Hero from "../Components/Hero"
import Models from "../Components/Models"
import Volvo from "../Components/Volvo"
import ElectricCar from "../Components/Electric-car"
import Footer from "../Components/Footer"

const LandingPage=()=>{
    return <Fragment>
        <NavBar/>
        <Hero/>
        <Models/>
        <Volvo/>
        <ElectricCar/>
        <Footer/>
    </Fragment>
}
export default LandingPage