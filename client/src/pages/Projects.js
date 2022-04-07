import React, { useContext, useState } from 'react';
import Navigation from '../components/Navigation';
import {Link} from 'react-router-dom';

import ProjectsContext from '../context/ProjectsContext';

const Projects = () => {
  const {projects, displayProject} = useContext(ProjectsContext)

  // const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className='projects'>
      <Navigation />
      <div className="projects-grid">

        {projects.map((project) => 
        <Link 
        to='/featureProject'
        >
          <div className='projects-grid__project-item'
          key={project.id} 
          onClick={() => displayProject(project)}
          >
            <div className="projects-grid__project-item-cover">
              <div className="h2">{project.title}</div>
              <p>{project.text}</p>
            </div>
          </div>

        </Link>
        )}
      </div>

    </div>
  )
}

export default Projects