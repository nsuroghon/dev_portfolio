import React from 'react'

const Landing = () => {
  return (
    <div className='landing'>
        <div className='landing__logo-box'>
          <img className='landing__logo' alt='logo'></img>
        </div>
        <div className='landing__nav-box'>
          <a className='btn btn--light'>Button</a>
          <a className='btn btn--light'>Button</a>
          <a className='btn btn--light'>Button</a>
        </div>
        <div className='landing__heading-box'>
          <h1 className='heading-primary'></h1>
        </div>
        <div className="landing__email-box">
          <a href='#' className='btn btn--dark'>Email</a>
        </div>
        <div className='socialsBox'>
          <a href='#'>Social Media</a>
        </div>
    </div>
  )
}

export default Landing