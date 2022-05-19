import React, { useContext } from 'react';

// components 
import Tools from './Tools';
import Footer from '../components/Footer';

// context
import ProjectsContext from '../context/ProjectsContext';

const SingleProject = () => {

    const {projectSelected} = useContext(ProjectsContext)
    console.log(projectSelected);

  return (
    <div className="featured">
      <div className="featured__content"> 
       
        <div className="featured__title">
          <h1>{projectSelected.item.title}</h1>
        </div>

        <div className='featured__description'>
          <p>{projectSelected.item.text}</p>
        </div>

        <div className='featured__more-info'>
          <p className='type'>Role:</p><p>{projectSelected.item.role}</p>
          <p className='type'>Agency:</p><p>{projectSelected.item.agency}</p>
          <p className='type'>Year:</p><p>{projectSelected.item.year}</p>
        </div>

        <div className="featured__images">

          {
            projectSelected.item.images.map( (image) => {
              return (
                <img src={image} className="noSelect"></img>
              )
            })
          }
        </div>
      </div>
      
      <Tools />

    </div>
  )
}

export default SingleProject