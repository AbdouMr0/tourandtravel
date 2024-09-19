import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../Images/homeimg.jpg"
import Destination from "../components/destination";
import Trip from "../components/Trip";
import Footer from '../components/Footer'

function Home(){
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                heroImg={HomeImg}
                title="Your Journey Your Story"
                text="Choose Your Favorite Destination"
                buttontext="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
            <Footer /> 
        </>
    )
}
export default Home;