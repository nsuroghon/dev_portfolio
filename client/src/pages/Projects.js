import React, { useContext, useState, useEffect } from 'react';
// import {Link} from 'react-router-dom';

// context
import ProjectsContext from '../context/ProjectsContext';

// Components
import Navigation from '../components/Navigation';
import ProjectsGrid from '../components/ProjectsGrid';
import SingleProject from '../components/SingleProject';
import Footer from '../components/Footer';


const Projects = () => {
  const {projects, displayProject, projectSelected, removeProject} = useContext(ProjectsContext)

  useEffect(() => {
    removeProject()
  }, [])
  

  return projectSelected.displayed === false ? 
    <div className='projects'>
      <Navigation />
      <ProjectsGrid />
      <Footer />
    </div>

    :

    <div className='projects'>
      <Navigation />
      <SingleProject />
    </div>
}

export default Projects