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
    <footer className='footer_container'>
      <div className='footer_wrapper'>
        <div className='footer_links_container'>
            <Link to='us' offset={-80} className='footer_link'>About Us</Link>
            <Link to='services' offset={-80} className='footer_link'>Services</Link>
            <Link to='experiences' offset={-80} className='footer_link'>Experiences</Link>
            <Link to='contact' offset={-80} className='footer_link'>Contact</Link>    
        </div>
        
        <section className='footer_social_media_section'>
            <div className='footer_social_media_wrapper'>
                <Link to='/' className='footer_link_logo' onClick={toggleHome}>
                   <img src={imgLogo} alt='logo'className='footer_logo'/>
                </Link>

                <small className='footer_website_rights'>Second language mode On © <br/> {new Date().getFullYear()} All rights reserved.</small>
               
                <div className='footer_wrapper_icons'>
                    <a className='footer_link_icon' href='https://www.instagram.com/secondlanguage.modeon/' rel="noreferrer" target='_blank' arial-label='Instagram'> 
                        <FaInstagram/>
                    </a>

                    <a className='footer_link_icon' href='/' target='_blank' arial-label='Linkedin'> 
                        <FaLinkedin/>
                    </a>
                </div>

            </div>
        </section>
      </div>
    </footer>
  );
};
