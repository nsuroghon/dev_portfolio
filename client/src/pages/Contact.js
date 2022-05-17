import React from 'react'

import { MdOutlineMarkEmailRead } from 'react-icons/md'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className='contact__content'>
        <div className='contact__icon-box'>
          <MdOutlineMarkEmailRead size={200}/>
          <h1>Lets Work Together.</h1>
        </div>
        <div className="contact__inquiries">
            <h1>email me at:</h1>
            <span className='contact__email'>
              <a href='mailto:nsuroghon@gmail.com'>nsuroghon@gmail.com</a>
            </span>
       </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact