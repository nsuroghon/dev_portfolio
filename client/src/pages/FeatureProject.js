import React, { useContext, useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import ProjectsContext from '../context/ProjectsContext';

const FeatureProject = () => {
  const [selected, setSelected] = useState({})

  const {projectSelected} = useContext(ProjectsContext)
  // const theProject = projectSelected.item
  // console.log(theProject)

  useEffect( () => {
    setSelected(projectSelected.item)
  }, [projectSelected])

  console.log(selected)

  return (
    <div className='featuredProjPage'>
      <Navigation />
      <div className="featuredContent">
        <div className="h1">{selected.id}</div>
        <div className="h1">{selected.text}</div>
        <div className="h1">{selected.title}</div>
      </div>
    </div>
  )
}

export default FeatureProject