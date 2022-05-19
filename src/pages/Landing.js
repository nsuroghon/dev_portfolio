import React from 'react';
import {Link} from 'react-router-dom';

// icons
import { MdOutlineEdit } from 'react-icons/md';

// components
import Socials from '../components/Socials';

const Landing = () => {
  return (

    <section className="landing">
        <div className="container">
            <div className="content">
                <div className="logo-box">
                  <img className='logo' alt='logo' src='/assets/images/signature_large.png'></img>
                </div>
                <div className="nav-box">
                  <div className="btn-container">
                    <Link to="/projects" className='btn btn--landing btn--light'>Projects</ Link>
                  </div>
                  <div className="btn-container">
                    <Link to="/resume" className='btn btn--landing btn--light'>Skills</ Link>
                  </div>
                  <div className="btn-container">
                    <Link to="/contact" className='btn btn--landing btn--light'>Contact</ Link>
                  </div>
                </div>
                <div className="description">
                  <h1 className='name'>Niv Suroghon</h1>
                  <h1>Canadian-based software developer since 2020. </h1>
                </div>
                <div className="email-box">
                  <Link to='/contact' className='btn btn--landing btn--accent btn--animated'>Email <MdOutlineEdit style={{paddingTop: '0.3rem'}}/> </Link>
                </div>
          
                <Socials className='landing__socials-box' />
              
                
            </div>
        </div>
    </section>
  )
}

export default Landing