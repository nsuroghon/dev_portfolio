import React from 'react'

import { MdOutlineMarkEmailRead } from 'react-icons/md'

const Contact = () => {
  return (
    <div className="contact">
      <div className='contact__icon-box'>
        <MdOutlineMarkEmailRead size={200}/>
      </div>
      <div className="contact__inquiries">
          <h1>
            <h1>Please send all inquiries to:</h1>
            <span>nsuroghon@gmail.com</span>
          </h1>
        </div>
    </div>
  )
}

export default Contact