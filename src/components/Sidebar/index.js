import React from "react";
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';



export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside 
      className={`sidebar-container ${isOpen && 'sidebar-container-is-open'}`}
      isOpen={ isOpen } 
      onClick={ toggle }
    >
      <div className='sidebar-wrapper-icon-close' onClick={ toggle }>
        <FaTimes className='sidebar-icon-close' />
      </div>
      <div className='sidebar-wrapper'>
          <ul className='sidebar-menu-ul'>
            <LinkScroll to="us" 
              className='sidebar-link-scroll'
              onClick={ toggle }
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              About Us
            </LinkScroll>

            <LinkScroll to="services" 
              className='sidebar-link-scroll'
              onClick={ toggle }
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Services
            </LinkScroll>
            
            <LinkScroll to="experiences" 
              className='sidebar-link-scroll'
              onClick={ toggle }
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Experiences
            </LinkScroll>

            <LinkScroll to="contact" 
              className='sidebar-link-scroll'
              onClick={ toggle }
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Contact
            </LinkScroll>

          </ul>
      </div>
    </aside>
  );
};
