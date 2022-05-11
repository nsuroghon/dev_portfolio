import React, {useContext, useState} from 'react'
// import Data from '../data';

// context
import ResumeContext from '../context/ResumeContext';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Resume = () => {
  const {resumeData, isLoading} = useContext(ResumeContext);

  // if (!isLoading && (!resumeData || resumeData.length === 0)) {
  //   return <span>Loading...</span>
  // }

  return isLoading ? <h3>Loading...</h3> : (
    <div className='wrapper'>
      <Navigation />

      <div className="resume">
        <div className="resume__content">
          <div className="resume__education">
            <div className="resume__resume-header">
              <h1>Education</h1>
            </div>
            <div className="information">
              {resumeData.education.map( (item) =>
                <div className="resume__education-item"
                key={item.id}
                >
                  <h3>{item.institution} • {item.gradYear}</h3>
                  <h2>{item.degree} - {item.major}</h2>
                </div>
              )}
            </div>
          </div>
          <div className="resume__skills">

              <div className="resume__resume-header">
                <h1>Skills</h1>
              </div>

              <div className="resume__skills-information">

                {resumeData.skills.map( (item) =>
                <div className="resume__skills-item"
                  key={item.id}
                  >
                  <h2 className="skill-name">{item.type}</h2>
                    <div className='technology'>
                      <h3>Technology</h3>
                      <ul>
                        {item.technology.map( (technology, index) => 
                          <li key={index}>{technology}</li>
                        )}
                      </ul>
                    </div>
                    
                    <div className='concepts'>
                      <h3>Concepts</h3>
                      <ul>
                        {item.concepts.map( (concept, index) => 
                          <li key={index}>{concept}</li>
                        )}
                      </ul>
                    </div>
                      
                  <div className="insitution"></div>
                  <div className="date"></div>
                </div>
                )}
              </div>
          </div>
        </div>
      </div>

        {/* DOWNLOAD RESUME BUTTON */}
        <div className='skills__email-box'>
          <a className="btn btn--landing btn--dark" href="" target="_blank">Resume</a>
        </div>
    </div>
  )
}

export default Resume