import React from "react"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactImg from '../Images/2.jpg'
import Footer from '../components/Footer'
import ContactForm from "../components/ContactFrom";

function Contact(){
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-mid"
                heroImg={contactImg}
                title="Contact"
                url="/"
                btnClass="hide"
            />
            <ContactForm />
            <Footer />
        </>
    )
}
export default Contact;