import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Socials = () => {
  return (
    <div className='socials'>
        <ul>
            <li>
                <a> <FaGithub /> </a>
            </li>
            <li>
                <a> <FaLinkedin /> </a>
            </li>
            <li>
                <a> <MdOutlineEmail /> </a>
            </li>
        </ul>
        {/* <a className='btn btn--light'>
            <FaGithub />
        </a>
        <a className='btn btn--light'> 
            <MdOutlineEmail /> 
        </a>
        <a className='btn btn--light'>
            <FaLinkedin />
        </a> */}
    </div>
    
  )
}

export default Socials