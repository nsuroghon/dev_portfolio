import React, { useContext, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

// context
import ProjectsContext from '../context/ProjectsContext';

// Components
import Navigation from '../components/Navigation';
import ProjectsGrid from '../components/ProjectsGrid';
import SingleProject from '../components/SingleProject';


const Projects = () => {
  const {projects, displayProject, projectSelected, removeProject} = useContext(ProjectsContext)

  useEffect(() => {
    removeProject()
  }, [])
  

  return projectSelected.displayed === false ? 
    <div className='projects'>
      <Navigation />
      <ProjectsGrid />

    </div>

    :

    <div className='projects'>
      <Navigation />
      
      <SingleProject />

    </div>

  // return (
    // <div className='projects'>
    //   <Navigation />
    //   <div className="projects-grid">

    //     {projects.map((project) => 
    //     <Link 
    //     to='/featureProject'
    //     >
    //       <div className='projects-grid__project-item'
    //       key={project.id} 
    //       onClick={() => displayProject(project)}
    //       >
    //         <div className="projects-grid__project-item-cover">
    //           <div className="h2">{project.title}</div>
    //           <p>{project.text}</p>
    //         </div>
    //       </div>

    //     </Link>
    //     )}
    //   </div>

    // </div>
  // )
}

export default Projects