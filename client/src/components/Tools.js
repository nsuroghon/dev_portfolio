import React, { useContext, useEffect, useState } from 'react';
import ProjectsContext from '../context/ProjectsContext';


const Tools = () => {
    const {projectSelected, removeProject} = useContext(ProjectsContext)

    // page movement
    const scrollUp = () => {
        window.scrollBy({
            top: -200,
            behavior: 'smooth'
        });
    };
      const scrollDown = () => {
        window.scrollBy({
            top: 200,
            behavior: 'smooth'
        });
    };

  return (
    <div className='tools'>
        <div className="tool">
          <a onClick={scrollUp}>
            <span className='bar'></span>
            {/* <span className='bar'></span>
            <span className='bar'></span> */}
          </a>
        </div>
        <div className="tool">
          <a href='#' onClick={removeProject}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </a>
        </div>
        <div className="tool">
          <a onClick={scrollDown}>
            <span className='bar'></span>
            {/* <span className='bar'></span>
            <span className='bar'></span> */}
          </a >
        </div>
      </div>
  )
}

export default Tools