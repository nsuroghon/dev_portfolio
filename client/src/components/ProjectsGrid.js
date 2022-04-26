import React, { useContext, useState } from 'react';
import ProjectsContext from '../context/ProjectsContext';

const ProjectsGrid = () => {

  const {projects, displayProject, projectSelected} = useContext(ProjectsContext);
  return (
    <div className="grid">

        {projects.map((project) => 
          // <div className='grid__item'
          //   key={project.id} 
          //   onClick={() => displayProject(project)}
          //   // style={{backgroundImage: `url(${project.thumbnail})`}}
          //   >
            <img className='grid__item'
              src={project.thumbnail}
              key={project.id} 
              onClick={() => displayProject(project)}
              // src="http://fakeimg.pl/360x360/111/?text=2"
              alt={project.title}
              height='360'
              width='360'
            >

            </img>
            // {/* <div className="projects-grid__project-item-cover">
            //   <div className="h2">{project.title}</div>
            //   <p>{project.text}</p>
            // </div> */}
          // </div>

        )}
      </div>
  )
}

export default ProjectsGrid