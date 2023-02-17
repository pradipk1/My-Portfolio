import React from 'react'
import './home.css';
import pic from './profile.jpg'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { ResumeBtn } from '../Navbar/NavbarElements';

function HomeNav() {

  const [text] =useTypewriter({
    words: ['Full Stack Developer', 'MERN Stack Developer', 'Problem Solver'],
    loop: {},
    typeSpeed: 130,
    deleteSpeed:80,
  })

  
  return (
    <div id='home'>
      <div className='home-img-div'>
        <img src={pic} alt='profile pic'/>
      </div>
      <div className='home-desc-div'>
        <h2 className='home-h2'>Hi There! <span className='wave'>👋🏻</span></h2>
        <h1 className='home-h1'>I'm <span className='colored-span-tag'>Pradip Shukla</span></h1>
        <h2 className='home-h2' style={{marginBottom:'30px'}}>
          <span className='colored-span-tag'>{text}</span>
          <span className='colored-span-tag'><Cursor cursorStyle='|'/></span>
        </h2>
        <ResumeBtn to='https://github.com/' target='_blank'>Find My Resume</ResumeBtn>
      </div>
    </div>
  )
}

export default HomeNav;