import React, { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri'
import { animateScroll as scroll } from 'react-scroll'
import imgLogo from '../../images/logo-blanco.png'

export const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if( window.scrollY >= 80 ) {
            setScrollNav(true)
        } 
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener( 'scroll', changeNav )   
        return () => {
            window.removeEventListener( 'scroll', changeNav );
          };   
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <nav className={`nav ${scrollNav && 'nav_change_background_color'}`}>
                <div className='nav_container'>                    
                    <LinkRouter to='/' onClick={ toggleHome } className='nav_link_router' > 
                        <img className='nav_logo' src={imgLogo} alt='logo'/>
                    </LinkRouter>
                    <div className='nav_div_icon_menu' onClick={ toggle }>
                        <FaBars/>
                    </div>
                    <ul className='nav_ul'>
                        <li className='nav_li'>
                            <LinkScroll to='us'
                                className='nav_li_links' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                               About Us
                            </LinkScroll>
                        </li>
                        <li className='nav_li'>
                            <LinkScroll to='services'
                                className='nav_li_links' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Services
                            </LinkScroll>
                        </li>
                        <li className='nav_li'>
                            <LinkScroll to='experiences'
                                className='nav_li_links' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Experiences
                            </LinkScroll>
                        </li>
                        <li className='nav_li'>
                            <LinkScroll to='contact'
                                className='nav_li_links' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                             >
                                 Contact
                            </LinkScroll>
                        </li>
                    </ul>
                    <a 
                        className='nav_link_instagram' 
                        href='https://www.instagram.com/secondlanguage.modeon/' 
                        target='_blank'
                        rel="noreferrer"
                    >
                       <RiInstagramFill className='nav_instagram_icon'/>
                    </a>
                </div>
            </nav>
        </>
    )
}
 