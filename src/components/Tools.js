import React, { useContext, useEffect, useState } from 'react';
import ProjectsContext from '../context/ProjectsContext';

// icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdMenu, MdApps } from "react-icons/md";


const Tools = () => {
    const {projectSelected, removeProject} = useContext(ProjectsContext)

    // page movement
    const scrollUp = () => {
        window.scrollBy({
            top: -400,
            behavior: 'smooth'
        });
    };
      const scrollDown = () => {
        window.scrollBy({
            top: 400,
            behavior: 'smooth'
        });
    };

  return (
    <div className='tools'>
        <div className="tool">
          <a onClick={scrollUp} className="tool__icon" id='top'>
            <MdKeyboardArrowUp size={30} />
          </a>
        </div>
        <div className='tool'>
          <a href='#' onClick={removeProject} className="tool__icon" id='menu'>
            <MdMenu size={30} />
          </a>
        </div>
        <div className="tool">
          <a onClick={scrollDown} className="tool__icon" id='bot'>
            <MdKeyboardArrowDown size={30} />
          </a >
        </div>
      </div>
  )
}

export default Tools