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
        {/* <div className="resume__content"> */}
          <div className="resume__header">
            <h1>About Me...</h1>
          </div>
          <div className='resume__target'>
            <div className="education">
              <h2>Education.</h2>
              <ul>
                {resumeData.education.map( (item) => 
                  <li>{item}</li>
                )}
              </ul>
            </div>
            <div className="technology">
              <h2>Technology.</h2>
              <ul>
              {resumeData.technology.map( (item) => 
                  <li>{item}</li>
                )}
              </ul>
            </div>
            <div className="concepts">
              <h2>Skills.</h2>
              <ul>
              {resumeData.skills.map( (item) => 
                  <li>{item}</li>
                )}
              </ul>
            </div>
          </div>
          
          {/* <div className="resume__education">
            <div className="resume__resume-header">
              <h1>Education</h1>
            </div>
            <div className="information">
              {resumeData.education.map( (item) =>
                <div className="resume__education-item"
                key={item.id}
                >
                  <h2>{item.institution}</h2>
                  <p className='degree'>{item.degree} - {item.major} • {item.gradYear}</p>
                  <p className='description'>{item.description}</p>
                </div>
              )}
            </div>
          </div> */}
          {/* <div className="resume__skills">

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
                      <span>Technology</span>
                      <ul>
                        {item.technology.map( (technology, index) => 
                          <li key={index}>{technology}</li>
                        )}
                      </ul>
                    </div>
                    
                    <div className='concepts'>
                      <span>Concepts</span>
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
          </div> */}
        {/* </div> */}
      </div>

        {/* DOWNLOAD RESUME BUTTON */}
        <div className='download-box'>
          <a className="btn btn--landing btn--accent" href="" target="_blank">Download Resume</a>
        </div>

        <Footer />
    </div>
  )
}

export default Resume