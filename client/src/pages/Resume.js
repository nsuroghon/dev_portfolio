import React, {useContext, useState} from 'react'
// import Data from '../data';

// context
import ProjectsContext from '../context/ProjectsContext';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Resume = () => {
  const {resume} = useContext(ProjectsContext);

  return (
    <div>
      <Navigation />

      <div className="resume">
        <div className="resume__content">
          <div className="skills">
            <h1>Skills</h1>
            {/* {resume.skills.map((skill) => 
              console.log(skill)
            )} */}
          </div>
        </div>
      </div>

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