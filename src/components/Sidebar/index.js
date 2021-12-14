import React from "react";
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';



export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside 
      className={`sidebar_container ${isOpen && 'sidebar_container_is_open'}`}
      onClick={ toggle }
    >
      <div className='sidebar_wrapper_icon_close' onClick={ toggle }>
        <FaTimes className='sidebar_icon_close' />
      </div>
      <div className='sidebar_wrapper'>
          <ul className='sidebar_menu_ul'>
            <LinkScroll to="us" 
              className='sidebar_link_scroll'
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
              className='sidebar_link_scroll'
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
              className='sidebar_link_scroll'
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
              className='sidebar_link_scroll'
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
