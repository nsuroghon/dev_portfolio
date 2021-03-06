import React, { useContext } from 'react';
import ProjectsContext from '../context/ProjectsContext';

const ProjectsGrid = () => {

  const {projects, displayProject} = useContext(ProjectsContext);
  
  return (
    <div className="grid">

        {projects.map((project) => 
          <div className='grid__item--container'
          key={project.id} >
            <img className='grid__item'
              src={project.thumbnail}
              onClick={() => displayProject(project)}
              alt={project.title}
            >
            </img>
          </div>

        )}
      </div>
  )
}

export default ProjectsGrid