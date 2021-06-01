import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll'
import imgLogo from '../../images/logo-blanco.png'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavImgLogo,
    BtnInstragram,
    IconInstagram
  } from './NavbarElements';

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
            <Nav scrollNav= { scrollNav }>
                <NavbarContainer>                    
                    <NavLogo to='/' onClick={ toggleHome }> 
                        <NavImgLogo src={imgLogo} />
                    </NavLogo>
                    <MobileIcon onClick={ toggle }>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='us'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Us
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='experiences'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Experiences
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            {/* <NavLinks to='signup'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                             >
                                 Sign Up
                            </NavLinks> */}
                            <NavLinks to='contact'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                             >
                                 Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <BtnInstragram href='https://www.instagram.com/secondlanguage.modeon/' target='_blank'>
                            <IconInstagram/>
                    </BtnInstragram>
                </NavbarContainer>
            </Nav>
        </>
    )
}
 