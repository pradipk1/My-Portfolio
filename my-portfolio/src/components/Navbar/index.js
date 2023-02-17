import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, ResumeBtn} from './NavbarElements';


const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
          <NavbarContainer>
              <NavLogo to='/'>ME</NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars style={{background: '#000'}} />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks to='home' spy={true} smooth={true} offset={-100} duration={500}>HOME</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='about' spy={true} smooth={true} offset={-100} duration={500}>ABOUT</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='skills' spy={true} smooth={true} offset={-100} duration={500}>SKILLS</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='projects' spy={true} smooth={true} offset={-100} duration={500}>PROJECTS</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='contacts' spy={true} smooth={true} offset={-100} duration={500}>CONTACTS</NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <ResumeBtn to='https://github.com/' target='_blank'>RESUME</ResumeBtn>
              </NavBtn>
          </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;