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
            <nav className={`nav ${scrollNav && 'nav-transparent'}`}>
                <div className='nav-container'>                    
                    <LinkRouter to='/' onClick={ toggleHome } className='nav-link-router' > 
                        <img className='nav-logo' src={imgLogo} alt='logo'/>
                    </LinkRouter>
                    <div className='nav-div-icon-menu' onClick={ toggle }>
                        <FaBars/>
                    </div>
                    <ul className='nav-ul'>
                        <li className='nav-li'>
                            <LinkScroll to='us'
                                className='nav-li-links' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Us
                            </LinkScroll>
                        </li>
                        <li className='nav-li'>
                            <LinkScroll to='discover'
                                className='nav-li-links' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Discover
                            </LinkScroll>
                        </li>
                        <li className='nav-li'>
                            <LinkScroll to='experiences'
                                className='nav-li-links' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Experiences
                            </LinkScroll>
                        </li>
                        <li className='nav-li'>
                            <LinkScroll to='contact'
                                className='nav-li-links' 
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
                        className='nav-link-instagram' 
                        href='https://www.instagram.com/secondlanguage.modeon/' 
                        target='_blank'
                        rel="noreferrer"
                    >
                       <RiInstagramFill className='nav-instagram-icon'/>
                    </a>
                </div>
            </nav>
        </>
    )
}
 