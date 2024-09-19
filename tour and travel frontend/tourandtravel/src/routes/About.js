import React from "react"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from '../Images/night.jpg'
import Footer from "../components/Footer";
import ABoutUs from "../components/ABoutUs";
function About(){
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-mid"
                heroImg={AboutImg}
                title="About"
                url="/"
                btnClass="hide"

            />
            <ABoutUs />
            <Footer />
        </>
    )
}
export default About;