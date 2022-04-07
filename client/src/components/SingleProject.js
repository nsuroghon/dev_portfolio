import React, { useContext, useEffect, useState } from 'react';

// context
import ProjectsContext from '../context/ProjectsContext';

const SingleProject = () => {
    const {projectSelected} = useContext(ProjectsContext)

  return (
      <div className="featuredContent">
        <div className="h1">{projectSelected.item.id}</div>
        <div className="h1">{projectSelected.item.title}</div>
        <div className="h1">{projectSelected.item.text}</div>
      </div>
  )
}

export default SingleProject