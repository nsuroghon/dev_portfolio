import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

import { MdOutlineEmail } from 'react-icons/md'

const Socials = () => {
  return (
    <div className="socials">
        <div className="socials__icon-box">
            <a href='https://github.com/nsuroghon' target="_blank" className='socials__icon'>
                <FiGithub size={14} />
            </a>
        </div>
        <div className="socials__icon-box">
            <a href='https://linkedin.com/in/nivsuroghon' target="_blank" className='socials__icon'>
                <FaLinkedinIn size={15} />
            </a>
        </div>
        <div className="socials__icon-box">
            <a href='mailto:nsuroghon@gmail.com' className='socials__icon'>
                <MdOutlineEmail size={16} />
            </a>
        </div>
    </div>
  )
}

export default Socials