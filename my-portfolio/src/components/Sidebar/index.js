import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarResumeBtn } from './SidebarElements'

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='home' onClick={toggle} spy={true} smooth={true} offset={-100} duration={500}>Home</SidebarLink>
                <SidebarLink to='about' onClick={toggle} spy={true} smooth={true} offset={-100} duration={500}>About</SidebarLink>
                <SidebarLink to='skills' onClick={toggle} spy={true} smooth={true} offset={-100} duration={500}>Skills</SidebarLink>
                <SidebarLink to='projects' onClick={toggle} spy={true} smooth={true} offset={-100} duration={500}>Projects</SidebarLink>
                <SidebarLink to='contacts' onClick={toggle} spy={true} smooth={true} offset={-100} duration={500}>Contacts</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarResumeBtn to='https://drive.google.com/file/d/15O9C9FrH0gYVbRF5Y-rG8Rv1WZr0Xug1/view?usp=sharing' target='_blank' onClick={toggle}>Resume</SidebarResumeBtn>
            </SidebarBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar