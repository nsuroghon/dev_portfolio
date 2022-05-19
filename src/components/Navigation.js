import React from 'react'
import Socials from '../components/Socials'
import {Link} from 'react-router-dom';

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navigation__menu')[0];

const setActive = () => {
  const navbarLinks = document.getElementsByClassName('navigation__menu')[0];
  navbarLinks.classList.toggle('active');

  const toggleBtn = document.getElementsByClassName('navigation__toggle-button')[0];
  toggleBtn.classList.toggle('active');
}

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className="navigation__logo-wrap">
        <Link to="/">
            <img className='logo' src='/assets/images/signature_medium.png' width={105} height={50}></img>
        </Link>
      </div>
      <div className="navigation__toggle-button-wrap">
        <a href="#" onClick={setActive} className='navigation__toggle-button'>
          <span className='navigation__bar'></span>
          <span className='navigation__bar'></span>
          <span className='navigation__bar'></span>
        </a>
      </div>
      {/* <a href="#" onClick={setActive} className='navigation__toggle-button'>
        <span className='navigation__bar'></span>
        <span className='navigation__bar'></span>
        <span className='navigation__bar'></span>
      </a> */}

      <div className="navigation__menu">
        <div className="navigation__menu-list">
          <div className='navigation__menu-item'>
            <Link to="/"><a>Main</a></Link>
          </div>
          <div className='navigation__menu-item'>
            <Link to="/projects"><a>Projects</a></Link>
          </div>
          <div className='navigation__menu-item'>
            <Link to="/resume"><a>Skills / Resume</a></Link>
          </div>
          <div className='navigation__menu-item'>
            <Link to="/contact"><a>Contact</a></Link>
          </div>
        </div>

        <div className="navigation__menu-socials">
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Navigation