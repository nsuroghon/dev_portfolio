import React, { useContext, useState } from 'react';
import ProjectsContext from '../context/ProjectsContext';

const ProjectsGrid = () => {

  const {projects, displayProject, projectSelected} = useContext(ProjectsContext);
  return (
    <div className="projects-grid">

        {projects.map((project) => 
    
          <div className='projects-grid__project-item'
          key={project.id} 
          onClick={() => displayProject(project)}
          style={{backgroundImage: `url(${project.thumbnail})`}}
          >
            <div className="projects-grid__project-item-cover"
                //  style={{backgroundImage: `url(${project.thumbnail})`}}
            >
              <div className="h2">{project.title}</div>
              <p>{project.text}</p>
            </div>
          </div>

        )}
      </div>
  )
}

export default ProjectsGrid