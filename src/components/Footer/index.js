import React from "react";
import {Link} from 'react-scroll';
import { FaInstagram, FaLinkedin } from 'react-icons/fa' 
import { animateScroll as scroll } from 'react-scroll';
import imgLogo from '../../images/logo-blanco.png'



export const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop()
}

  return (
    <footer className='footer-container'>
      <div className='footer-wrapper'>
        <div className='footer-links-container'>
            <Link to='us' offset={-80} className='footer-link'>About Us</Link>
            <Link to='services' offset={-80} className='footer-link'>Services</Link>
            <Link to='experiences' offset={-80} className='footer-link'>Experiences</Link>
            <Link to='contact' offset={-80} className='footer-link'>Contact</Link>    
        </div>
        
        <section className='footer-social-media-section'>
            <div className='footer-social-media-wrapper'>
                <Link to='/' className='footer-link-logo' onClick={toggleHome}>
                   <img src={imgLogo} alt='logo'className='footer-logo'/>
                </Link>

                <small className='footer-website-rights'>Second language mode On © <br/> {new Date().getFullYear()} All rights reserved.</small>
               
                <div className='footer-wrapper-icons'>
                    <a className='footer-link-icon' href='https://www.instagram.com/secondlanguage.modeon/' rel="noreferrer" target='_blank' arial-label='Instagram'> 
                        <FaInstagram/>
                    </a>

                    <a className='footer-link-icon' href='/' target='_blank' arial-label='Linkedin'> 
                        <FaLinkedin/>
                    </a>
                </div>

            </div>
        </section>
      </div>
    </footer>
  );
};
