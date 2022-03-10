import React from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import Socials from '../components/Socials'

const Landing = () => {
  return (
    <div className='landing'>
        <div className='landing__logo-box'>
          <img className='landing__logo' alt='logo'></img>
        </div>
        <div className='landing__nav-box'>
          <div className="btn-container">
            <a className='btn btn--light'>Button</a>
          </div>
          <div className="btn-container">
            <a className='btn btn--light'>Button</a>
          </div>
          <div className="btn-container">
            <a className='btn btn--light'>Button</a>
          </div>
          {/* <a className='btn btn--light'>Button</a>
          <a className='btn btn--light'>Button</a>
          <a className='btn btn--light'>Button</a> */}
        </div>
        <div className='landing__heading-box'>
          <h1 className='landing__heading-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna pharetra, tempus risus venenatis, commodo nibh. Morbi eros tellus, ultricies id ornare at, vehicula ut nisl. Donec eros augue, auctor nec justo maximus, placerat imperdiet lacus. Cras risus nisl, accumsan ac fringilla at, vulputate ut libero. Cras a sapien venenatis, interdum mi vel, laoreet libero.</h1>
        </div>
        <div className="landing__email-box">
          <a href='#' className='btn btn--dark'>Email <MdOutlineEdit style={{paddingTop: '0.3rem'}}/> </a>
        </div>
        <div className='landing__socials-box'>
          {/* <a href='#'>Social Media</a> */}
          <Socials />
        </div>
    </div>
  )
}

export default Landing