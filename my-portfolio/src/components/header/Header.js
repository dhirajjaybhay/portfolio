import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div>
      <div className='header d-flex justify-content-between'>
        <div className='logo d-flex justify-content-center'>
          <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill="white" />
            </svg>

          </div>
          <div className='logoName'>
            <h1 className='mb-0'>Dhiraj Jaybhay</h1>
          </div>

        </div>
        <div className='menu'>

          <ul className='d-flex navMenu'>
            <li><a href="/"><span className='hastag'>#</span><span className='home'>Home</span></a></li>
            <li><a href="/"><span className='hastag'>#</span><span className='skills'>Skills</span></a></li>
            <li><a href="/"><span className='hastag'>#</span><span className='projects'>Projects</span></a></li>
            <li><a href="/"><span className='hastag'>#</span><span className='experiance'>Experiance</span></a></li>
            <li><a href="/"><span className='hastag'>#</span><span className='aboutMe'>About Me</span></a></li>
          </ul>

        </div>
        <div className='hamburgerMenu d-none'> 

             <h1>44</h1>
        </div>
      </div>



    </div>
  )
}
