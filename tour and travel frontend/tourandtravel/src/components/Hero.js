import './HeroStyles.css'
import React from 'react';

function Hero(props){
    return (
        <>
            <div className={props.cName}>
                <img className='img' alt='herImg' src={props.heroImg}/>
                <div className='hero-text'>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>
                        {props.buttontext}
                    </a>
                </div>
            </div>
            

        </>
    )
}
export default Hero;