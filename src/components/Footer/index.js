import React from "react";
import { Link } from 'react-router-dom';
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
          <div className='footer-links-wrapper'>
            <div className='footer-links-items'>
              <h1 className='footer-link-title'>About us</h1>
              <Link to="/signin" className='footer-link'>How it works</Link>
              <Link to="/signin" className='footer-link'>Testimonials</Link>
              <Link to="/signin" className='footer-link'>Careers</Link>
              <Link to="/signin" className='footer-link'>Investors</Link>
              <Link to="/signin" className='footer-link'>Terms of Service</Link>
            </div>

            <div className='footer-links-items'>
              <h1 className='footer-link-title'>Contact us</h1>
              <Link to="/signin" className='footer-link'>Contact</Link>
              <Link to="/signin" className='footer-link'>Support</Link>
              <Link to="/signin" className='footer-link'>Destinations</Link>
              <Link to="/signin" className='footer-link'>Spondorships</Link>
            </div>
          </div>

          <div className='footer-links-wrapper'>
            <div className='footer-links-items'>
              <h1 className='footer-link-title'>Videos</h1>
              <Link to="/signin" className='footer-link'>Submit Video</Link>
              <Link to="/signin" className='footer-link'>Ambassadors</Link>
              <Link to="/signin" className='footer-link'>Agency</Link>
              <Link to="/signin" className='footer-link'>Influencer</Link>
            </div>

            <div className='footer-links-items'>
              <h1 className='footer-link-title'>Social Media</h1>
              <Link to="/signin" className='footer-link'>instagram</Link>
              <Link to="/signin" className='footer-link'>Facebook</Link>
              <Link to="/signin" className='footer-link'>Youtube</Link>
              <Link to="/signin" className='footer-link'>Twitter</Link>
            </div>
          </div>
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
