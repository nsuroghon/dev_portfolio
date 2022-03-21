import React from 'react'
import Socials from '../components/Socials'

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className="navigation__logo">
        <span>logo</span>
      </div>

      <div className="navigation__menu">
        <div className="navigation__menu-list">
          <div className='navigation__menu-item'>
            <a>Main</a>
          </div>
          <div className='navigation__menu-item'>
            <a>Projects</a>
          </div>
          <div className='navigation__menu-item'>
            <a>About</a>
          </div>
          <div className='navigation__menu-item'>
            <a>Resume</a>
          </div>
        </div>

        <div className="menu-socials">
          <Socials />
        </div>
      </div>

      {/* <div className="navigation__socials">
        <Socials />
      </div> */}

    </div>
  )
}

export default Navigation