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
    <div className='Wrapper'>
      <Navigation />

      <div className="resume">
        <div className="resume__content">
          <div className="resume__education">
            <h1>Education</h1>
            {resumeData.education.map( (item) =>
              <div className="education_item"
                key={item.id}
              >
                <div className="metatitle">{item.degree}{item.major}</div>
                <div className="insitution">{item.institution}</div>
                <div className="date">{item.gradYear}</div>
              </div>
            )}
          </div>

          <div className="resume__skills">
            <h1>Skills</h1>
            {resumeData.skills.map( (item) =>
              <div className="education_item"
                key={item.id}
                >
                <div className="metatitle">{item.type}</div>
                
                    {item.technology.map( (technology, index) => 
                    <div key={index}>
                      <ul>
                        <li>{technology}</li>
                      </ul>
                    </div>
                  )}
                    {item.concepts.map( (concept, index) => 
                    <div key={index}>
                      <ul>
                        <li>{concept}</li>
                      </ul>
                    </div>
                  )}
                <div className="insitution"></div>
                <div className="date"></div>
              </div>
            )}
          </div>
        </div>
      </div>
  )

      {/* <div className="skills__main-container">
         <div className="skills__content-box">
            <h1 className='skills__header'><span>Education</span></h1>
            <div className="skills__data">
              {
                Data.education && Data.education.map((item)=>{
                  return(
                    <div>
                       <div>
                          <h3>{item.UniversityName}</h3>
                          <p>
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div> */}
        {/* <div className="skills__content-box">
          <h1 className='skills__header'><span>Skills</span></h1>     
            <div className="skills__data">
              {
                Data.work && Data.work.map((item) => {
                  return(
                    <div className="">
                       <div className="">
                          <h3>{item.CompanyName}</h3>
                          <p className="">
                          {item.specialization}
                          <span>&bull;</span> <em className="">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
        </div> */}

        {/* DOWNLOAD RESUME BUTTON */}
        {/* <div className='skills__email-box'>
          <a className="btn btn--landing btn--dark" href="" target="_blank">Resume</a>
        </div> */}
    </div>
  )
}

export default Resume