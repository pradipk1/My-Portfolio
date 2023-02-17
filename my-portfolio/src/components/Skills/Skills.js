import React from 'react'
import './skills.css';

function Skills() {
  return (
    <div id='skills'>
      <h1 className='section-head-tag'>My <span className='colored-span-tag'>Technical</span> Skills</h1>
      <div className='skills-desc-div'>
        <div className='skills-card-div'>
          <a className='skills-a' href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'>
            <img src='https://cdn-icons-png.flaticon.com/128/174/174854.png' alt='html'/>
            <p>HTML5</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Skills;