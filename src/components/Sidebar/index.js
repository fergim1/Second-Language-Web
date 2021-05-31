import React from "react";
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink,
    SideBtnWrap,
    SidebarRoute

} from "./SidebarElements";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
      <Icon onClick={ toggle }>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="us" 
            onClick={ toggle }
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Us
          </SidebarLink>

          <SidebarLink to="discover" 
            onClick={ toggle }
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Discover
          </SidebarLink>
          
          <SidebarLink to="experiences" 
            onClick={ toggle }
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Experiences
          </SidebarLink>

          <SidebarLink to="contact" 
            onClick={ toggle }
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-90}
          >
            Contact
          </SidebarLink>

        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
