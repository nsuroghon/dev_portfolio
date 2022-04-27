import React from 'react'
import Socials from '../components/Socials'
import {Link} from 'react-router-dom';


const Navigation = () => {
  return (
    <div className='navigation'>
      <div className="navigation__logo-wrap">
        <Link className='logo' to="/">
            <img src=''></img>
        </Link>

      </div>

      <div className="navigation__menu">

        <div className="navigation__menu-list">
          <div className='navigation__menu-item'>
            <Link to="/"><a>Main</a></Link>
          </div>
          <div className='navigation__menu-item'>
            <Link to="/projects"><a>Projects</a></Link>
          </div>
          <div className='navigation__menu-item'>
            <Link to="/skills"><a>Skills / Resume</a></Link>
          </div>
          <div className='navigation__menu-item'>
            <Link to="/contact"><a>Contact</a></Link>
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