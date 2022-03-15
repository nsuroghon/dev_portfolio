import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

import { MdOutlineEmail } from 'react-icons/md'

const Socials = () => {
  return (
    <div className="socials">
        <div className="socials__icon-box">
            <a className='socials__icon'>
                <FiGithub />
            </a>
        </div>
        <div className="socials__icon-box">
            <a className='socials__icon'>
                <FaLinkedinIn />
            </a>
        </div>
        <div className="socials__icon-box">
            <a className='socials__icon'>
                <MdOutlineEmail />
            </a>
        </div>
            {/* <ul className='socials__list'>
                <li className='socials__item'>
                    <a className='btn socials__btn--icon'> <FiGithub /> </a>
                </li>
                <li className='socials__item'>
                    <a className='btn socials__btn--icon'> <FaLinkedinIn /> </a>
                </li>
                <li className='socials__item'>
                    <a className='btn socials__btn--icon'> <MdOutlineEmail /> </a>
                </li>
            </ul>    */}
    </div>
  )
}

export default Socials