import React from 'react'
import Socials from '../components/Socials'
import {Link} from 'react-router-dom';


const Navigation = () => {
  return (
    <div className='navigation'>
      <div className="navigation__logo">
        <span>logo</span>
      </div>

      <div className="navigation__menu">

        <div className="navigation__menu-list">
          <div className='navigation__menu-item'>
            <Link to="/"><a>Main</a></Link>
          </div>
          <div className='navigation__menu-item'>
            <a>Projects</a>
          </div>
          <div className='navigation__menu-item'>
            <a>Skills / Resume</a>
          </div>
        </div>

        <div className="navigation__menu-socials">
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