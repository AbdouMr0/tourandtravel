import React from "react"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesImg from '../Images/night.jpg'
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Services(){
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-mid"
                heroImg={ServicesImg}
                title="Services"
                url="/"
                btnClass="hide"
            />
            <Trip />
            <Footer />
        </>
    )
}
export default Services;