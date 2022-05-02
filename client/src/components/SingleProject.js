import React, { useContext, useEffect, useState } from 'react';

// context
import ProjectsContext from '../context/ProjectsContext';

const SingleProject = () => {
    const {projectSelected} = useContext(ProjectsContext)

  return (
    <div className="featured">
      <div className="featured__content"> 
        <div className="featured__metatitle">
          <h1>SpaceX</h1>
        </div>
        <div className="featured__title">
          <h2>SpaceX - crew dragon displays</h2>
        </div>
        <p className='featured__description'>Principal UI/UX Designer working on the Crew Displays Team for SpaceX. Working with an all-star team of software engineers, operations engineers, and NASA astronauts I led the UI/UX design for the final 3 years of the project. They also trusted me enough to contribute code like a software engineer !!!</p>
        <div className='featured__more-info'>
          <p>Role: Developer</p>
          <p>Agency: SpaceX</p>
          <p>Year: 2020</p>
        </div>
        <div className="featured__images">
          <img src='http://fakeimg.pl/360x360/111/?text=2'></img>
        </div>
        {/* <div className="h1">{projectSelected.item.id}</div>
        <div className="h1">{projectSelected.item.title}</div>
        <div className="h1">{projectSelected.item.text}</div> */}
      </div>
    </div>
  )
}

export default SingleProject