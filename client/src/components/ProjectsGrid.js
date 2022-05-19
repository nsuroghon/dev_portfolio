import React, { useContext, useState } from 'react';
import ProjectsContext from '../context/ProjectsContext';

const ProjectsGrid = () => {

  const {projects, displayProject, projectSelected} = useContext(ProjectsContext);
  
  return (
    <div className="grid">

        {projects.map((project) => 
          <div className='grid__item--container'>
            <img className='grid__item'
              src={project.thumbnail}
              key={project.id} 
              onClick={() => displayProject(project)}
              // src="http://fakeimg.pl/360x360/111/?text=2"
              alt={project.title}
            >
            </img>
            {/* <div className="overlay">
              <h2>{project.title}</h2>
            </div> */}
          </div>

        )}
      </div>
  )
}

export default ProjectsGrid