import './FooterStyles.css'
import React from 'react';
const Footer = () => {
    return(
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Trippy</h1>
            </div>
            <p>Choose your favorite destination.</p>
            <div>
                <a href=''>
                <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href=''>
                <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href=''>
                <i className='fa-brands fa-behance-square'></i>
                </a>
                <a href=''>
                <i class="fa-brands fa-square-x-twitter"></i>
                </a>
                
            </div>
        </div>
        <div className='buttom'>
            <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status </a>
                <a href='/'>License </a>
                <a href='/'>All Version </a>
            </div>
            <div>
                <h4>Community</h4>
                <a href='/'>GitHub</a>
                <a href='/'>Project </a>
                <a href='/'>Twitter </a>
            </div>
            <div>
                <h4>Help</h4>
                <a href='/'>Support</a>
                <a href='/'>Troubles </a>
                <a href='/'>Shooting </a>
                <a href='/'>Contact Us </a>
            </div>
            <div>
                <h4>Others</h4>
                <a href='/'>Terms of Services</a>
                <a href='/'>Privacy Policy </a>
                <a href='/'>License </a>
            </div>
        </div>
    </div>
    )
}
export default Footer;