import React from 'react';
import {Link} from 'react-router-dom';

// components
import Socials from '../components/Socials';

// const toggleButton = document.getElementsByClassName('toggle-button')[0];
// const navbarLinks = document.getElementsByClassName('navigation__menu')[0];

const setActive = () => {
  const navbarLinks = document.getElementsByClassName('navigation__menu')[0];
  navbarLinks.classList.toggle('active');

  const toggleBtn = document.getElementsByClassName('navigation__toggle-button')[0];
  toggleBtn.classList.toggle('active');
}

const Navigation = () => {
  return (
    <nav className='navigation'>
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

      <div className="navigation__menu">
        <ul className="navigation__menu-list">
          <li className='navigation__menu-item'>
            <Link to="/"><a>Main</a></Link>
          </li>
          <li className='navigation__menu-item'>
            <Link to="/projects"><a>Projects</a></Link>
          </li>
          <li className='navigation__menu-item'>
            <Link to="/resume"><a>Skills / Resume</a></Link>
          </li>
          <li className='navigation__menu-item'>
            <Link to="/contact"><a>Contact</a></Link>
          </li>
        </ul>

        <div className="navigation__menu-socials">
          <Socials />
        </div>

      </div>
    </nav>
  )
}

export default Navigation